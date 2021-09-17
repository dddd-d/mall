import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/sort',
    meta: {
      title: '分类'
    },
    component: () => import('../views/sort/Sort.vue')
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/profile',
    meta: {
      title: '我的'
    },
    component: () => import('../views/profile/Profile.vue')
  }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title
//   next(); 
// })
export default router