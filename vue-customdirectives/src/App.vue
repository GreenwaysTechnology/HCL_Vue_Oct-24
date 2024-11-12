<script setup>
const VHighlight = {
    mounted: (element) => {
        //add event listener
        element.addEventListener('mousemove', (evt) => {
            //  element.style.backgroundColor = 'yellow'
            highLight('yellow')
        })
        element.addEventListener('mouseleave', (evt) => {
            //element.style.backgroundColor = null
            highLight(null)
        })
        const highLight = (color) => {
            element.style.backgroundColor = color
        }
    }
}
</script>
<template>
    <h1 v-highlight>Touch Me</h1>
</template>