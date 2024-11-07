<script setup>
import { reactive } from 'vue';
import { POSTS } from './mock-data/post';

const posts = reactive(POSTS)

</script>
<template>
    <div>
        <h1>List rendering</h1>
        <div>
            <section v-for="(post,index) in posts">
                <h2>{{index}} {{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </section>
        </div>
    </div>
</template>