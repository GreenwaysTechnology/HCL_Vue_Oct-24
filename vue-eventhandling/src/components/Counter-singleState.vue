<script>
export default {
    data() {
        //state
        return {
            counter: 0
        }
    },
    methods: {
        onIncrement() {
            this.counter++
        }
    },
}
</script>
<template>
    <div>
        <h1>Counter : {{ counter }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>