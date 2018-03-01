<template>
  <div>
    <div class="row">
      <div class="col">

        <!-- Bootstrap Card that contains Timer + Question + Answer Choices -->
        <TriviaQuestions
          :timer="timer"
          :question="question"
          @chooseAnswer="chooseAnswer"
        />

      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5 mb-3">

        <!-- Stats -->
        <PlayerStats 
          :players="players" 
          @addPlayer="addPlayer"
        />

      </div>
      <div class="col-12 col-md-7 mb-3">

        <!-- Chat -->
        <ChatBox 
          @sendMessage="sendMessage" 
          :chat="chat"
        />

      </div>
    </div>
  </div>
</template>

<script>
import TimeRemaining from './TimeRemaining'
import TriviaQuestions from './TriviaQuestions'
import PlayerStats from './PlayerStats'
import ChatBox from './ChatBox'
import PlayerNameModal from './PlayerNameModal'

export default {
  props: [
    "players", "timer", "question", 
    "choices", "chat"
  ],
  components: {
    TimeRemaining,
    TriviaQuestions,
    PlayerStats,
    ChatBox,
    PlayerNameModal
  },
  methods: {
    sendMessage(message) {
      this.$emit("sendMessage", message);
    },
    addPlayer(name) {
      this.$emit("addPlayer", name);
    },
    chooseAnswer(choice) {
      this.$emit("chooseAnswer", choice);
    }
  },
  mounted: function() {
    // On page load, show playerName modal if name not yet created
    if (localStorage.getItem("playerKey") === null) {
      return $('#playerNameModal').modal('show');
    }
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 1rem;
}
</style>