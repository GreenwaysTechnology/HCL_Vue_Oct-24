<script setup>
import { ref } from "vue";
const fontSize = ref(10);
const activeColor = ref("red");

const increment = () => {
    fontSize.value += 2;
};
</script>
<template>
    <div style="font-size:20px;">
        <h1>Hello</h1>
    </div>

    <div :style="{ 'font-size': fontSize + 'px', color: activeColor }">
        <h1>Hello</h1>
    </div>
    <button @click="increment">zoom</button>
</template>
<style></style>
