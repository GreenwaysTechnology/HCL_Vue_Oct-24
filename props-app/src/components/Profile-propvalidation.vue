<script setup>
const props = defineProps({
    id: [Number, String],
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: 'admin@something.com'
    },
    status: {
        validator(value) {
            return ["Available", "NotAvailable"].includes(value);
        },
    },
})
</script>
<template>
    <div>
        <h1>User information</h1>
        <h2>Id {{ props.id }}</h2>
        <h2>Name {{ props.name }}</h2>
        <h2>Email {{ props.email }}</h2>
        <h2>Status {{ props.status }}</h2>
    </div>
</template>