<template>
    <div>
        <h1>Dashboard</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { auth } from '@/composables/auth.js';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const logout = () => {
            auth.logout();
            router.push({ name: 'Home' }); // redirect after logout
        };

        return { logout };
    }
};
</script>