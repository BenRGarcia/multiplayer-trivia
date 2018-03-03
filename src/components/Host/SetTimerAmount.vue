<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-1">
        Set Timer Amount
      </h5>
      <h6>

        <!-- Currently: <span id="seconds">{{ trivia.seconds }}</span> seconds) -->
        (Currently: <span>999ish</span> seconds)

      </h6>
      <p class="card-text">Type in how many seconds you want players to have for each question.</p>
      <form @submit.prevent="setTimer">
        <div class="form-group row">
          <label for="setTimer" class="text-right col-6 mb-0 pt-2">Seconds:</label>

          <input 
            v-model="seconds" 
            type="number" 
            class="form-control col-4 col-sm-5 col-md-4 col-lg-3" 
            placeholder="(max = 60)"
          >
        
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
      // Declare min/max second limits
      let min = 1, max = 60;
      // Get number type from string input
      let secondsInt = parseInt(this.seconds);
      this.seconds = '';
      // console.log(`METHODS SetTimerAmount.vue says: setTimer() was just called with: ${secondsInt} seconds`);
      return secondsInt != NaN && // not empty
             secondsInt >= min && // not negative
             secondsInt <= max    // less than a minute
               ? this.$emit("setTimer", secondsInt) 
               : secondsInt;
    }
  }
}
</script>

<style scoped>
#seconds {
  color: red;
}
</style>