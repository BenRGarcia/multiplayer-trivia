<template>
<div class="card p-2">
  <div id="chat" class="card-body border border-secondary rounded">
    <p>QuizlyBear88: You're going down!</p>
    <hr>
    <p>Triviaddict76: No way! You're going down!</p>
    <hr>
    <p>QuizlyBear88: Not a chance! I'm a trivia champ!</p>
    <hr>
    <p>Triviaddict76: Well I'm beating you already, so there! Well I'm beating you already, so there!</p>
    <hr>
    <p>QuizlyBear88: How about them apples?!</p>
    <hr>
    <p>Triviaddict76: No way! You're going down!</p>
    <hr>
    <p>QuizlyBear88: Not a chance! I'm a trivia champ!</p>
    <hr>
    <p>Triviaddict76: Well I'm beating you already, so there! Well I'm beating you already, so there!</p>
    <hr>
    <p>QuizlyBear88: How about them apples?!</p>
  </div>
  <div class="card-footer">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Send</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
$(function() {
  $('#chat').scrollTop( 1000 );
});

export default {
  data() {
    return {
      /* ... */
    }
  },
  methods: {
    scrollToBottom() {
      $('#chat').scrollTop( 1000 );
    }
  }
}
</script>

<style scoped>
.card-body {
  height: 200px;
  overflow: scroll;
  padding-bottom: 0;
}
.card-footer {
  padding: 0.5rem 0 0 0;
}
div {
  text-align: left;
}
p {
  /*margin-bottom: 0;*/
}
hr {
  margin: 0;
}
</style>