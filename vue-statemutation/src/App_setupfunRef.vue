<script>
import { ref } from 'vue';
export default {
  setup() {
    //reactive state
    let counter = ref(0);
    console.log(counter.value)
    //listener
    const onIncrement = (evt) => {
      //mutate state
      counter.value++
    }
    return {
      counter,
      onIncrement
    }
  }
}
</script>
<template>
  <div>
    <!-- Inside template ref's value property is implicit -->
    <h1>Counter : {{counter}}</h1>
    <button @click="onIncrement">+</button>
  </div>
</template>