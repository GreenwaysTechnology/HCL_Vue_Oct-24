<script setup>
import ChildThree from './ChildThree.vue'
import { inject } from 'vue'

const props = defineProps(['message'])
const welcome = inject('welcome','defaultWelcome')

</script>
<template>
    <h1>Child Two - {{welcome}}</h1>
    <ChildThree :message="props.message"></ChildThree>
</template>