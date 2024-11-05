<script>
export default {
    components: {},
    setup() {
        let name = 'Subramanian'
        //listener
        //es 5 syntax
        const hello = function (evt) {
            console.log('hello')
        }
        //es 6 arrow function
        const hai = () => {
            console.log('hai')
        }
        //return 
        return {
            name,
            hello,
            hai
        }
    }
}
</script>
<template>
    <div>
        <button v-on:click="hello">Hello</button>
        <button @click="hai">Hai</button>

    </div>
</template>