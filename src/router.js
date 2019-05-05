import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Register from './views/Signup.vue'
import Statisticday from './views/Statisticday.vue'
import Statisticmonth from './views/Statisticmonth.vue'
import test from './views/test.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/statistic/day',
      name: 'statisticday',
      component: Statisticday
    },
    {
      path: '/statistic/month',
      name: 'statisticmonth',
      component: Statisticmonth
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
