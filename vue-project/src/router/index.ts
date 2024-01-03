
import { createRouter, createWebHistory } from 'vue-router'
import HomeAnimeListView from '../views/HomeAnimeListView.vue'
import AnimeView from '../views/AnimeView.vue'
import CharacterShow from '../views/CharacterShow.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeAnimeListView
  },
  {
    path: '/anime/:id/:slug',
    name: 'animeShow',
    component: AnimeView,
    props: route=> ({id: parseInt(route.params.id)}),
    children:[
      {
        path: ':characterSlug',
        name: 'character.show',
        component: CharacterShow,
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
