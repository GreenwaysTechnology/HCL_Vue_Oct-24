<script setup>
import {ref} from 'vue'

const start = ref(1)

</script>
<template>
    <div>
        <ul>
            <li v-for="start in 10">
                  {{start}}
            </li>
        </ul>

    </div>
</template>