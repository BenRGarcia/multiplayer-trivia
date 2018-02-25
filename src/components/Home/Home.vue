<template>
  <!-- Page layout for home page -->
  <div>
    <h1>Home Page</h1>
    <router-link to="/play">
      PLAY!
    </router-link>
    
    <PlayerName/>
    <LeaderBoard/>
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