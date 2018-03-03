<template>
  <div class="card text-center">
    <div class="card-header">

        <!-- Timer -->
        <TimeRemaining
          :timer="timer"
        />

    </div>
    <div class="card-body">
      <div :class="questionClasses">

        <!-- Trivia Question -->
        <Question
          v-for="(item, index) in trivia"
          :key="index"
          :question="item.question"
        />

      </div>
      <div :class="choicesClasses">


















        <!-- Answer Choices -->
        <!-- <Choices
          v-for="(item, index) in trivia[0].incorrect_answers"
          :key="index"
          :choice="item"
          @chooseAnswer="chooseAnswer"
        /> -->
        <Choices
          v-for="(choice, index) in choices"
          :key="index"
          :choice="choice"
          @chooseAnswer="chooseAnswer"
        />











      </div>
    </div>
  </div>
</template>

<script>
import TimeRemaining from './TimeRemaining'
import Question from './question'
import Choices from './choices'

export default {
  props: [
    "timer", "trivia"
  ],
  components: {
    Question,
    TimeRemaining,
    Choices
  },
  data() {
    return {
      // CSS classes for trivia question
      questionClasses: [
        "card-title",
        "col-12", 
        "col-md-10", "offset-md-1"
      ],
      // CSS classes for section of answer choices
      choicesClasses: [
        "card-text", 
        "col-12",                   // for xs screens
        "col-sm-10", "offset-sm-1", // for sm screens
        "col-md-6", "offset-md-3",  // for md screens
        "col-lg-4", "offset-lg-4",  // for lg screens
      ]
    }
  },
  computed: {
    /*question() {
      return this.trivia[0].question;
    },*/
    choices() {
      let allChoices = [];
      let wrongChoices = this.trivia[0].incorrect_answers;
      let rightAnswer = this.trivia[0].correct_answer;
      console.log(`Right answer is: ${rightAnswer}`);
      let qtyChoices = wrongChoices.length + 1;
      // add wrong answers to new array
      for (let choice of wrongChoices) {
        allChoices.push(choice);
      }
      // insert right answer randomly
      let randomIndex = Math.floor(Math.random() * qtyChoices);
      allChoices.splice(randomIndex, 0, rightAnswer);
      // return allChoices;
      return [1, 2, 3, 4]
    }
  },
  methods: {
/*  
    // Proper code:
    
    chooseAnswer(choice) {
      this.$emit("chooseAnswer", choice);
    }
*/

    // hard coded, will delete:
    chooseAnswer(e) {
      let event = $(e.target).text();
      this.$emit("chooseAnswer", event);
    }
  }
}
/*
API Source: https://opentdb.com/api_config.php
ex. url: https://opentdb.com/api.php?amount=10&type=multiple
*/
</script>

<style scoped>
.card-header {
  min-height: 53px;
}
</style>