import Vue from 'vue'
import VueRouter from 'vue-router'
import MyCourse from '../views/MyCourse.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'Course',
    component: MyCourse
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeResolve((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.length) next({ name: 'Login' })
  // if the user is not authenticated, `next` is called twice
  else next()
  })
export default router
