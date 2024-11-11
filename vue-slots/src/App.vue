<script setup>
import ScopedSlot from './components/ScopedSlot.vue';
</script>
<template>
    <ScopedSlot v-slot="slotProps">
        {{ slotProps.message }}
    </ScopedSlot>
</template>