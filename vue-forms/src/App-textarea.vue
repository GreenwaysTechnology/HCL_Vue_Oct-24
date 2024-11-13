<script setup>
import { ref } from 'vue';
const mail = ref('')
</script>
<template>
    <div>
        <h2>{{ mail }}</h2>
        <label id="mail">Mail</label>
        <textarea v-model="mail" />
    </div>
</template>