<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter()
const goToReview = () => {
    router.push({ path: 'review' })
}
</script>
<template>
    <h1>Movies Page</h1>
    <ul>
        <li>
            <RouterLink to="/movies/action">
                <span>Action</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/movies/drama">
                <span>Drama</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/movies/horror">
                <span>Horror</span>
            </RouterLink>
        </li>
    </ul>
    <RouterView />
    <button @click="goToReview">GoTo Review</button>
</template>