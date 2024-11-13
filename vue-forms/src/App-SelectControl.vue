<script setup>
import { ref } from 'vue';
const selected = ref('')
const courses = ref(["Vue", "React", "Angular", "MicroServices"])
const selectedCourse = ref('')
</script>
<template>
    <div>
        <select v-model="selected">
            <option disabled value>Select Your choice</option>
            <option>Vue</option>
            <option>React</option>
            <option>Angular</option>
            <option>MicroServices</option>
        </select>
    </div>
    <div>
        {{ selected }}
    </div>
    <hr />
    <div>
        <select v-model="selectedCourse">
            <option disabled value>Select Your choice</option>
            <option v-for="course of courses">{{ course }}</option>
        </select>
    </div>
    <div>
        {{ selectedCourse }}
    </div>
</template>

