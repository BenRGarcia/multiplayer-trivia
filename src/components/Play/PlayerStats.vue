<template>
  <div class="card">
    <div class="card-body">
      <table class="table table-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col">{{ playerName }}</th>
            <th scope="col">Stats</th>
          </tr>
        </thead>
        <tbody>
          <!-- <leader v-for="(leader, index) in leaderboard" :key="index" :place="leader.place", :playerName="leader.name", :points="leader.points"/> -->
          <!-- <leader/> -->
          <tr>
            <th scope="row">Ranking</th>
            <td>1</td>
          </tr>
          <tr scope="row">
            <th>Total Points</th>
            <td>34</td>
          </tr>
          <tr scope="row">
            <th>Correct Answers</th>
            <td>23</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card-footer text-muted">
      <PlayerNameModal/>
    </div>
  </div>
</template>

<script>
import PlayerNameModal from './PlayerNameModal'

/*
Total Points
Ranking
Correct Answers
*/
const PlayerStats = {
  components: {
    PlayerNameModal
  },
  props: [
    // "playerName"
  ],
  data() {
    return {
      playerName: "QuizlyBear88"
    }
  }
}

export default PlayerStats;
</script>

<style scoped>

</style>