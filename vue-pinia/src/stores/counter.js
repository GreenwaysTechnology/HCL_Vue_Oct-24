import { defineStore } from "pinia"

const useCounterStore = defineStore('counter', {
    //state declaration
    state: () => {
        //return reactive state
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {
        doubleIt: state => state.count * 2
    }
});


export { useCounterStore }