<template>
  <div>
    
    <!-- Trivia Question -->
    <h2>
      {{ question }}
    </h2>
    
    <!-- Answer Choices -->
    <p>a) One</p>
    <p>b) Two</p>
    <p>c) Three</p>
    <p>d) *CRUNCH!*</p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "How many licks does it take to get to the center of a tootsie pop?",
      choices: ["One", "Two", "Three", "*CRUNCH!*"]
    }
  }
}
</script>

<style scoped>
p {
  text-align: left;
}
</style>