<template>
  <form @submit.prevent="sendMessage">
    <div class="input-group">

      <input 
        v-model.trim="newMessage" 
        placeholder="message" 
        type="text" 
        class="form-control"
      >

      <div class="input-group-append">

        <button 
          @click="sendMessage"
          class="btn btn-outline-secondary" 
          type="button"
        >
          Send
        </button>

      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "",
      maxChars: 100
    }
  },
  methods: {
    sendMessage() {
      console.log(`'Send' was intiated with the message: ${this.newMessage}`);

      // Declare local variable
      let message = this.newMessage;

      // Reset message input to empty
      this.newMessage = "";

     return message.length <= this.maxChars
        ? $emit("sendMessage", message)
        : alert("Max character limit is 100 characters");
    }
  }
}
</script>

<style scoped>

</style>