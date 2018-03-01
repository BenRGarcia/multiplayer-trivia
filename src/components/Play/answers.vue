<template>
    <button 
      @click="chooseAnswer"
      :class="choiceClasses"
    >
      {{ choice }}
    </button>
</template>

<script>
export default {
  props: [
    "choice"
  ],
  data() {
    return {
      // CSS classes for each answer choice
      choiceClasses: [
        "btn", "btn-secondary", "btn-lg", "btn-block"
      ]
    }
  },
  methods: {
    chooseAnswer(e) {
      console.log(`${this.choice} was received by answers.vue`);
      this.$emit("chooseAnswer", this.choice);
    }
  }
}
</script>

<style scoped>

</style>