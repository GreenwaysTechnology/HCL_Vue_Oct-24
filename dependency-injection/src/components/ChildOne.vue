<script setup>
import { inject } from 'vue'
import ChildTwo from './ChildTwo.vue'
const props = defineProps(['message'])
const company = inject('companyName')
</script>
<template>
    <h1>Child One : {{company}}</h1>
    <ChildTwo :message="props.message"></ChildTwo>
</template>