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
        <router-view 
          :players="players" 
          :chat="chat"
          :timer="timer"
          :question="question"
          @addPlayer="addPlayer"
          @sendMessage="sendMessage"
          @chooseAnswer="chooseAnswer"
        />
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
var db = firebase.database();
var playersRef = db.ref("/playerData");
// var questionsRef = db.ref("/questionBank/data");
var chatRef = db.ref("/chat");
var timerRef = db.ref("/timer");
var questionRef = db.ref("/question");

export default {
  name: 'App',
  components: {
    PageTitle
  },
  firebase: {
    players: playersRef,
    timer: timerRef,
    // questionBank: questionsRef,
    question: questionRef,
    chat: chatRef.limitToLast(10)
  },
  methods: {
    // Add playerName to database
    addPlayer(name) {
      // Get firebase key for new player
      let newPlayerKey = playersRef.push().key;
      // Store newPlayerKey in localStorage
      localStorage.setItem("playerKey", newPlayerKey);
      // Create new object to post to db
      let newPlayer = {};
      // Add key/value of newPlayerKey
      newPlayer[newPlayerKey] = {
        name: name,
        points: 0
      };
      return playersRef.update(newPlayer);
    },
    // Add new chat message to database
    sendMessage(message) {
      // Get firebase key for new message
      let newMessageKey = chatRef.push().key;
      // Get player name from session storage
      let name = localStorage.getItem("playerName");
      // Create new object to post to db
      let newMessage = {};
      // Add key/value of newMessageKey
      newMessage[newMessageKey] = {
        name: name,
        message: message
      };
      return chatRef.update(newMessage);
    },
    chooseAnswer(choice) {
      console.log(`${choice} was received by App.vue`);
      // do stuff ...
    }
  }
}
</script>

<style>

</style>
