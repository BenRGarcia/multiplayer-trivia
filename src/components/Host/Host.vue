<template>
  <div class="row">
    <div class="col-md-6 mb-2">

      <!-- Component to Post a new trivia question -->
      <PostQuestion
        :questionBank="questionBank"
        @postQuestion="postQuestion"
      />

    </div>
    <div class="col-md-6">

      <!-- Component to Set the default timer amount -->
      <SetTimerAmount
        :trivia="trivia"
        @setTimer="setTimer"
      />

    </div>
    <div id="data" :class="cardClasses">

      <!-- Component to show player data -->
      <TriviaData
        :players="players"
        :timer="timer"
      />

    </div>
    <div :class="cardClasses">

      <!-- Component to perform admin duties -->
      <AdminDangerZone
        @deletePlayers="deletePlayers"
        @resetScores="resetScores"
        @clearChat="clearChat"
      />

    </div>
  </div>
</template>

<script>
import PostQuestion from './PostQuestion'
import SetTimerAmount from './SetTimerAmount'
import TriviaData from './TriviaData'
import AdminDangerZone from './AdminDangerZone'

export default {
  props: [
  "timer", "players", "trivia", "questionBank"
  ],
  data() {
    return {
      // CSS classes for Bootstrap Cards
      cardClasses: [
        "col-12",                   // xs + sm  sized screens
        "col-md-10", "offset-md-1", // > md sized screen
        "card", "border-danger", 
        "mt-3", "pl-0", "pr-0"
        ]
    }
  },
  components: {
    PostQuestion,
    SetTimerAmount,
    TriviaData,
    AdminDangerZone
  },
  methods: {
    postQuestion(index) {
      this.$emit("postQuestion", index);
    },
    setTimer(seconds) {
      this.$emit("setTimer", seconds);
    },
    deletePlayers() {
      this.$emit("deletePlayers");
    },
    resetScores() {
      this.$emit("resetScores");
    },
    clearChat() {
      this.$emit("clearChat");
    }
  }
}
</script>

<style scoped>
#data {
  border-color: green !important;
}
</style>
