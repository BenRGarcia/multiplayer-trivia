<template>
  <div id="app" class="container">

    <!-- Page Title -->
    <div class="row">
      <div class="col">
        <PageTitle/>
      </div>
    </div>

    <!-- Page Contents -->
    <div class="row">
      <div class="col">
        <router-view :players="players" @addPlayer="addPlayer"/>
      </div>
    </div>

  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import trivia from './assets/javascript/trivia.js'
import firebase from 'firebase'

// firebase config
var config = {
  apiKey: "AIzaSyBrQisbyt2TLTPns6DkbvJ5pKQStVvqmDo",
  authDomain: "multiplayer-trivia.firebaseapp.com",
  databaseURL: "https://multiplayer-trivia.firebaseio.com",
  projectId: "multiplayer-trivia",
  storageBucket: "multiplayer-trivia.appspot.com",
  messagingSenderId: "633175556093"
};
// Initialize firebase
firebase.initializeApp(config);
// Create references to nodes for ease of use
var playersRef = db.ref("/playerData");
var questionsRef = db.ref("/questionBank/data");

export default {
  name: 'App',
  data() {
    return {
      question: {},
    }
  },
  components: {
    PageTitle
  },
  firebase: {
    players: playersRef,
    questionBank: questionsRef,
  },
  methods: {
    // Add playerName to database
    addPlayer(name) {
      // Get firebase key for new player
      newPlayerKey = playersRef.push().key;

      // Store newPlayerKey in sessionstorage
      sessionStorage.setItem("playerKey", newPlayerKey);

      // Create new object to post to db
      newPlayer = {};
      // Add key/value of newPlayerKey
      newPlayer['/playerData/' + newPlayerKey] =  {
                                                    name: name,
                                                    points: 0
                                                  };

      return playersRef.update(newPlayer);
    }
  }
}
</script>

<style>

</style>
