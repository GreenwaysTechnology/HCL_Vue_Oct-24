<script setup>
import { ref } from 'vue';
const name = ref('defaultName')
</script>
<template>
    <h1>{{ name }}</h1>
    <input v-model="name" />
</template>