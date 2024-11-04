<script setup>
const firstName="Subramanian"
const lastName='Murugan'
</script>
<template>
<div>
    <h1>Data binding using interpolation {{name}}</h1>
    <h1>Data binding using v-text</h1>
    <h2 v-text="`Name ${firstName}  ${lastName} `"></h2>
    <h1>Data binding using v-html</h1>
    <h2 v-html="`Name ${name}`"></h2>

</div>
</template>