// auth.js
export const auth = {
    isAuthenticated: false,

    login() {
        this.isAuthenticated = true;
    },

    logout() {
        this.isAuthenticated = false;
    },

    checkAuth() {
        return this.isAuthenticated;
    }
};
