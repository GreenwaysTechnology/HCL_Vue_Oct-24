<template>
    <div>
        <h1>Login</h1>
        <button @click="login">Login</button>
    </div>
</template>

<script>
import { auth } from '@/composables/auth.js';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const login = () => {
            auth.login();
            router.push({ name: 'Dashboard' }); // redirect after login
        };

        return { login };
    }
};
</script>