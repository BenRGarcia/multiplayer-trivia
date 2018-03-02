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
          :questionBank="questionBank"
          @addPlayer="addPlayer"
          @sendMessage="sendMessage"
          @chooseAnswer="chooseAnswer"
          @deletePlayers="deletePlayers"
          @clearChat="clearChat"
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
var chatRef = db.ref("/chat");
var timerRef = db.ref("/timer");
var questionBankRef = db.ref("/questionBank");
var testRef = db.ref("/Test");

export default {
  name: 'App',
  components: {
    PageTitle
  },
  firebase: {
    players: playersRef,
    timer: timerRef,
    questionBank: questionBankRef,
    chat: chatRef.limitToLast(10)
  },
  methods: {
    // Add playerName to database, or change name if key exists
    addPlayer(name) {
      // playerKey already exists, or get a new one
      let playerKey = localStorage.getItem("playerKey") || playersRef.push().key;
      let points;

      // Existing players keep current points
      for (let player of this.players) {
        if (playerKey === player[".key"]) {
          points = player.points;
        }
      }

      // In case playerKey was not present, send to localStorage
      localStorage.setItem("playerKey", playerKey);
      // Create new object to post to db
      let newPlayer = {};
      // Add key/value of newPlayerKey
      newPlayer[playerKey] = {
        name: name,
        points: points || 0
      };
      return playersRef.update(newPlayer);
    },
    // Add new chat message to database
    sendMessage(message) {
      // Get firebase key for new message
      let newMessageKey = chatRef.push().key;
      // Get playerKey from session storage
      let playerKey = localStorage.getItem("playerKey");
      // Lookup player name
      let name;

      for (let player of this.players) {
        if (playerKey === player[".key"]) {
          name = player.name;
        }
      }
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
    },
    deletePlayers() {
      return playersRef.set({});
    },
    resetScores() {
      
    },
    clearChat() {
      return chatRef.set({});
    }
  }
}
</script>

<style>

</style>
