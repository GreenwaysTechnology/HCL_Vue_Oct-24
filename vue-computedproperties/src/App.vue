<script setup>
import { reactive, computed } from "vue";

const author = reactive({
    name: "John Doe",
    books: ["Vue 2- Advanced Guide", "Vue 3- Basic Guide"],
});

const publishedMessage = computed(() => {
    return author.books.length > 0 ? "has" : "has not";
});
</script>
<template>
    <p>{{ author.name }} {{ publishedMessage }} published books </p>
</template>