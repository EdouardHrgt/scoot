import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import CareersView from './views/CareersView.vue'
import LocationsView from './views/LocationsView.vue'

export const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/careers', component: CareersView },
  { path: '/locations', component: LocationsView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]
