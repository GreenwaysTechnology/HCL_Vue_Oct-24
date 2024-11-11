<script setup>
// import { useAttrs } from 'vue';
// const attrs = useAttrs()
// console.log(attrs.class)
</script>
<template>
    <button class="large">Click-{{$attrs}}</button>
</template>
<style scoped>
.fancy-btn {
    background-color: aqua;
}

.large {
    font-family: "Gill Sans Extrabold", sans-serif;
    color:blue;
    font-weight: bold;
}
</style>