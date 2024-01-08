
import { createRouter, createWebHistory } from 'vue-router'
import HomeAnimeListView from '../views/HomeAnimeListView.vue'
import AnimeView from '../views/AnimeView.vue'
import CharacterShow from '../views/CharacterShow.vue'
import HelpView from '../views/HelpView.vue'
import MyAnimeListView from "../views/MyAnimeListView.vue";

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
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/myAnimeList',
    name: 'myAnimeList',
    component: MyAnimeListView
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
})

export default router
