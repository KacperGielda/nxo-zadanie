import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UsersTable from '../views/UsersTable.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'users-table',
    component: UsersTable
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
