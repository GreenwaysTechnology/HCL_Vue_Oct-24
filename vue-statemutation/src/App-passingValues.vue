<script setup>
import { ref } from 'vue';
let counter = ref(0);
const onIncrement = (no, evt) => {
    counter.value += no
}
</script>
<template>
    <div>
        <!-- Inside template ref's value property is implicit -->
        <h1>Counter : {{ counter }}</h1>
        <button @click="onIncrement(2, '$event')">+</button>
    </div>
</template>