import { defineStore } from "pinia";
import { ref } from 'vue'
//composition api
export const useCounterStore = defineStore('counter', () => {
    //state declaration
    const count = ref(0)
    //biz logic 
    function increment() {
        count.value++
    }
    function decrement() {
        count.value--
    }
    //computed properties
    const doubleIt = computed(() => count.value * 2)

    //return all 
    return {
        count, doubleIt, increment, decrement
    }


})