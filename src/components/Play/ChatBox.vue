<template>
<div class="card p-2">
  <div id="chat" class="card-body border border-secondary rounded">

    <message 
      v-for="(message, index) in chat" 
      :key="index"
      :name="message.name" 
      :message="message.message"
    />

  </div>
  <div class="card-footer">

    <inputMessage 
      @sendMessage="sendMessage"
    />

  </div>
</div>
</template>

<script>
import message from './ChatBoxMessage'
import inputMessage from './ChatBoxMessageInput'

export default {
  props: [
    "chat"
  ],
  components: {
    message,
    inputMessage
  },
  methods: {
    sendMessage(message) {
      this.$emit("sendMessage", message);
    }
  },
  mounted: function() {
    $('#chat').scrollTop( 1000 );
  },
  updated: function () {
    $('#chat').scrollTop( 1000 );
  }
}
</script>

<style scoped>
.card-body {
  height: 200px;
  overflow: scroll;
  padding-bottom: 0;
}
.card-footer {
  padding: 0.5rem 0 0 0;
}
div {
  text-align: left;
}
hr {
  margin: 0;
}
</style>