<template>
  <div class="row">
    <div :class="leaderboardClasses">
      <div class="card">
        <div class="card-body p-0">
          <h3 class="mt-1 mb-1">LEADERBOARD</h3>
          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Ranking</th>
                <th scope="col">Name</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>

              <leader 
                v-for="(leader, index) in leaders" 
                :key="index" 
                :ranking="index" 
                :playerName="leader.name" 
                :points="leader.points"
              />

            </tbody>
          </table>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leader from './leader'

export default {
  props: [
    "players"
  ],
  components: {
    leader
  },
  data() {
    return {
      // Bootstrap Grid
      leaderboardClasses: [
        "col-12",                   // xs screens
        "col-sm-10", "offset-sm-1", // sm screens
        "col-md-8", "offset-md-2",  // md screens
        "col-lg-6", "offset-lg-3"   // lg screens
      ]
    }
  },
  computed: {
    leaders() {
      // How many leaders to show on leaderboard
      let leaderboardLimit = 10;
      // Sort players from highest points to lowest points
      let sortedArray = this.players.sort( (a,b) => b.points - a.points );
      // Only return (at most) the top 10 players
      return sortedArray.length > leaderboardLimit 
              ? sortedArray.slice(0, leaderboardLimit)
              : sortedArray;
    }
  }
}
</script>