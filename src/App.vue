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
          :trivia="trivia"
          @addPlayer="addPlayer"
          @sendMessage="sendMessage"
          @chooseAnswer="chooseAnswer"
          @deletePlayers="deletePlayers"
          @resetScores="resetScores"
          @clearChat="clearChat"
          @postQuestion="postQuestion"
          @setTimer="setTimer"
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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
// Initialize firebase
firebase.initializeApp(config);
// Create references to nodes for ease of use
var db = firebase.database();
var playersRef = db.ref("/playerData");
var chatRef = db.ref("/chat");
var timerRef = db.ref("/timer");
var questionBankRef = db.ref("/questionBank");
var triviaRef = db.ref("/trivia");

export default {
  name: 'App',
  components: {
    PageTitle
  },
  data() {
    return {
      intervalId: null
    }
  },
  firebase: {
    players: playersRef,
    timer: timerRef,
    questionBank: questionBankRef,
    chat: chatRef.limitToLast(10),
    trivia: triviaRef
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
      // Iterate over players
      for (let player of this.players) {
        // Find player names and keys
        let key = player[".key"];
        let name = player.name;

        // create new player objects with 0 points
        let zeroPoints = {};
        zeroPoints[key] = {
          name: name,
          points: 0
        }
        // Push updates to db
        playersRef.update(zeroPoints);
      }
    },
    clearChat() {
      return chatRef.set({});
    },
    postQuestion(index) {
      // Retrieve question object at the passed index
      let question = this.questionBank[0][".value"][index];
      console.log(question);
      // udpate db with question object
      return triviaRef.set({
        question: question
      });
    },
    startTimer() {
      // Load initial seconds count
      let initial = timerRef.child('initial');
      console.log(`startTimer says initial is ${initial} seconds`);
      // Set initial count as remaining count
      timerRef.child('remaining').update({
        seconds: initial
      });
      this.intervalId = setInterval( decrementTimer ,1000);
    },
    decrementTimer() {
      let seconds = this.timer.remaining;
      console.log(`${seconds} seconds remaining`);
      seconds--;
      // Decrement remaining seconds
      timerRef.child('remaining').update({
        seconds: seconds
      })
      // If time has run out
      if (seconds <= 0) {
        clearInterval(intervalId)
        console.log(`Time is up!`);
      }
    },
    setTimer(seconds) {
      console.log(`${seconds} received by setTimer in App.vue`);

      /*return timerRef.child('initial').update({
        seconds: seconds
      });*/
    }
  }
}
</script>

<style>

</style>
