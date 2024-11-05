<script setup>
import Profile from './components/Profile.vue';
let id =1;
let name="karthik"
let email="karthik@gmail.com"
let status ="Available"
</script>
<template>
  <Profile :id="id" :name="name" :email="email" :status="status" ></Profile>
  <Profile :id="id"  :email="email" :status="status" ></Profile>
  <Profile :id="id" :name="name" :status="status" ></Profile>

</template>