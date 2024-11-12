<script setup>
import { useFetch } from "./composables/useFetch";
const url = "https://jsonplaceholder.typicode.com/albums";
const { data, error } = useFetch(url);

</script>
<template>
    <div>
        <h1>Albums</h1>
        <div v-if="error">
            <h1>Oops! {{ error.message }}</h1>
        </div>
        <div v-else-if="data">
            <div v-for="album of data">
                <h3>{{ album.title }}</h3>
            </div>
        </div>
        <div v-else>
            <h1>Loading....</h1>
        </div>
    </div>
</template>

<style scoped></style>