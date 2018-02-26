<template>
  <div id="app" class="container">

    <!-- Page Title -->
    <div class="row">
      <div class="col">
        <PageTitle/>
      </div>
    </div>

    <!-- Page Contents -->
    <div class="row">
      <div class="col">
        <router-view/>
      </div>
    </div>

    <!-- Dummy footer for navigation's sake -->
    <footer class="fixed-bottom" style="border: 2px solid red;">
      <router-link to="/home">HOME </router-link>
      |
      <router-link to="/play"> PLAY</router-link>
    </footer>

  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import trivia from './assets/javascript/trivia.js'

export default {
  name: 'App',
  components: {
    PageTitle
  }
}
</script>

<style>

</style>
