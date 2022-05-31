import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import User from '../views/User/index.vue'
import Find from '../views/Find/index.vue'
import Search from '../views/Search/index.vue'
import MusicList from '../views/MusicItemList/index.vue'
import Singer from '../views/Singer/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/MusicList',
    component: MusicList
  },
  {
    path: '/singer',
    component: Singer
  }
]

const router = new VueRouter({
  routes
})

export default router
