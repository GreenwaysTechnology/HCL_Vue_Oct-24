<!-- Parent Component -->
<script setup>
import MyButton from './components/MyButton.vue'
</script>
<template>
    <MyButton class="fancy-btn"></MyButton>
</template>
<style>
.fancy-btn {
    background-color: #4caf50;
    border: none;
    color: rgb(255, 255, 255);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 16px;
}
</style>