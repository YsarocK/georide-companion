<script setup lang="ts">
import { email } from '~/logic/storage'
import Trackers from '~/components/Trackers.vue'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="sticky w-[300px] flex flex-col px-4 pt-2 pb-5 text-center text-gray-700 z-100">
    <div class="sticky bg-white p-3 left-0 top-0 w-full flex justify-between">
      <button class="color-orange-400" @click="openOptionsPage">
        <radix-icons-gear />
      </button>
      <button class="color-orange-400" @click="$forceUpdate">
        <radix-icons-update />
      </button>
    </div>
    <div>
      <img class="mb-5 w-10 mx-auto" src="/assets/icon-512.png">
      <div>Georide Companion</div>
      <p class="opacity-50 mb-5">
        {{ email }}
      </p>
    </div>
    <Suspense>
      <Trackers />
    </Suspense>
  </main>
</template>
