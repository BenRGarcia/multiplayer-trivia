<template>

  <!-- <tr>
    <th scope="row">
      {{ place }}
    </th>
    <td>
      {{ playerName }}
    </td>
    <td>
      {{ points }}
    </td>
  </tr> -->

  <!-- Hard coded dummy content -->
    <tr>
      <th scope="row">1</th>
      <td>Ben</td>
      <td>47</td>
    </tr>

</template>

<script>
export default {
  props: [
    // props for each singular leader on leaderboard
    "place", "playerName", "points"
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