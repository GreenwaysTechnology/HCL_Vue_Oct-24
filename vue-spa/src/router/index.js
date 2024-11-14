import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";
import ReviewView from "@/views/ReviewView.vue";
import Login from "@/components/Login.vue";
import Dashboard from "@/components/Dashboard.vue";
import { auth } from '@/composables/auth.js';


import { createRouter, createWebHistory } from "vue-router";

//it defines the menu (url) configuration against "View-page"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostView
  },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // only allow authenticated users
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
// Navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.checkAuth()) {
    next({ name: 'Login' }); // redirect to login if not authenticated
  } else {
    next(); // allow navigation
  }
});

export default router;