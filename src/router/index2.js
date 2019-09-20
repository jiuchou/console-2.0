
  {
    path: '/coverity-tool',
    component: Layout,
    redirect: '/coverity-tool',
    meta: {
      roles: ['admin', 'devops'],
      title: '扫描工具',
      icon: ''
    },
    children: [
      {
        path: '',
        component: () => import('@/views/coverity-tool/index.vue'),
        meta: {
          roles: ['admin'],
          title: '扫描工具',
          icon: ''
        }
      },
      {
        path: 'topbar1',
        component: () => import('@/views/coverity-tool/index.vue'),
        meta: {
          roles: ['admin'],
          title: '扫描工具1',
          icon: ''
        }
      },
      {
        path: 'topbar2',
        component: () => import('@/views/coverity-tool/index.vue'),
        meta: {
          roles: ['admin', 'devops'],
          title: '扫描工具2',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/user-info',
    component: Layout,
    redirect: '/user-info',
    hidden: true,
    children: [
      {
        path: '',
        component: () => import('@/views/user-info/index.vue'),
        hidden: true,
        meta: { title: '用户信息', icon: 'user' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

export default router
