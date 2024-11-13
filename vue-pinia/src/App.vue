<script setup>
import { onMounted } from 'vue'
import { useTodosStore } from './stores/todos.js'

const todosStore = useTodosStore()
onMounted(() => {
    todosStore.fetchTodos()
})
</script>
<template>
    <h1>Todo App with Pinia</h1>
    <div v-for="todo in todosStore.todosList">
        <h2>{{ todo.title }}</h2>
    </div>
</template>