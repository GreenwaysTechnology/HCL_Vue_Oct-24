<script setup>
const props = defineProps({
  title: {
    default: "HCL",
  },
});
props.title  ='Microsoft'
</script>
<template>
  <header>
    <h1>{{ props.title }}</h1>
  </header>
</template>
<style></style>