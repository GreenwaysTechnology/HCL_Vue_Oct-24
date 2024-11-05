<script>
export default {
    props: ['like', 'dislike', 'onLike', 'onDislike']
};
</script>
<template>
    <div>
        <h1>Review App</h1>
        <h2>Like : {{ like }} Dislike {{ dislike }}</h2>
        <button @click="onLike">Like</button>
        <button @click="onDislike">DisLike</button>
    </div>
</template>
<style></style>