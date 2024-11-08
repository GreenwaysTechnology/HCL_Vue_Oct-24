<script>
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: ["Vue 2- Advanced Guide", "Vue 3- Basic Guide"],
      }
    };
  },
}
</script>
<template>
  <p>{{ author.name }} {{ author.books.length > 0 ? 'has' : 'has not' }} published books </p>
</template>