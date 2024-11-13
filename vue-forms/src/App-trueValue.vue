<script setup>
import { ref } from 'vue';
const toggle = ref(true)
const truthyValue="Yes"
</script>
<template>
    <div>
        <input type="checkbox" :true-value="truthyValue" checked false-value="no" v-model="toggle" />
        <label for="Toggle">Toggle</label>
    </div>
    <div>
        <!-- {{toggle ? "Yes" : "No"}} -->
        {{ toggle }}
    </div>
</template>
