import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UsersTable from '../views/UsersTable.vue'
import UserInfo from '../views/UserInfo.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/users',
    name: 'users-table',
    component: UsersTable
  },
  {
    path:'/user/:id',
    props: true,
    name: 'user-info',
    component: UserInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
