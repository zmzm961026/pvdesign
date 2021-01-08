import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: Login,
    component:  () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue'),
    // meta: {
    //   title:'',
    // },
  },
  {
    path: '/studentsEnd',
    name: 'StudentsEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentsEnd/StudentsEnd.vue')
  },
  {
    path: '/teacherEnd',
    name: 'TeacherEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeacherEnd/TeacherEnd.vue')
  },
  {
    path: '/listIndex',
    name: 'ListIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListIndex/ListIndex.vue')
  },
  // 并网路由
  {
    path: '/project',
    name: 'Project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GridPV/Project.vue')
  },{
    path: '/projectInformation',
    name: 'ProjectInformation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GridPV/ProjectInformation.vue')
  },
  {
    path: '/',
    redirect:'/login',
    component: import(/* webpackChunkName: "about" */ '../views/Login/Login.vue'),
    // meta: {
    //   title:'',
    // },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
