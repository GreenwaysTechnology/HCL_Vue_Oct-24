<script setup>
import { reactive, toRefs } from "vue";
let { like, dislike, recommend } = toRefs(reactive({
    like: 0,
    dislike: 0,
    recommend: {
        rating: {
            value: 0
        }
    }
}))


const increment = () => {
    like.value++
}
const decrement = () => {
    dislike.value++
}
</script>
<template>
    <div>
        <h1>Review Component</h1>
        <h1>Like {{ like }} Dislike {{ dislike }} Rating {{ recommend.rating.value }}</h1>
        <button @click="increment">Like</button>
        <button @click="decrement">Dislike</button>
        <button @click="recommend.rating.value++">Rating</button>
    </div>
</template>
<style></style>