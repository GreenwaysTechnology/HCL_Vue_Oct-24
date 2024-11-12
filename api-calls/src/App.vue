<script setup>
import { onMounted, reactive } from 'vue';
const state = reactive({
  data: null,
  error: null
})
async function fetchAlbums() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/albums'
    const response = await fetch(url)
    const albums = await response.json()
    console.log(albums)
    state.data = albums
  }
  catch (err) {
    console.log(err)
    state.error = err
  }
}

onMounted(() => {
  //you have to write api call 
  fetchAlbums()
})
</script>
<template>
  <div>
    <div v-if="state.error">
      <h1>Opps! {{ state.error.message }}</h1>
    </div>
    <div v-else-if="state.data">
      <!-- show the data -->
      <div v-for="album of state.data" :key="album.id">
        <h3>{{ album.title }}</h3>
      </div>
    </div>
    <div v-else>
      <!-- Show progress bar -->
      <h1>Loading...</h1>
    </div>
  </div>
</template>
<style scoped></style>