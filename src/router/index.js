import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home'
import Play from '@/components/Play/Play'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { // Redirect unknown paths to home
      path: '*',
      redirect: '/home'
    },
    { // Home page
      path: '/home',
      name: 'Home',
      component: Home
    },
    { // Game page
      path: '/play',
      name: 'Play',
      component: Play
    }
  ]
})

// https://medium.com/codingthesmartway-com-blog/vue-js-routing-with-vue-router-4c428fabb078
// https://router.vuejs.org/en/

/*
Views list:
1) Home   - https://benrgarcia.github.io/multiplayer-trivia/home
2) Play   - https://benrgarcia.github.io/multiplayer-trivia/play
*/