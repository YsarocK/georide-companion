<script setup lang="ts">
import { email } from '~/logic/storage'
import Trackers from '~/components/Trackers.vue'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="w-[300px] flex flex-col px-4 py-5 text-center text-gray-700">
    <img class="mb-5 w-10 mx-auto" src="/assets/icon-512.png">
    <div>Georide Companion</div>
    <span class="opacity-50 mb-5">{{ email }}</span>
    <Suspense>
      <Trackers />
    </Suspense>
    <button class="fixed top-3 right-3 color-orange-400" @click="openOptionsPage">
      <radix-icons-gear />
    </button>
    <button class="fixed top-3 left-3 color-orange-400" @click="$forceUpdate">
      <radix-icons-update />
    </button>
  </main>
</template>
