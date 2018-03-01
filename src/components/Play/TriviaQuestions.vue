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
          :question="question"
        />

      </div>
      <div :class="choicesClasses">

        <!-- Answer Choices -->
        <Choices
          v-for="(choice, index) in choices"
          :key="index"
          :choice="choice"
          @chooseAnswer="chooseAnswer"
        />
        
        <!-- Hard coded dummy answers, will delete -->
        <button type="button" @click="chooseAnswer">key</button>
        <button type="button" @click="chooseAnswer">sword</button>
        <button type="button" @click="chooseAnswer">A scientific figure</button>
        <button type="button" @click="chooseAnswer">cellphone</button>

      </div>
    </div>
  </div>
</template>

<script>
import TimeRemaining from './TimeRemaining'
import Question from './question'
import Choices from './answers'

export default {
  props: [
    "timer", "question"
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
    choices() {
      // randomly combine 3 choices and 1 answer
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

{
  "response_code": 0,
  "results": [
    
    { // index 0
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "medium",
      "question": "According to the BBPA, what is the most common pub name in the UK?",
      "correct_answer": "Red Lion",
      "incorrect_answers": [
        "Royal Oak",
        "White Hart",
        "King&#039;s Head"
      ]
    }

    // ...
  ]
*/
</script>

<style scoped>
.card-header {
  min-height: 53px;
}
</style>