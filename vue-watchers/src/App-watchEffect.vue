<script setup>
import { ref, watch, watchEffect } from 'vue';

const counter = ref(0)
// //watchers
// watch(counter, (newValue, oldValue) => {
//     console.log('oldValue=>', oldValue, 'newValue=>', newValue)
// })
watchEffect(() => {
    console.log('Watcher => ', counter.value)
})
</script>
<template>
    <h1>Counter {{ counter }}</h1>
    <button @click="counter++">+</button>
</template>
<style></style>