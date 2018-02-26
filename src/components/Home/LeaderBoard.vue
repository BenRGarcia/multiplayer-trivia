<template>
  <div class="row">
    <div :class="leaderboardClasses">
      <div class="card">
        <div class="card-body p-0">
          <h3 class="mt-1 mb-1">LEADERBOARD</h3>
          <table class="table table-sm">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Ranking</th>
                <th scope="col">Name</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              <!-- <leader v-for="(leader, index) in leaderboard" :key="index" :place="leader.place", :playerName="leader.name", :points="leader.points"/> -->
              <!-- <leader/> -->
              <tr>
                <th scope="row">1</th>
                <td>QuizlyBear88</td>
                <td>38</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>J-hawn</td>
                <td>37</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>OwlieOwlerson43</td>
                <td>36</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>OllieOllieOxenfree</td>
                <td>32</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Terry</td>
                <td>31</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>P@t</td>
                <td>28</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>J1m</td>
                <td>26</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>J3ss3sgurl</td>
                <td>24</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>TomNjerry</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>TheDoctor</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>  
        </div>
      </div>
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