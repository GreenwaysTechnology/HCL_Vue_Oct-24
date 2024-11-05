<script>
import ReviewDashboard from './ReviewDashboard.vue';
export default {
    components: {
        ReviewDashboard
    },
    data() {
        //reactive state
        return {
            like: 0,
            dislike: 0,
        };
    },
    methods: {
        onLike() {
            //access reactive state variable inside listener
            this.like++; //mutation happens
        },
        onDislike() {
            //access reactive state variable inside listener
            this.dislike++; //mutation happens
        },
    },
};
</script>
<template>
    <div>
        <!-- Pass state as props and listener as Prop- dynamic state -->
        <ReviewDashboard :like="like" :dislike="dislike" :onLike="onLike" :onDislike="onDislike" />
    </div>
</template>
<style></style>