<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">Username</label>
            <input v-model="form.username" id="username" name="username" @input="validateUsername" />
            <span v-if="errors.username">{{ errors.username }}</span>
        </div>

        <div>
            <label for="email">Email</label>
            <input v-model="form.email" id="email" name="email" type="email" @input="validateEmail" />
            <span v-if="errors.email">{{ errors.email }}</span>
        </div>

        <button type="submit" :disabled="!isValid">Submit</button>
    </form>
</template>

<script setup>
import { reactive, computed } from 'vue';

// Reactive state for form fields
const form = reactive({
    username: '',
    email: '',
});

// Reactive state for errors
const errors = reactive({
    username: '',
    email: '',
});

// Validation functions
const validateUsername = () => {
    errors.username = form.username.length < 3 ? 'Username must be at least 3 characters long' : '';
};

const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errors.email = !emailPattern.test(form.email) ? 'Invalid email address' : '';
};

// Computed property to check if the form is valid
const isValid = computed(() => !errors.username && !errors.email);

// Form submit handler
const submitForm = () => {
    validateUsername();
    validateEmail();
    if (isValid.value) {
        alert(`Form Submitted: ${JSON.stringify(form)}`);
    }
};
</script>

<style scoped>
form div {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    display: block;
    padding: 8px;
    width: 100%;
    margin-bottom: 5px;
}

span {
    color: red;
}

button {
    padding: 10px 15px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:disabled {
    background-color: gray;
    cursor: not-allowed;
}
</style>
