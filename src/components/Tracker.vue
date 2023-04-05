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
  <div class="w-full px-3 pt-2 pb-3 flex flex-col gap-5 items-start bg-orange-50 rounded-sm">
    <div class="flex justify-between w-full items-center color-orange-400">
      <h3 class="font-bold text-lg flex gap-2 items-center">
        {{ trackerComputed.trackerName }}
        <div class="w-2 h-2 rounded-full" :class="trackerComputed.status === 'online' ? 'bg-green' : 'bg-red'" />
      </h3>
      <p class="cursor-pointer" @click="handleToggleLock">
        <radix-icons-lock-open-2 v-if="!trackerComputed.isLocked" />
        <radix-icons-lock-closed v-else />
      </p>
    </div>
    <div class="w-full flex flex-col gap-3 bg-white px-3 py-2 rounded-sm">
      <h4 class="flex gap-1 items-center color-orange-400 font-semibold">
        <radix-icons-lightning-bolt />
        Batteries
      </h4>
      <div class="flex items-center gap-4 color-orange-300">
        <p class="flex gap-1 items-center">
          Boitier : {{ trackerComputed.internalBatteryVoltage }}V
        </p>
        <p class="flex gap-1 items-center">
          Moto : {{ trackerComputed.externalBatteryVoltage }}V
        </p>
      </div>
    </div>
    <div class="mt-2 w-full flex gap-2 px-3 py-2 flex-col rounded-sm bg-white">
      <h4 class="w-full mb-1 text-start flex gap-1 items-center font-bold color-orange-400 font-semibold">
        <radix-icons-calendar />
        Évenements
      </h4>
      <div v-for="event in events.events.rows" :key="event.id" class="w-full gap-1 flex justify-between items-center color-orange-300">
        <p>{{ event.name }}</p>
        <p>{{ new Date(event.createdAt).toISOString().substring(0, 10) }}</p>
      </div>
    </div>
  </div>
</template>
