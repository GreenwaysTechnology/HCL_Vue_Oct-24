import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import UsersView from '@/views/UsersView.vue'
import UsersDetailsView from '@/views/UsersDetailsView.vue'
import MoviesView from '@/views/MoviesView.vue'
import ActionView from '@/views/ActionView.vue'
import DramaView from '@/views/DramaView.vue'
import HorrorView from '@/views/HorrorView.vue'
import ReviewView from '@/views/ReviewView.vue'

const routes = [

  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/users',
    name: 'users',
    component: import('../views/UsersView.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component: UsersDetailsView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView,
    children: [
      {
        path: 'action',
        component: ActionView
      },
      {
        path: 'drama',
        component: DramaView,
      },
      {
        path: 'horror',
        component: HorrorView
      }
    ]
  }
  , {
    path: '/review',
    name: 'review',
    component: ReviewView
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
