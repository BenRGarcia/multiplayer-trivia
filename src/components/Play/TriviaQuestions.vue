<template>
  <div class="card text-center">

    <!-- Timer -->
    <div class="card-header">
      <TimeRemaining/>
    </div>

    <div class="card-body">
      <!-- Trivia Question -->
      <div :class="questionClasses">
        <Question/>
      </div>
      <!-- Answer Choices -->
      <div :class="choicesClasses">
        <button type="button" :class="choiceClasses">key</button>
        <button type="button" :class="choiceClasses">sword</button>
        <button type="button" :class="choiceClasses">A scientific figure</button>
        <button type="button" :class="choiceClasses">cellphone</button>
      </div>
    </div>
  </div>
</template>

<script>
import TimeRemaining from './TimeRemaining'
import Question from './question.vue'

export default {
  components: {
    Question,
    TimeRemaining
  },
  data() {
    return {
      // CSS classes for trivia question
      questionClasses: [
        "card-title",
        "col-12", 
        "col-md-10", "offset-md-1"/*, 
        "col-md-8", "offset-md-2"*/
      ],
      // CSS classes for section of answer choices
      choicesClasses: [
        "card-text", 
        "col-12", 
        "col-sm-10", "offset-sm-1", 
        "col-md-6", "offset-md-3", 
        "col-lg-4", "offset-lg-4",
      ],
      // CSS classes for each answer choice
      choiceClasses: [
        "btn", "btn-secondary", "btn-lg", "btn-block"
      ]
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
    },
    
    { // index 1
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What year was Queen Elizabeth II born?",
      "correct_answer": "1926",
      "incorrect_answers": [
        "1923",
        "1929",
        "1930"
      ]
    }
    // index ...
  ]
}
*/
</script>

<style scoped>

</style>