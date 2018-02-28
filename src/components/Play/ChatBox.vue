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
    <div class="input-group">
      <input type="text" class="form-control">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Send</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import message from './ChatBoxMessage'

export default {
  props: [
    "chat"
  ],
  components: {
    message
  },
  methods: {
    scrollToBottom() {
      $('#chat').scrollTop( 1000 );
    }
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