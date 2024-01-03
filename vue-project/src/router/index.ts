import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import ExperienceShow from '../views/ExperienceShow.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination/:id/:slug',
    name: 'destinationShow',
    component: DestinationView,
    props: route=> ({id: parseInt(route.params.id)}),
    children:[
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: ExperienceShow,
        props: route=> ({...route.params, id: parseInt(route.params.id)})
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
})

export default router
