import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RepairPage from '../views/RepairPage.vue'
import StoragePage from '../views/StoragePage.vue'
import AuthPage from '../views/AuthPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/repair',
    name: 'repair',
    component: RepairPage
  },
  {
    path: '/storage',
    name: 'storage',
    component: StoragePage
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
