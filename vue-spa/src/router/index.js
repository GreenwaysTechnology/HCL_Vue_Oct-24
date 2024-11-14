import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";
import ReviewView from "@/views/ReviewView.vue";

import { createRouter, createWebHistory } from "vue-router";

//it defines the menu (url) configuration against "View-page"
const routes = [
  {
    path: '/',
    name: 'home',
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router;