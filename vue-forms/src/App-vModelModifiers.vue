<script setup>
import { ref } from 'vue';
const name = ref('')
const price = ref("10")
const mailid =ref('admin@foo.com')

</script>
<template>
    <div>
        <!-- <input v-model="name" />  -->
        
        <!-- Fire Change Event : once if the textbox looses its focus -->
        <label for="Name">Name</label>
        <input id="Name" v-model.lazy="name" /> 

    </div>
        <div>
        
        <label for="Price">Price</label>
        <input id="Price" v-model.number="price" /> 

    </div>
      <div>
        
        <label for="mailId">mailId</label>
        <input id="mailId" v-model.trim="mailid" /> 

    </div>
    <div>
        <h1>{{ name }}</h1>
        <h1>Price {{price}} Total Price {{price * 2}}</h1>
        <h1>{{mailid}}</h1>
    </div>
</template>