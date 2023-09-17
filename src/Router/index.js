import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Favorite from '../views/Favorite.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/pages/:id',
      name: 'PhotoPage',
      component: () => import('../views/PhotoPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router