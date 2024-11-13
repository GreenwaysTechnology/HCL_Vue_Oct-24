<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">Username</label>
            <input v-model="username" id="username" name="username" @blur="validateUsername" />
            <span>{{ errors.username }}</span>
        </div>

        <div>
            <label for="email">Email</label>
            <input v-model="email" id="email" name="email" type="email" @blur="validateEmail" />
            <span>{{ errors.email }}</span>
        </div>

        <button type="submit" :disabled="!isValid">Submit</button>
    </form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

// Define the validation schema
const schema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Email must be valid').required('Email is required'),
});

// Form state and validation
const { handleSubmit, errors } = useForm({
    validationSchema: schema,
});

//TextBox
const { value: username, errorMessage: usernameError, validate: validateUsername } = useField('username');
//Email 
const { value: email, errorMessage: emailError, validate: validateEmail } = useField('email');

const isValid = computed(() => !usernameError.value && !emailError.value);

// Form submit handler
const submitForm = handleSubmit(values => {
    alert(`Form Submitted: ${JSON.stringify(values)}`);
});
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

