<script setup lang="ts">
import useGeoride from '~/composables/useGeoride'

const { tracker } = defineProps(['tracker'])

const trackerComputed = computed(() => tracker)

const events = ref(await useGeoride().getEvents(trackerComputed.value.trackerId))

const handleToggleLock = () => {
  useGeoride().toggleLock(trackerComputed.value.trackerId)
    .then(r => r.json())
    .then((r: any) => {
      trackerComputed.value.isLocked = r.locked
    })
}
</script>

<template>
  <div class="w-full px-3 pt-2 pb-3 flex flex-col items-start bg-orange-50 rounded-sm">
    <div class="flex justify-between w-full items-center mb-5 color-orange-400">
      <h3 class="font-bold text-lg">
        {{ trackerComputed.trackerName }}
      </h3>
      <p class="cursor-pointer" @click="handleToggleLock">
        <radix-icons-lock-open-2 v-if="!trackerComputed.isLocked" />
        <radix-icons-lock-closed v-else />
      </p>
    </div>
    <div class="mt-2 w-full flex gap-2 flex-col">
      <h4 class="w-full mb-1 text-start font-bold color-orange-200 text-md">
        Évenements
      </h4>
      <div v-for="event in events.events.rows" :key="event.id" class="rounded-sm w-full p-2 flex justify-between items-center px-3 py-2 bg-orange-200 color-orange-500">
        <p>{{ event.name }}</p>
        <p>{{ new Date(event.createdAt).toISOString().substring(0, 10) }}</p>
      </div>
    </div>
  </div>
</template>
