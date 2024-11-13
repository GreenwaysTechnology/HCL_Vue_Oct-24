<script setup>
import { ref } from 'vue';
const checked = ref(true)

</script>
<template>
    <div>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{checked}}</label>
    </div>
</template>