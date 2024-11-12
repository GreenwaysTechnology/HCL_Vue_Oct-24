<script setup>
import { useMouse } from './composables/useMouse';
const { x, y } = useMouse()
</script>
<template>
    <div>
        <h1>X:{{ x }} Y: {{ y }}</h1>
    </div>
</template>