import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/index.vue'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/error-page/404.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: '' }
      }
    ]
  },
  {
    path: '/system-info',
    component: Layout,
    redirect: '/system-info',
    meta: { title: '系统说明', icon: '' },
    children: [
      {
        path: '',
        component: () => import('@/views/system-info/index.vue'),
        meta: { title: '系统说明', icon: '' }
      },
      {
        path: 'topbar1',
        component: () => import('@/views/system-info/index.vue'),
        meta: { title: 'topbar1', icon: '' }
      },
      {
        path: 'topbar2',
        component: () => import('@/views/system-info/index.vue'),
        meta: { title: 'topbar2', icon: '' }
      }
    ]
  },
  {
    path: '/jenkins-tool',
    component: Layout,
    redirect: '/jenkins-tool',
    meta: { title: '自动化工具', icon: '' },
    children: [
      {
        path: '',
        component: () => import('@/views/jenkins-tool/index.vue'),
        meta: { title: '自动化工具', icon: '' }
      },
      {
        path: 'topbar1',
        component: () => import('@/views/jenkins-tool/index.vue'),
        meta: {
          roles: ['admin'],
          title: 'topbar1',
          icon: ''
        }
      },
      {
        path: 'topbar2',
        component: () => import('@/views/jenkins-tool/index.vue'),
        meta: {
          roles: ['admin', 'devops'],
          title: 'topbar2',
          icon: ''
        }
      }
    ]
  },
