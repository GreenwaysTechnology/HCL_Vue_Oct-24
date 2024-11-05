<script>
export default {
    data() {
        //state
        return {
            like: 0,
            dislike:0
        }
    },
    methods: {
        onLike() {
            this.like++
        },
        onDislike() {
            this.dislike++
        }
    },
}
</script>
<template>
    <div>
        <h1>Like : {{ like }} Dislike :{{dislike}}</h1>
        <button @click="onLike">Like</button>
        <button @click="onDislike">Dislike</button>

    </div>
</template>