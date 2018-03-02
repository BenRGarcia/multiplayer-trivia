<template>
  <div>
    <div class="card-header">
      <h2 class="mb-0">Trivia Data</h2>
    </div>
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
</template>

<script>
export default {

}
</script>

<style scoped>

</style>