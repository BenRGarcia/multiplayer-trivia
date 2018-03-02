<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        Post Question
      </h5>
      <p class="card-text mb-1">
        Click the button below to post the next trivia question.
      </p> 
      <p class="card-text">
        (This will also start the timer automatically)
      </p>

      <form 
        @submit.prevent="postQuestion"
      >

        <div class="form-group row">
          <label for="setTimer" class="col-12 mb-0 pt-1 pr-1">
            Question Number:
          </label>
          <div class="input-group mt-1 col-8 offset-2 col-md-6 offset-md-3">
            <div class="input-group-prepend">
              <span class="input-group-text p-0">

                <!-- Decrement Question Number -->
                <button 
                  @click.prevent="decrementQuestion" 
                  class="btn btn-secondary"
                >-</button>

              </span>
            </div>
            <input v-model="questionNumber" type="number" class="text-center form-control" readonly>
            <div class="input-group-append">
              <span class="input-group-text p-0">

                <!-- Increment Question Number -->
                <button 
                  @click.prevent="incrementQuestion" 
                  class="btn btn-secondary"
                >+</button>

              </span>
            </div>
          </div>
        </div>
      </form>

      <!-- Post Question -->
      <button 
        @click="postQuestion" 
        class="btn btn-primary"
      >
        Post Next Question
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "questionBank"
  ],
  data() {
    return {
      questionNumber: 2
    }
  },
  methods: {
    postQuestion() {
      console.log(`postQuestion was called`);
      return this.$emit("postQuestion", this.questionNumber - 1);
    },
    incrementQuestion() {
      return this.questionNumber++;
    },
    decrementQuestion() {
      return this.questionNumber--;
    }
  },
  watch: {
    questionNumber: function() {
      // How many questions are in the question bank?
      let qCount = this.questionBank[0][".value"].length;
      // decrement to 1 = qCount, increment to qCount = 1
      if (this.questionNumber < 1) {
        return this.questionNumber = qCount;
      } else if (this.questionNumber > qCount) {
        return this.questionNumber = 1;
      }
    }
  }
}
</script>

<style scoped>
  
</style>