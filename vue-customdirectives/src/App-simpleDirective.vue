<script setup>
//first directive
const vFocus = {
  //define life cycle method
  mounted: (element) => {
    console.log('vFocus directive')
    console.log(element)
    element.focus()
  },
}
</script>
<template>
  <input v-focus />
</template>