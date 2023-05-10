import { createRouter as _createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/List.vue'
import * as alias from './alias'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: {
      name: alias.Home.name
    },
    children: [
      {
        ...alias.Home,
        component: HomeView,
        children: [
          {
            ...alias.List,
            component: ListView
          }
        ]
      }
    ]
  }
]

export const router = _createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default (app) => app.use(router)
