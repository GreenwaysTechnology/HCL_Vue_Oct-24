<script setup>
import { ref } from 'vue';
const values = ref([])
</script>
<template>
    <div>
        <h1>Course Information</h1>
        <input type="checkbox" id="frontend" value="frontEnd" v-model="values" />
        <label for="frontend">Front End</label>
        <input type="checkbox" id="backend" value="BackEnd" v-model="values" />
        <label for="backend">Back End</label>
        <input type="checkbox" id="devops" value="Dev Ops" v-model="values" />
        <label for="devoops">Dev Ops</label>
    </div>
    <div>
        <ul>
            <li v-for="item of values">
                {{ item }}
            </li>
        </ul>
    </div>
</template>