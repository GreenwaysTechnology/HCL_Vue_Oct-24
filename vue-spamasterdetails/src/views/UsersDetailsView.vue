<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
const route = useRoute()
onMounted(() => {
    console.log(route.params)
    //here you can make api call based on parameter
})
</script>
<template>
    <h1>{{$route.params.id }} Users details View</h1>

</template>
