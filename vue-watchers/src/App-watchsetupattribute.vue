<script setup>
import { ref, watch } from 'vue';
const counter = ref(0)
//watchers
watch(counter, (newValue, oldValue) => {
    console.log('oldValue=>', oldValue, 'newValue=>', newValue)
})
</script>
<template>
    <h1>Counter {{ counter }}</h1>
    <button @click="counter++">+</button>
</template>
<style></style>
