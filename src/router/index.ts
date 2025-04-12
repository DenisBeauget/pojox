import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeroView from '@/views/HeroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        scrollToTop: true,
      },
    },
    {
      path: '/:hero',
      name: 'hero',
      component: HeroView,
    },
  ],
})

export default router
