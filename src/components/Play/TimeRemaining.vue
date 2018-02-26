<template>
  <section>

    <h4 class="timeRemaining">
      Time Remaining: {{ timeRemaining }}
    </h4>

  </section>
</template>

<script>
export default {
  props: [
    // "timeRemaining"
  ],
  data() {
    return {
      timeRemaining: "15"
    }
  }
}
</script>

<style scoped>
.timeRemaining {
  margin-bottom: 0;
}
</style>