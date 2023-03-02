import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food',
    name: 'food',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodView.vue')
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import( '../views/LearnView.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import( '../views/NoticeView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import( '../views/test.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// export default router 前增加下面代码，添加一个临时路由
  if (!router.hasRoute()) {
  router.addRoute({
      path: window.location.pathname,
      name: 'TempRoute',
      component: () => import('../components/empty/emptyLayout')
  })
}

export default router
