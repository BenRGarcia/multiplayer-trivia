<template>
  <tr>
    <th scope="row">
      {{ ranking + 1 }}
    </th>
    <td>
      {{ playerName }}
    </td>
    <td>
      {{ points }}
    </td>
  </tr>
</template>

<script>
export default {
  props: [
    "ranking", "playerName", "points"
  ],
  data() {
    return {
      // ...
    }
  }
}
</script>

<style scoped>

</style>