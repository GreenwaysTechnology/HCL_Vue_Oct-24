<script setup>
import { ref } from "vue";
import {TODOS} from './mock-data/todos'
const todos = ref(TODOS);
const displayCompleted = () => {
  return todos.value= todos.value.filter((todo) => todo.completed);
};
const displayUnCompleted = () => {
  return todos.value= todos.value.filter((todo) => !todo.completed);
};

</script>
<template>
    <div>
        <button @click="displayCompleted">Show Completed todos</button>
        <button @click="displayUnCompleted">Show UnCompleted todos</button>

        <h1>Total Todos : {{todos.length}}</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <span>{{ todo.title }}</span>
            </li>
        </ul>
    </div>
</template>