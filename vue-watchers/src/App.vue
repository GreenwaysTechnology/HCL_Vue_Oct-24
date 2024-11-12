<script setup>
import { ref, watch } from 'vue';

const tmpCelsius = ref(0)
const tmpFarenheit = ref(0)

watch(tmpCelsius, newValue => {
    tmpFarenheit.value = Math.round((newValue * 9) / 5 + 32)
})

</script>
<template>
    <h1>TmpCelsius: {{tmpCelsius}} TmpFarenheit {{ tmpFarenheit }}</h1>
    <button @click="tmpCelsius+=3">TmpFarenheit</button>
</template>
<style></style>