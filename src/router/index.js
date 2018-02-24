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
    { // Home page, contains sign-in/sign-up, leaderboard
      path: '/home',
      name: 'Home',
      component: Home
    },
    { // Game page, for authenticated users
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

3) Game   - https://benrgarcia.github.io/multiplayer-trivia/play
*/