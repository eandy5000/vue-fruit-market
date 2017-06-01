<template>
  <div class="hello">
    <score-board></score-board>
    <buyer-board></buyer-board>
  </div>
</template>

<script>
import BuyerBoard from '../bits/BuyerBoard.vue'
import ScoreBoard from '../bits/ScoreBoard.vue'
export default {
  name: 'hello',
  components: {
    BuyerBoard,
    ScoreBoard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
