<template>
  <div class="row">
    <form :class="formClasses">
      <div class="form-group">
        <label>{{ inputLabel }}</label>
        <input type="text" class="form-control" :placeholder="inputPlaceholder">
      </div>
      <button class="btn btn-primary">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formClasses: [
        "col-10", "offset-1",      // xs screens
        "col-sm-8", "offset-sm-2", // sm screens
        "col-md-6", "offset-md-3", // md screens
        "col-lg-4", "offset-lg-4",  // lg screens
        "border", "rounded", "pt-1", "pb-1"
      ],
      inputLabel: "Choose Your Trivia Name",
      inputPlaceholder: "ex. QuizlyBear88",
      buttonText: "Play Trivia!"
    }
  }
}
</script>

<style scoped>

</style>