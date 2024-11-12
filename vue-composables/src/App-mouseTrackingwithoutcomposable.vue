<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})
</script>
<template>
  <div>
    <h1>X:{{ x }} Y: {{ y }}</h1>
  </div>
</template>