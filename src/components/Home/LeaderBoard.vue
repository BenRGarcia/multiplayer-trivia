<template>
  <div class="row">
    <div :class="leaderboardClasses">

      <h3>LEADERBOARD</h3>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Place</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          <!-- <leader v-for="(leader, index) in leaderboard" :key="index" :place="leader.place", :playerName="leader.name", :points="leader.points"/> -->
          <leader/>
        </tbody>
      </table>
      
    </div>
  </div>
</template>

<script>
import leader from './leader'

export default {
  props: [
    // leaderboard
  ],
  components: {
    leader
  },
  data() {
    return {
      leaderboardClasses: [
        "col-12",                   // xs screens
        "col-sm-10", "offset-sm-1", // sm screens
        "col-md-8", "offset-md-2",  // md screens
        "col-lg-6", "offset-lg-3"   // xl screens
      ]
    }
  }
}
</script>

<style scoped>

</style>