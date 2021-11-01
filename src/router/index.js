import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Characters from "../views/BrowseChars.vue";
import Character from "../views/CharacterInfos.vue";
import Episodes from "../views/BrowseEpisodes.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters/page/:id',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    window.scrollTo(0,0);
  }
})

export default router
