<template>
  <div class="card">
    <div class="card-body pb-0">
      <table class="table table-sm">

        <thead class="thead-dark">
          <tr>
            <!-- Player Name -->
            <th scope="col">{{ playerName }}</th>
            <th scope="col">Stats</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Ranking</th>
            <!-- Player's Ranking -->
            <td>{{ playerRank }}</td>
          </tr>
          <tr scope="row">
            <th>Points</th>
            <!-- Player's Points -->
            <td>{{ playerPoints }}</td>
          </tr>
        </tbody>

      </table>
    </div>

    <div class="card-footer text-muted">

      <!-- 'Change Player Name' Modal -->
      <PlayerNameModal 
        @addPlayer="addPlayer"
      />

    </div>
  </div>
</template>

<script>
import PlayerNameModal from './PlayerNameModal'

export default {
  components: {
    PlayerNameModal
  },
  props: [
    "players"
  ],
  methods: {
    addPlayer(name) {
      this.$emit("addPlayer", name);
    }
  },
  computed: {
    playerName() {
      // Get playerKey from local storage
      let key = localStorage.getItem("playerKey");
      // Iterate over "players" props array
      for (let player of this.players) {
        // If key matches up with a player
        if (player['.key'] === key) { 
          return player.name;
        } 
      }
      // When no key/player match found
      return "Create Player Name";
    },
    playerPoints() {
      // Get playerKey from local storage
      let key = localStorage.getItem("playerKey");
      // Iterate over "players" props array
      for (let player of this.players) {
        // If key matches up with a player
        if (player['.key'] === key) { 
          return player.points
            ? player.points
            : "-";
        }
      }
      // When no key/player match found
      return "-";
    },
    playerRank() {
      // Get playerKey from local storage
      let key = localStorage.getItem("playerKey");
      // Sort players from highest points to lowest points
      let sortedArray = this.players.sort( (a,b) => b.points - a.points );
      // Iterate over sorted array
      for (let i = 0; i < sortedArray.length; i++) {
        // If key matches up with a player
        if (sortedArray[i]['.key'] === key) { 
          return sortedArray[i].points
                  ? i + 1
                  : "-"
        }
      }
      // When no key/player match found
      return "-";
    }
  }
}
</script>
