<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts.js'

const postsStore = usePostsStore()
onMounted(() => {
    postsStore.fetchPosts()
})
</script>
<template>
    <h1>Post App with Pinia-Router</h1>
    <div v-for="post in postsStore.postList">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>