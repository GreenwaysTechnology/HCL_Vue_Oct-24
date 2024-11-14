<script setup>
import { useCounterStore } from '@/stores/counter.js'
const counterStore = useCounterStore()
</script>
<template>
    <div>
        <h1>Review</h1>
        <h1>Like {{ counterStore.count }}</h1>
        <button @click="counterStore.count++">+</button>
    </div>
</template>