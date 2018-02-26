<template>
  <div class="row">
    <div :class="leaderboardClasses">

      <h3>LEADERBOARD</h3>
      <table class="table table-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Place</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          <!-- <leader v-for="(leader, index) in leaderboard" :key="index" :place="leader.place", :playerName="leader.name", :points="leader.points"/> -->
          <!-- <leader/> -->
          <tr>
            <th scope="row">1</th>
            <td>Ben</td>
            <td>38</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Jon</td>
            <td>32</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Amanda</td>
            <td>36</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Jon</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
</template>

<script>
import leader from './leader'

export default {
  props: [
    // leaderboard
  ],
  components: {
    leader
  },
  data() {
    return {
      leaderboardClasses: [
        "col-12",                   // xs screens
        "col-sm-10", "offset-sm-1", // sm screens
        "col-md-8", "offset-md-2",  // md screens
        "col-lg-6", "offset-lg-3"   // xl screens
      ]
    }
  }
}
</script>

<style scoped>

</style>