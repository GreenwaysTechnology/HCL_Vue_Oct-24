<script setup>
const onUpdate = (name,evt) => {
    console.log(name)
}
</script>
<template>
    <button @click="onUpdate('Subramanian')">SendData</button>
</template>