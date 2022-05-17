import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import User from '../views/User/index.vue'
import Find from '../views/Find/index.vue'
import Play from '../views/Play/index.vue'
import SearchPage from '../views/SearchPage/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/user',
    component:User
  },
  {
    path:'/find',
    component:Find
  },
  {
    path:'/play',
    component:Play
  },
  {
    path:'/search',
    component:SearchPage
  }
]

const router = new VueRouter({
  routes
})

export default router
