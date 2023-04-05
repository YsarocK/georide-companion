<script setup lang="ts">
import useGeoride from '~/composables/useGeoride'
import { email } from '~/logic/storage'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}

const trackers = ref(await useGeoride().getTrackers())
// const currentTracker: Ref<number> = ref(0)
</script>

<template>
  <main class="w-[300px] flex flex-col px-4 py-5 text-center text-gray-700">
    <img class="mb-5 w-10 mx-auto" src="/assets/icon-512.png">
    <div>Georide Companion</div>
    <span class="opacity-50 mb-5">{{ email }}</span>
    <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>
    <div v-if="trackers">
      <div v-for="tracker in trackers" :key="tracker.trackerName">
        <h3>{{ tracker.trackerName }}</h3>
      </div>
    </div>
  </main>
</template>
