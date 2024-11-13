import { defineStore } from "pinia";

export const useTodosStore = defineStore('todos', {
    state: () => {
        return {
            todos: [],
            error: null
        }
    },
    actions: {
        //async 
        async fetchTodos() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const todos = await response.json()
                this.todos = todos
            }
            catch (err) {
                this.error = err
                console.log(err)
            }
        }
    },
    getters: {
        todosList: state => state.todos
    }

})