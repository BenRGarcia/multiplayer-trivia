<template>
  <div>

    <!-- Page layout for game play -->
    <div>
      <PlayerNameModal/>
      <TimeRemaining/>
      <TriviaQuestions/>
      <PlayerStats/>
      <ChatBox/>
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

</style>