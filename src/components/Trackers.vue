<script setup lang="ts">
import useGeoride from '~/composables/useGeoride'

const trackers = ref(await useGeoride().getTrackers())
// const currentTracker: Ref<number> = ref(0)

// token.value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjE4NTUwLCJpYXQiOjE2ODA3MDAzNDMsImV4cCI6MTY4MzI5MjM0M30.hnSEtV3RtX1YUdUh2NyYofixCRgd_92DP7OnImYhAQY'
</script>

<template>
  <div v-if="trackers" class="w-full mt-10">
    <Tracker v-for="tracker in trackers" :key="tracker.trackerName" :tracker="tracker" />
  </div>
</template>
