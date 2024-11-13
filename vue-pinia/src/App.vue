<script setup>
import { useCounterStore } from "./stores/counter.js";
const counterStore = useCounterStore()
</script>

<template>
 <h1>Counter App Using Pinia</h1>
 <h3>Value : {{counterStore.count}} {{counterStore.doubleIt}}</h3>
 <button @click="counterStore.increment">+</button>
</template>

<style scoped></style>