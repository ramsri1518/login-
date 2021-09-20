import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import child from '../components/child.vue'
import parent from '../components/parent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component:About
  },
  {
    path: '/child',
    name: 'child',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: child
  },
  {
    path: '/parent',
    name: 'parent',
    component:parent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
