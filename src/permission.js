import NProgress from 'nprogress'
// progress bar style
import 'nprogress/nprogress.css'

import router from './router'
import store from './store'
// get token from cookie

// NProgress Configuration
NProgress.configure({ showSpinner: false })

// no redirect whitelist
const whiteList = [
  '/login',
  '/auth-redirect',
  '/',
  '/dashboard',
  '/system-info',
  '/system-info/topbar1',
  '/system-info/topbar2',
  '/solution/case-view',
  '/user-info'
]

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = to.meta.title + " - DevOpsClub"

  if (store.getters.token) {
    // if roles hava permission, to next()
    if (hasPermission(store.getters.roles, to)) {
      next()
    } else {
      next('/401')
    }
  } else {
    if (whiteList.indexOf(to.path) != -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
