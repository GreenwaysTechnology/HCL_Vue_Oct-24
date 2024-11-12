<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log('oldValue=>', oldValue, 'newValue=>', newValue)
        }
    }
}
</script>
<template>
    <h1>Counter {{counter }}</h1>
    <button @click="counter++">+</button>
</template>
<style></style>