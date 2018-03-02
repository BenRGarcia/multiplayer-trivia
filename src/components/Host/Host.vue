<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Post Question</h5>
          <p class="card-text mb-1">Click the button below to post the next trivia question.</p> 
          <p class="card-text">(This will also start the timer automatically)</p>
          <button @click="" class="btn btn-primary">Post Next Question</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title mb-1">Set Timer Amount</h5>
          <h6>(Currently: {{ 30 }} seconds)</h6>
          <p class="card-text">Type in how many seconds you want players to have for each question.</p>
          <form action="">
            <div class="form-group row">
                <label for="setTimer" class="text-right col-6 mb-0 pt-2">Seconds:</label>
                <input type="number" class="form-control col-4 col-sm-5 col-md-4" id="seconds" placeholder="ex. 30">
            </div>
          </form>
          <button @click="" class="btn btn-primary">Set Timer Seconds</button>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-10 offset-md-1 card border-success mt-3 pl-0 pr-0">
      <div class="card-header"><h2 class="mb-0">Trivia Data</h2></div>
      <div class="card-body">
        <p class="card-text">
          Seconds Remaining: 30{{  }}
        </p>
        <p>
          <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Click to see current players and scores
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            player v-for goes here
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-12 col-md-10 offset-md-1 card border-danger mt-3 pl-0 pr-0">
      <div class="card-header"><h2 class="mb-0">Admin Danger Zone</h2></div>
      <h5 class="card-title mb-1">With great power comes great responsibility</h5>
      <h6 class="card-title">These buttons do what they say... be careful</h6>
      <div class="card-body">

        <div class="row">
          <div class="card col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 pl-0 pr-0">
            <div class="card-header">
              Delete all players in the database
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><button @click="" class="btn btn-danger">Delete All Players</button></li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="card col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 pl-0 pr-0">
            <div class="card-header">
              Reset all player scores to 0
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><button @click="" class="btn btn-danger">Reset All Scores</button></li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="card col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 pl-0 pr-0">
            <div class="card-header">
              Completely delete all chat history
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><button @click="" class="btn btn-danger">Clear Chat History</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
  margin-bottom: 0.4rem;
}
</style>