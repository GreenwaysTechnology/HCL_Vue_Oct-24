<script>
import { ref, watch } from 'vue';

export default {
    setup() {
        const counter = ref(0)
        //watchers
        watch(counter, (newValue, oldValue) => {
            console.log('oldValue=>', oldValue, 'newValue=>', newValue)
        })

        return {
            counter
        }
    }
}
</script>
<template>
    <h1>Counter {{ counter }}</h1>
    <button @click="counter++">+</button>
</template>
<style></style>
