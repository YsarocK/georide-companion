<script setup lang="ts">
import useGeoride from '~/composables/useGeoride'
import { email, token } from '~/logic/storage'

const creds: Ref<{ email: string; password: string }> = ref({
  email,
  password: '',
})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  useGeoride().getToken(creds.value.password)
    .then(r => r.json())
    .then((r: any) => {
      email.value = creds.value.email
      token.value = r.authToken
    })
}
</script>

<template>
  <main class="min-h-screen max-w-60 m-auto flex flex-col items-center justify-center px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <img src="/assets/icon-512.png" class="w-10 icon-btn mb-10 mx-auto text-2xl" alt="extension icon">
    <h1 class="font-bold text-xl">
      Options
    </h1>

    <form class="flex flex-col w-full mx-auto" @submit="handleSubmit">
      <input v-model="creds.email" placeholder="john@doe.com" class="border border-gray-200 rounded-sm px-2 py-1 mt-2">
      <input v-model="creds.password" type="password" placeholder="123456-dont-do-that" class="border border-gray-200 rounded-sm px-2 py-1 mt-2">
      <input class="cursor-pointer w-full px-2 py-1 mt-2 bg-orange-200 text-orange rounded-sm" type="submit" value="Modifier">
    </form>
  </main>
</template>
