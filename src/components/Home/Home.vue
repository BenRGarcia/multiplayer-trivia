<template>
    <div class="row">

      <!-- 'Player Name' input area -->
      <div class="col-12 mt-3 mb-3">
        <PlayerName/>
      </div>

      <!-- Leader -->
      <div class="col-12 mt-3 mb-3">
        <LeaderBoard/>
      </div>

    </div>
</template>

<script>
import PlayerName from './PlayerName'
import LeaderBoard from './LeaderBoard'

export default {
  data() {
    return {
      /* ... */
    }
  },
  components: {
    LeaderBoard,
    PlayerName
  }
}
</script>

<style scoped>

</style>