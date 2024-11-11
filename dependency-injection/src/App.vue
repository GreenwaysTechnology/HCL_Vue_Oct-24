<script setup>
import ChildOne from './components/ChildOne.vue'
import { ref, provide } from 'vue'
const message = ref('hello')
//dependency injection
provide('greeting', 'welcome to vue')
// provide("welcome", "welcome");
</script>
<template>
  <h1>Parent</h1>
  <ChildOne :message="message"></ChildOne>
</template>