import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/index.vue'

export const constantRoutes = [
  {
    path: 'login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: '',
    chirdren: [
      {
        path: '',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

export default router
