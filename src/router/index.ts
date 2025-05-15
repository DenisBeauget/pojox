import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { scrollToTop: true },
    },
    {
      path: '/convert',
      name: 'Convert',
      component: () => import('@/views/TransformerTool.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: () => import('@/views/PrivacyView.vue'),
    },
    {
      path: '/beautify',
      name: 'Beautify',
      component: () => import('@/views/BeautifyView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/terms',
      name: 'Terms',
      component: () => import('@/views/TermsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Default',
      component: () => import('@/components/NotFound.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router

