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
    style: 'mapbox://styles/mapbox/light-v11',
    center: [props.pos.lng, props.pos.lat],
    zoom: 12,
    interactive: false,
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

const handleClick = () => {
  browser.windows.create({
    url: `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${props.pos.lat},${props.pos.lng}`,
  })
}
</script>

<template>
  <div :id="`mapContainer--${props.id}`" class="cursor-pointer w-full max-w-full h-[250px] rounded-md" @click="handleClick" />
</template>
