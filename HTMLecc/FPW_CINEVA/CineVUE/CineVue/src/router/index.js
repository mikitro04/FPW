import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'
import NewsViews from '@/views/NewsViews.vue'
import WhoViews from '@/views/WhoViews.vue'
import LoginView from '@/views/LoginView.vue'
import NewReview from '@/views/NewReview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),      //import del componente tramite arrow function
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactsView,        //import del componente tramite import
    },
    {
      path: '/news',
      name: 'news',
      component: NewsViews,
    },
    {
      path: '/who',
      name: 'who',
      component: WhoViews,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/newReview',
      name: 'newReview',
      component: NewReview,
    },
  ],
})

export default router
