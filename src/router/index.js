import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Characters from "../views/BrowseChars";
import Episodes from "../views/BrowseEpisodes";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters/:id',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
