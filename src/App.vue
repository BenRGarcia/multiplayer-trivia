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

  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import trivia from './assets/javascript/trivia.js'

export default {
  props: [
    // from firebase
    /* 
    "leaders", "trivia", "playerStats", "timer"
    */
  ],
  name: 'App',
  data() {
    return {
      // Simulated props from firebase:
      leaders: [
        {rank: 1,  name: "QuizzlyBear88",    points: 38},
        {rank: 2,  name: "JawhnyBoi66",      points: 37},
        {rank: 3,  name: "OwlyMcOwlerson",   points: 35},
        {rank: 4,  name: "OllieOxenfree",    points: 34},
        {rank: 5,  name: "TerribleTerry",    points: 31},
        {rank: 6,  name: "LadyHaha72",       points: 28},
        {rank: 7,  name: "TriviaAddict22",   points: 22},
        {rank: 8,  name: "IssYaBoi55",       points: 20},
        {rank: 9,  name: "CaseOfTheMundees", points: 18},
        {rank: 10, name: "BillyTheKidGoat",  points: 16}
      ]
    }
  },
  components: {
    PageTitle
  }
}
</script>

<style>

</style>
