<template>
    <div class="container">
        <div class="score">
            <h1>Scoreboard</h1>
            <p><strong>Cash: </strong>{{cash | toDollars}}</p>
            <p v-if="difference !== 0">
            <strong>Profits: </strong>
            <span
              :class="{green, red: !green}"
            >{{cash - 100 | toDollars}}</span>
            </p>
            <div v-if="displayFinalStats">
             <final-stats></final-stats>
            </div>
            <div v-else-if="!firstGame">
            <ingame-stats></ingame-stats>
            </div>
        </div>
        <div class="timer">
            <countdown-timer></countdown-timer>
        </div>
    </div>
</template>

<script>
    import CountdownTimer from './CountdownTimer.vue'
    import FinalStats from './FinalStats.vue'
    import IngameStats from './IngameStats.vue'
    export default {
      components: {
        CountdownTimer,
        FinalStats,
        IngameStats
      },
      computed: {
        cash () {
          return this.$store.state.game.cash
        },
        displayFinalStats () {
          return !this.firstGame && !this.$store.state.gameOn
        },
        firstGame () {
          return this.$store.state.firstGame
        },
        difference () {
          return this.cash - 100
        },
        green () {
          return this.difference > 0
        }
      },
      filters: {
        toDollars (str) {
          str = str.toFixed(2)
          return `$${str}`
        }
      }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2em;
    }
    .red {
      color: red;
    }
    .green {
      color: green;
    }
</style>
