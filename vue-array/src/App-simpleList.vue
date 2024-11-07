<script setup>
import { reactive } from 'vue';
const list = reactive(['Subramanian', 'Murugan', 'Karthik'])

</script>
<template>
 <div>
  <h1>List rendering</h1>
  <ul>
    <li v-for="name in list">
      {{ name }}
    </li>
  </ul>
 </div>
</template>