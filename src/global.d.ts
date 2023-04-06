declare const __DEV__: boolean

declare module '*.vue' {
  const component: any
  export default component
}

declare module 'mapbox-gl/dist/mapbox-gl.js' {
  const mapboxgl: any
  export default mapboxgl
}
