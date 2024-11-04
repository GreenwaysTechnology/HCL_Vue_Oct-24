<script>
export default {
    props: ['title', 'firstName', 'lastName', 'status'],
    setup(){

    }
}
</script>
<template>
    <div>
        <h1>Profile Info </h1>
        <h2>{{ firstName }} {{ lastName }}</h2>
        <h2>{{ status ? "Available" : "Not Available" }}</h2>
    </div>
</template>