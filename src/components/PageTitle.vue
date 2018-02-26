<template>
  <div>

    <!-- 'View Source Code' link -->
    <a :href="url" target="_blank">{{ linkText }}</a>

    <!-- Page Title -->
    <router-link to="/home">
      <h1 :class="headingClasses">{{ headingText }}</h1>
    </router-link>

  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://github.com/BenRGarcia/multiplayer-trivia",
      linkText: "View Source Code",
      headingText: "TRIVIA",
      headingClasses: ["display-3", "mb-0"]
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
h1 {
  color: black;
}
h1:hover {
  color: black;
}
</style>