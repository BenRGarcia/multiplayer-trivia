<template>
    <div class="row">

      <!-- 'PLAY!' Button -->
      <div class="col-12 mt-2 mb-2">
        <router-link to="/play">
          <button class="btn btn-primary">
            PLAY!
          </button>
        </router-link>
      </div>

      <!-- LeaderBoard -->
      <div class="col-12 mt-3 mb-3">
        <LeaderBoard 
          :players="players"
        />
      </div>

    </div>
</template>

<script>
import LeaderBoard from './LeaderBoard'

export default {
  props: [
    "players"
  ],
  components: {
    LeaderBoard
  }
}
</script>

<style scoped>

</style>