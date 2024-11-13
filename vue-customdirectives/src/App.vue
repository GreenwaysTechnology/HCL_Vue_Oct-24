<script setup>
import { ref } from 'vue';

const color = ref('green')
</script>
<template>
    <input v-focus/>
    <div v-highlight.value="color">TouchMe</div>
</template>