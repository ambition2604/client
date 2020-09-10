import Vue from 'vue'
import VueRouter from 'vue-router'
import MyCourse from '../views/MyCourse.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'



Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'Course',
    component: MyCourse
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && localStorage.getItem('token')=='None') next({ name: 'Login' })
  // if the user is not authenticated, `next` is called twice
  else next()
  })
export default router
