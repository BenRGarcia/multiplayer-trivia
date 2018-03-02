<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>
  
</style>