import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import Equipe from '@/views/Equipe.vue'
import Contact from '@/views/Contact.vue'
import CarrieView from '@/views/services/CarrieView.vue'
import BlanchimentView from '@/views/services/BlanchimentView.vue'
import AligneurView from '@/views/services/AligneurView.vue'
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

    {
      path: '/carie',
      name: 'Carie',
      component: CarrieView,
    },

    {
      path: '/aligneur',
      name: 'Aligneur',
      component: AligneurView,
    },

    {
      path: '/blanchiment',
      name: 'Blanchiment',
      component: BlanchimentView,
    },
  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
