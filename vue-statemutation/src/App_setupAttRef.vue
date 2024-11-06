<script setup>
import { ref } from 'vue';
//reactive state
let counter = ref(0);
const onIncrement = (evt) => {
    //mutate state
    counter.value++
}
</script>
<template>
    <div>
        <!-- Inside template ref's value property is implicit -->
        <h1>Counter : {{ counter }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>