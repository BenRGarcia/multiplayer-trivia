<template>
    <div class="row">

      <div class="col-12 mt-2 mb-2">
        <router-link to="/play">
          <button class="btn btn-primary">
            PLAY!
          </button>
        </router-link>
      </div>

      <!-- LeaderBoard -->
      <div class="col-12 mt-3 mb-3">
        <LeaderBoard/>
      </div>

    </div>
</template>

<script>
import LeaderBoard from './LeaderBoard'


export default {
  data() {
    return {
      /* ... */
    }
  },
  components: {
    LeaderBoard
  },
  firebase: function() {
    return {
      // question: firebase.database().ref('/questionBank').val().data[0]
    }
  }
}
</script>

<style scoped>

</style>