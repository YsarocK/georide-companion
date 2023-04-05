<script setup lang="ts">
import { email } from '~/logic/storage'
import Trackers from '~/components/Trackers.vue'

// function openOptionsPage() {
//   browser.runtime.openOptionsPage()
// }
</script>

<template>
  <main class="w-[300px] flex flex-col px-4 py-5 text-center text-gray-700">
    <img class="mb-5 w-10 mx-auto" src="/assets/icon-512.png">
    <div>Georide Companion</div>
    <span class="opacity-50 mb-5">{{ email }}</span>
    <!-- <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button> -->
    <Suspense>
      <Trackers />
    </Suspense>
  </main>
</template>
