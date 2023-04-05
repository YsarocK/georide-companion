<script setup lang="ts">
import useGeoride from '~/composables/useGeoride'

const trackers = ref()

const forceUpdate = async () => {
  trackers.value = await useGeoride().getTrackers()
}

defineExpose({
  forceUpdate,
})

onMounted(async () => {
  trackers.value = await useGeoride().getTrackers()
})
</script>

<template>
  <div v-if="trackers" class="w-full mt-10">
    <Tracker v-for="tracker in trackers" :key="tracker.trackerName" :tracker="tracker" />
  </div>
</template>
