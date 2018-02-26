import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home'
import Play from '@/components/Play/Play'

Vue.use(Router)

export default new Router({
  routes: [
    { // Redirect unknown paths to home
      path: '*',
      redirect: '/home'
    },
    { // Home page
      path: '/home',
      name: 'Home',
      component: Home,
      props: true
    },
    { // Game page
      path: '/play',
      name: 'Play',
      components: Play,
      props: true
    }
  ]
})

// https://medium.com/codingthesmartway-com-blog/vue-js-routing-with-vue-router-4c428fabb078
// https://router.vuejs.org/en/

/*
 * Passing Props to route components
 * https://router.vuejs.org/en/essentials/passing-props.html
 * https://router.vuejs.org/en/advanced/data-fetching.html
 */