import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenreView from '../views/GenreView.vue'
import SearchView from '../views/SearchView.vue'
import FilmView from '../views/FilmView.vue'
import ProfileView from "../views/ProfileView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/genre/:id',
      name: 'genre',
      component: GenreView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/film/:id',
      name: 'film',
      component: FilmView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
