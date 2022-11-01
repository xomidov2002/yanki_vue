import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'main' }
  },
  {
    path: '/home',
    name: 'main',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
