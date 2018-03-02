<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-1">
        Set Timer Amount
      </h5>
      <h6>

        <!-- Currently: <span id="seconds">{{ trivia.seconds }}</span> seconds) -->
        (Currently: <span id="seconds">999ish</span> seconds)

      </h6>
      <p class="card-text">Type in how many seconds you want players to have for each question.</p>
      <form @submit.prevent="setTimer">
        <div class="form-group row">
          <label for="setTimer" class="text-right col-6 mb-0 pt-2">Seconds:</label>
          <input v-model="seconds" type="number" class="form-control col-4 col-sm-5 col-md-4 col-lg-3" placeholder="ex. 30">
        </div>
      </form>
      <button @click="setTimer" class="btn btn-primary">Set Timer Seconds</button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "trivia"
  ],
  data() {
    return {
      seconds: ''
    }
  },
  methods: {
    setTimer() {
      // Get number type from string input
      let seconds = parseInt(this.seconds);
      // Ignore empty inputs
      if (seconds) {
        console.log(`METHODS SetTimerAmount.vue says: setTimer() was just called with: ${seconds} seconds`);
        this.seconds = '';
        return this.$emit("setTimer", seconds);
      }
      // If input was empty
      return seconds;
    }
  }
}
</script>

<style scoped>
#seconds {
  color: red;
}
</style>