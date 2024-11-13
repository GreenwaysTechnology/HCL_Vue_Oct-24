<script setup>
import { ref } from 'vue';
const choice = ref("Male")

</script>
<template>
    <div>
        <h1>Select any One</h1>
        <input type="radio" id="Male" value="Male" checked v-model="choice" />
        <label for="Male">Male</label>
        <input type="radio" id="Female" value="Female" v-model="choice" />
        <label for="Female">FeMale</label>
    </div>
    <div>
        {{ choice }}
    </div>
</template>