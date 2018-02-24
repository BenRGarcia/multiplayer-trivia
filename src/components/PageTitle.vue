<template>
  <!-- Page layout for home page -->
  <div>
    <a 
      :href="url"
      target="_blank" 
    >
      {{ linkText }}
    </a>
    <h1>
      {{ headingText }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://github.com/BenRGarcia/multiplayer-trivia",
      linkText: "View Source Code",
      headingText: "TRIVIA"
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>