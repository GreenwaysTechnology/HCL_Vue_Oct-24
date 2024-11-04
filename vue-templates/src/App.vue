<script setup>
const imgUrl = "src/assets/logo.svg"
const isHidden = false
const isEnabled = true
</script>
<template>
    <div>
        <h1>Static Binding</h1>
        <img src="./assets/logo.svg" height="100" width="100" alt="logo" />
    </div>
    <div>
        <h1>Dynamic binding</h1>
        <img :src="imgUrl" alt="" height="100" width="100" />
    </div>
    <div>
        <h1>Dynamic binding with show and hide</h1>
        <div :hidden="isHidden">
            <h1>Hello</h1>
        </div>
    </div>
    <div>
        <h1>Dynamic binding with Enable and disable</h1>
        <button :disabled="isEnabled">Click</button>
    </div>
</template>
