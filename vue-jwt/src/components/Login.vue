<template>
    <div>
        <h1>Login</h1>
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="login">Login</button>
    </div>
</template>

<script>
import { auth } from '@/composables/auth.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        const router = useRouter();
        const username = ref('');
        const password = ref('');

        const login = async () => {
            try {
                await auth.login(username.value, password.value);
                router.push({ name: 'Dashboard' }); // Redirect after login
            } catch (error) {
                alert(error.message || 'Invalid credentials');
            }
        };

        return { username, password, login };
    }
};
</script>