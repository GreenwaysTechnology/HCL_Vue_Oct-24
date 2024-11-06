<script setup>
import { reactive, ref } from "vue";
//let review = ref({ like: 0, dislike: 0 })
let review = reactive({ like: 0, dislike: 0 })

const increment = () => {
    //review.value.like++
    review.like++
}
const decrement = () => {
    //review.value.dislike++
    review.dislike++
}
</script>
<template>
    <div>
        <h1>Review Component</h1>
        <h1>Like {{ review.like }} Dislike {{ review.dislike }}</h1>
        <button @click="increment">Like</button>
        <button @click="decrement">Dislike</button>
    </div>
</template>
<style></style>