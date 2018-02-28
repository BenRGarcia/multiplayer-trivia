<template>
  <div>

    <!-- Button trigger modal -->
    <button 
      @click="autofocusModal" 
      type="button" 
      class="btn btn-primary mb-0" 
      data-toggle="modal" 
      data-target="#playerNameModal"
    >
      Change Player Name
    </button>

    <!-- Modal -->
    <div class="modal fade" id="playerNameModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create a Player Name to play</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <!-- Begin modal form -->
            <form 
              v-on:submit.prevent="addPlayer"
            >

              <div class="form-group">
                <label for="player-name" class="col-form-label">Player Name:</label>
                
                <!-- Input box for player name -->
                <input 
                  v-model="playerName" 
                  type="text" 
                  class="form-control" 
                  id="player-name" 
                  placeholder="ex. QuizlyBear88"
                >

              </div>
            </form>
          </div>
          <div class="modal-footer">

            <!-- Submit button -->
            <input 
              @click="addPlayer" 
              type="submit" 
              class="btn btn-primary"
            >

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import modal from './modal'

export default {
  data() {
    return {
      isPlayerNameChosen: false,
      playerName: ''
    }
  },
  methods: {
    // Autofocus modal to player name input box (save the user a 'click')
    autofocusModal() {
      $('#playerNameModal').on('shown.bs.modal', function () {
        $('#player-name').trigger('focus');
      })
    },

    addPlayer() {
      // Close modal
      $('#playerNameModal').modal('hide');

      // emit to parent component
      this.$emit("addPlayer", this.playerName);

      // Reset property to empty string
      this.playerName = "";
    }

    // addPlayer() {
      // Close modal
      // $('#playerNameModal').modal('hide');

      // Set playerName in session storage
      // localStorage.setItem("playerName", this.playerName);

      // Reset property to empty string
      // this.playerName = "";
    // }
    /*
     * Use javascript to trigger modal if no player name selected
     * $('#playerNameModal').modal(options)
     */
  }
}
</script>

<style scoped>
  
</style>