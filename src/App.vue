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
        <router-view/>
      </div>
    </div>

    

  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import trivia from './assets/javascript/trivia.js'

// firebase
import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBrQisbyt2TLTPns6DkbvJ5pKQStVvqmDo",
  authDomain: "multiplayer-trivia.firebaseapp.com",
  databaseURL: "https://multiplayer-trivia.firebaseio.com",
  projectId: "multiplayer-trivia",
  storageBucket: "multiplayer-trivia.appspot.com",
  messagingSenderId: "633175556093"
};
firebase.initializeApp(config);
var db = firebase.database();
// end firebase

export default {
  name: 'App',
  data() {
    return {
      // ...
    }
  },
  components: {
    PageTitle
  },
  firebase: {
    playerData: db.ref("/playerData"),
    questionBank: db.ref("/questionBank/data")
  }
}
</script>

<style>

</style>
