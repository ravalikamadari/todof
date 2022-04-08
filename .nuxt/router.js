import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bfd64d4 = () => interopDefault(import('..\\pages\\alltodos.vue' /* webpackChunkName: "pages/alltodos" */))
const _86c3b99e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _fc6f4aee = () => interopDefault(import('..\\pages\\mytodos.vue' /* webpackChunkName: "pages/mytodos" */))
const _2eec14d6 = () => interopDefault(import('..\\pages\\tasks.vue' /* webpackChunkName: "pages/tasks" */))
const _1e9bdf96 = () => interopDefault(import('..\\pages\\UserRegister.vue' /* webpackChunkName: "pages/UserRegister" */))
const _1a12ffcc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alltodos",
    component: _3bfd64d4,
    name: "alltodos"
  }, {
    path: "/login",
    component: _86c3b99e,
    name: "login"
  }, {
    path: "/mytodos",
    component: _fc6f4aee,
    name: "mytodos"
  }, {
    path: "/tasks",
    component: _2eec14d6,
    name: "tasks"
  }, {
    path: "/UserRegister",
    component: _1e9bdf96,
    name: "UserRegister"
  }, {
    path: "/",
    component: _1a12ffcc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
