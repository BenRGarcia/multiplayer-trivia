// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Vue
import Vue from 'vue'
import App from './App'
import router from './router'

// Firebase
import VueFire from 'vuefire'
import firebase from 'firebase'

// Bootstrap, CSS
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

// Bootstrap enable tooltips/popovers
$(function () {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
})

// Vue config
Vue.config.productionTip = false

// Initialize VueFire
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*
Sources:
https://firebase.google.com/docs/reference/js/index-all?authuser=0
https://github.com/vuejs/vuefire
https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8
*/