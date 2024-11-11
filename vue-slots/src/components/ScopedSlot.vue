<script setup>
import { ref } from 'vue';
let message = ref('from child')
</script>
<template>
    <slot :message="message"></slot>
</template>