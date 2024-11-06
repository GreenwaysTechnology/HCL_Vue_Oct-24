<script setup>
import { ref } from "vue";
let like = ref(0);
let dislike = ref(0);
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ like }} Dislike {{ dislike }}</h1>
    <button @click="like++">Like</button>
    <button @click="dislike++">Dislike</button>
  </div>
</template>
<style></style>