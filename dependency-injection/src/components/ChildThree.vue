<script setup>
import { inject } from 'vue'

const props = defineProps(['message'])

const greet = inject('greeting','default Greeting')
</script>
<template>
    <h1>Child Three</h1>
    <h2>We got message : {{ props.message }}</h2>
    <h2>We got Message via Dependency: {{ greet }}</h2>
</template>