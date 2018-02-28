<template>

  <div>

  <div>
    <p>
      <span class="name">QuizzlyBear{{ name }}</span>: You're going down!{{ message }} 
    </p>
  </div>




  <!-- Will delete, hard coded for initial coding -->
  <p>QuizlyBear88: You're going down!</p>
  <p>Triviaddict76: No way! You're going down!</p>
  <p>QuizlyBear88: Not a chance! I'm a trivia champ!</p>
  <p>Triviaddict76: Well I'm beating you already, so there! Well I'm beating you already, so there!</p>
  <p>QuizlyBear88: How about them apples?!</p>
  <p>Triviaddict76: No way! You're going down!</p>
  <p>QuizlyBear88: Not a chance! I'm a trivia champ!</p>
  <p>Triviaddict76: Well I'm beating you already, so there! Well I'm beating you already, so there!</p>
  <p>QuizlyBear88: How about them apples?!</p>

</div>
</template>

<script>
export default {
  props: [
    "name", "message"
  ]
}
</script>

<style scoped>
p {
  border-top: 1px solid #000;
}
.name {
  color: red;
}
</style>