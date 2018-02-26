<template>
  <h2 class="question mb-4">
    {{ question }}
  </h2>
</template>

<script>
export default {
  props: [
    // "question"
  ],
  data() {
    return {
      // ...hardcoded for dev, will delete
      question: "The words 'bungalow' and 'shampoo' originate from the languages of which country?",
    }
  }
}
</script>

<style scoped>

</style>