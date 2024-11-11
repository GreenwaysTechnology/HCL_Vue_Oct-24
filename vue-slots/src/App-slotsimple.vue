<script setup>
import Child from './components/Child.vue'
import Greeter from './components/Greeter.vue'
</script>
<template>
  <!-- Without passing any child -->
  <!-- <Child /> -->
  <Child>
    <!-- component as prop or any dom element as prop -->
    <h1>Hello</h1>
    <p>this is slot</p>
  </Child>

  <Child>
    <Greeter/>
  </Child>

  <!-- No child is passed -->
   <Child>
      
   </Child>
</template>
<style scoped></style>
