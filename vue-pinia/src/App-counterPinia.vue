<script setup>
import { useCounterStore } from './stores/counter.js'
const counter = useCounterStore()
</script>
<template>
    <div>
        <h1>Counter : {{ counter.count }} Double Counter: {{ counter.doubleIt }}</h1>
        <button @click="counter.increment">+</button>
    </div>
</template>