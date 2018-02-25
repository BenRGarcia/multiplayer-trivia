<template>
  <div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#playerNameModal">
      Change Player Name
    </button>

    <!-- Modal -->
    <div class="modal fade" id="playerNameModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create a Player Name to play</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit="updatePlayerName">
              <div class="form-group">
                <label for="player-name" class="col-form-label">Player Name:</label>
                <input v-model="playerName" type="text" class="form-control" id="player-name" placeholder="ex. QuizlyBear88">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button @click="updatePlayerName" type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlayerNameChosen: false,
      playerName: ""
    }
  },
  methods: {
    updatePlayerName() {
      // Close modal
      $('#playerNameModal').modal('hide');
      // Clear session storage
      sessionStorage.clear();
      // Set playerName in session storage
      sessionStorage.setItem("playerName", this.playerName);
      // Reset property to empty string
      this.playerName = "";
    }
    /*
     * Use javascript to trigger modal if no player name selected
     * $('#playerNameModal').modal(options)
     */
  }
}
</script>

<style scoped>
  
</style>