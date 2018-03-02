<template>
  <div>
    <div class="card-header"><h2 class="mb-0">Admin Danger Zone</h2></div>
    <h5 class="card-title mb-1">With great power comes great responsibility</h5>
    <h6 class="card-title mb-0">These buttons do what they say... be careful</h6>
    <div class="card-body pb-0">

      <div class="row">
        <div :class="cardClasses">
          <div class="card-header">
            Delete all players in the database
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><button @click="" class="btn btn-danger">Delete All Players</button></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div :class="cardClasses">
          <div class="card-header">
            Reset all player scores to 0
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><button @click="" class="btn btn-danger">Reset All Scores</button></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div :class="cardClasses">
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
</template>

<script>
export default {
  data() {
    return {
      cardClasses: [
        "col-12",                   // xs sized screens
        "col-sm-10", "offset-sm-1", // sm sized screens
        "col-md-6", "offset-md-3",  // >= md sized screens
        "card", 
        "pl-0", "pr-0", "mb-2"
      ]
    }
  }
}
</script>

<style scoped>

</style>