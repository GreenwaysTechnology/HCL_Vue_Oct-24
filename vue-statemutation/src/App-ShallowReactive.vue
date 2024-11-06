<script setup>
import { reactive,  shallowReactive } from "vue";
// let review = reactive({
//     like: 0,
//     dislike: 0,
//     recommend: {
//         rating: {
//             value: 0
//         }
//     }
// })
let review = shallowReactive({
    like: 0,
    dislike: 0,
    recommend: {
        rating: {
            value: 0
        }
    }
})

const increment = () => {
    review.like++
}
const decrement = () => {
    review.dislike++
}
</script>
<template>
    <div>
        <h1>Review Component</h1>
        <h1>Like {{ review.like }} Dislike {{ review.dislike }}  Rating {{review.recommend.rating.value}}</h1>
        <button @click="increment">Like</button>
        <button @click="decrement">Dislike</button>
        <button @click="review.recommend.rating.value++">Rating</button>
    </div>
</template>
<style></style>