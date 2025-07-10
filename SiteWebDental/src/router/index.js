import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import Equipe from '@/views/Equipe.vue'
import Contact from '@/views/Contact.vue'
import Rdv from '@/views/Rdv.vue'
import Service from '@/views/Service.vue'

const routes = [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
    },

    {
      path: '/equipe',
      name: 'Equipe',
      component: Equipe,
    },
    {
      path: '/rdv',
      name: 'Rendez-vous',
      component: Rdv,
      meta: { requiresAuth: true }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/services',
      name: 'Service',
      component: Service,
    },

  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
