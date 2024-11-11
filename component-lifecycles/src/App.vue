<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from "vue";
const counter = ref(0);
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log("onBeforeUpdate is called");
});
onUpdated(() => {
  console.log("OnUpdated is called")
})
</script>
<template>
  <h1>Component Life Cycles</h1>
  <button @click="counter++">{{counter}}</button>
</template>