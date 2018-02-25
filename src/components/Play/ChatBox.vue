<template>
<div class="card">
  <div class="card-body">
    <p>You're going down!</p>
    <p>-Player1</p>
    <hr>
    <p class="self">Nope, you're going down</p>
    <p class="self">-You</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      /* ... */
    }
  }
}
</script>

<style scoped>
.card-body {
  max-height: 100px;
  overflow: scroll;
}
div {
  text-align: left;
}
p {
  margin-bottom: 0;
}
.self {
  text-align: right;
}
</style>