<script setup>
import { ref } from 'vue';
const name = ref('defaultName')
const getInput = (evt) => {
  name.value = evt.target.value
}
</script>
<template>
  <h1>{{name}}</h1>
  <input @input="getInput" />
</template>