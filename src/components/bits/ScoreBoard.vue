<template>
    <div class="container">
        <div class="score">
        <h1>Scoreboard</h1>
        Cash: {{cash}}
        </div>
        <div class="timer">
            <countdown-timer></countdown-timer>
        </div>
    </div>
</template>

<script>
    import CountdownTimer from './CountdownTimer.vue'
    export default {
      components: {
        CountdownTimer
      },
      computed: {
        cash () {
          return this.$store.state.game.cash
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
</style>
