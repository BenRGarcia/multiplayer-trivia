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
              <leader v-for="(leader, index) in leaders" :key="index" :ranking="index" :playerName="leader.name" :points="leader.points"/>
            </tbody>
          </table>  
        </div>
      </div>
    </div>
    <button @click="topPlayers">2) topPlayers()</button>
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
      leaders: [],
      leaderboardClasses: [
        "col-12",                   // xs screens
        "col-sm-10", "offset-sm-1", // sm screens
        "col-md-8", "offset-md-2",  // md screens
        "col-lg-6", "offset-lg-3"   // xl screens
      ]
    }
  },
  methods: {
    // return Top 10 players according to points to this.leaders
    topPlayers() {
      let newArray = []

      for (let player of this.players) {

        let leader = {};
        leader.name = player.name;
        leader.points = player.points;

        newArray.push(leader);
      }

      let sortedArray = newArray.sort( (a, b) => b.points - a.points);
      this.leaders = sortedArray;

      if (sortedArray.length > 10) {
        this.leaders = sortedArray.splice(11);
      } else {
        this.leaders = sortedArray;
      }
    }
  }
}
</script>

<style scoped>

</style>