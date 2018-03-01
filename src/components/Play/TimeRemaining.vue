<template>
  <section>
    <h4 v-for="time in timer" class="timeRemaining">
      Time Remaining: {{ time.remaining }}
    </h4>
  </section>
</template>

<script>
export default {
  props: [
    "timer"
  ]
}
</script>

<style scoped>
.timeRemaining {
  margin-bottom: 0;
}
</style>