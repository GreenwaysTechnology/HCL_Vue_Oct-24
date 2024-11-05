<script>
export default {
  components: {},
  data() {
    return {
      name: 'Subramanian'
    }
  },
  //methods
  methods: {
    //listeners
    sayHello(evt) {
      console.log('hello')
    },
    sayHai(evt){
      console.log('Hai')
    }
  },
}
</script>
<template>
  <div>
    <button v-on:click="sayHello">Hello</button>
    <button @click="sayHai">Hai</button>

  </div>
</template>