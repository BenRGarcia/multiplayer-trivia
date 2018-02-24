<template>
  <div id="app" class="container-fluid">

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
