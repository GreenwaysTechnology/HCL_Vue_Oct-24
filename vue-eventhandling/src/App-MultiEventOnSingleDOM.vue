<script setup>
const onMouseEnter = (evt) => {
    console.log("enter");
};
const onMouseLeave = (evt) => {
    console.log("leave");
};
</script>
<template>
    <div v-on="{ mouseenter: onMouseEnter, mouseleave: onMouseLeave }">
        Touch Me
    </div>
</template>