<template>
    <div>
        {{count}}
        <button v-if="!gameOn && count === 0" @click="restart">Play Again</button>
        <button v-else-if="gameOn">Game in Progress</button>
        <button v-else v-on:click="countDown">Play</button>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          countStart: 5,
          count: 5
        }
      },
      computed: {
        gameOn () {
          return this.$store.state.gameOn
        }
      },
      methods: {
        countDown () {
          this.$store.commit('gameOnToggle')
          const setInt = setInterval(() => {
            this.count--
            if (this.count === 0) {
              clearInterval(setInt)
              this.$store.commit('gameOnToggle')
            }
          }, 1000)
        },
        restart () {
          this.count = this.countStart
          this.countDown()
        }
      }
    }
</script>

<style>
    
</style>
