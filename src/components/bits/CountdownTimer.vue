<template>
    <div>
        {{count}}
        <button v-if="!gameOn && count < 1" @click="restart">Play Again</button>
        <button v-else-if="gameOn">Game in Progress</button>
        <button v-else v-on:click="countDown">Play</button>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          countStart: 3,
          count: 3,
          gameTemplate () {
            return {
              apples: 0,
              pears: 0,
              oranges: 0,
              bananas: 0,
              pearPrice: 5,
              applePrice: 5,
              orangePrice: 5,
              bananaPrice: 5
            }
          }
        }
      },
      computed: {
        gameOn () {
          return this.$store.state.gameOn
        },
        games () {
          return this.$store.state.games
        },
        game () {
          return this.$store.state.game
        }
      },
      methods: {
        countDown () {
          this.$store.commit('gameOnToggle')
          const setInt = setInterval(() => {
            this.count--
            if (this.count < 1) {
              clearInterval(setInt)
              this.$store.commit('gameOnToggle')
              this.$store.commit('gameReset', this.gameTemplate())
              this.$store.commit('endGame', this.game)
              console.log('games ', this.games)
            }
          }, 1000)
        },
        restart () {
          this.count = this.countStart
          this.countDown()
        }
      },
      created () {
        console.log(this.games)
      }
    }
</script>

<style>
    
</style>
