<script setup lang="ts">
import mapbox from 'mapbox-gl/dist/mapbox-gl.js'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps<{
  id: string
  pos: {
    lat: number
    lng: number
  }
}>()

const map = ref()
const marker = ref()

onMounted(() => {
  mapbox.accessToken = 'pk.eyJ1IjoiZXRpZW5uZW1wcm8iLCJhIjoiY2wzbHA0NmlnMGlqaTNjcDN6a211cGU3bSJ9.KO2RwjfkawmrRaPxXlI1eA'
  map.value = new mapbox.Map({
    container: `mapContainer--${props.id}`,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [props.pos.lng, props.pos.lat],
    zoom: 12,
  })
  marker.value = new mapbox.Marker({
    scale: 0.7,
    color: '#fb923c',
  })
    .setLngLat([props.pos.lng, props.pos.lat])
    .addTo(map.value)
  setTimeout(() => {
    map.value.resize()
  }, 1000)
})
</script>

<template>
  <div :id="`mapContainer--${props.id}`" class="w-full max-w-full h-[250px] rounded-md" />
</template>
