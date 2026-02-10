import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import LookBook from '../components/LookBook.vue'
import CustomizationPage from '../components/CustomizationPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: LookBook
  },
  {
    path: '/checkout/:productId',
    name: 'Checkout',
    component: CustomizationPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

export default router