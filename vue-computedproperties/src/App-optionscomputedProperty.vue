<script>
export default {
    data() {
        return {
            author: {
                name: "John Doe",
                books: ["Vue 2- Advanced Guide", "Vue 3- Basic Guide"],
            }
        }
    },
    computed: {
        publishedBooksMessage() {
            console.log("called");
            // return this.author.books.length > 0 ? "Yes" : "No";
            return this.author.books.length > 0 ? 'has' : 'has not'
        },
    },
}
</script>
<template>
    <p>{{ author.name }} {{ publishedBooksMessage }} published books </p>
    <p>{{ author.name }} {{ publishedBooksMessage }} published books </p>

</template>