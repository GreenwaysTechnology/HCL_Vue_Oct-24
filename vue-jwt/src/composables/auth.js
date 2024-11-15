// src/auth.js

const API_URL = 'http://localhost:3000';

export const auth = {
    async login(username, password) {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok && data.token) {
            localStorage.setItem('user-token', data.token); // Store the token in localStorage
        } else {
            throw new Error(data.message || 'Login failed');
        }

        return data;
    },

    logout() {
        localStorage.removeItem('user-token');
    },

    getToken() {
        return localStorage.getItem('user-token');
    },

    isAuthenticated() {
        return !!this.getToken();
    },

    async fetchWithAuth(url, options = {}) {
        const token = this.getToken();

        // Add Authorization header if token exists
        const headers = {
            ...options.headers,
            ...(token ? { 'x-access-token': token } : {})
        };

        const response = await fetch(url, {
            ...options,
            headers
        });

        // Handle the response
        if (!response.ok) {
            throw new Error('Unauthorized or failed request');
        }

        return response.json();
    },
    async fetchProtectedData() {
        try {
            const data = await auth.fetchWithAuth('http://localhost:3000/dashboard');
            console.log(data);
        } catch (error) {
            console.error('Error fetching protected data:', error);
        }
    }

};
