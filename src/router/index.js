import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DirectorioView from '@/views/DirectorioView.vue'
import EducacionSuperior from '@/views/EducacionSuperior.vue'
import Horario from '@/views/Horario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/educacion/superior',
    name: 'educacionSuperior',
    component: EducacionSuperior
  },
  {
    path: '/directorio',
    name: 'directorio',
    component: DirectorioView
  },
  {
    path: '/horarios',
    name: 'horarios',
    component: Horario
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
