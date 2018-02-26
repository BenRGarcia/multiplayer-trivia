<template>
  <div>

    <!-- Bootstrap Card that contains Timer + Question + Answer Choices -->
    <div class="row">
      <div class="col">
        <TriviaQuestions/>
      </div>
    </div>
    
    <div class="row">
      <!-- Stats -->
      <div class="col-12 col-md-5 mb-3">
        <PlayerStats/>
      </div>
      <!-- Chat -->
      <div class="col-12 col-md-7 mb-3">
        <ChatBox/>
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
    "timeRemaining", "question", 
    "choices", "chat"
  ],
  data() {
    return {
      /* ... */
    }
  },
  components: {
    TimeRemaining,
    TriviaQuestions,
    PlayerStats,
    ChatBox,
    PlayerNameModal
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 1rem;
}
</style>