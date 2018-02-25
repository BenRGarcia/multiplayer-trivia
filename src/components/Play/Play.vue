<template>
  <div>

    <!-- Page layout for game play -->
    <div>
      <h1>'Play Game' Page</h1>
      <router-link to="/home">
        GO TO HOME Page!
      </router-link>
    </div>

    <div>
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
    ChatBox
  }
}
</script>

<style scoped>

</style>