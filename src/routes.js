// routes.js
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

export const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]


