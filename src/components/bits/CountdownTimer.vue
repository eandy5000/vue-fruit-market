<template>
    <div>
        <h1>{{count}}</h1>
        <button v-if="!gameOn && count < 1" @click="restart">Play Again</button>
        <button v-else-if="gameOn">Game in Progress</button>
        <button v-else v-on:click="countDown">Play</button>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          countStart: 15,
          count: 15,
          gameTemplate () {
            return {
              apples: 0,
              pears: 0,
              oranges: 0,
              bananas: 0,
              pearPrice: 5,
              applePrice: 5,
              orangePrice: 5,
              bananaPrice: 5,
              transactions: [],
              prices: [],
              cash: 100
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
        },
        applePrice () {
          return this.$store.state.game.applePrice
        },
        pearPrice () {
          return this.$store.state.game.pearPrice
        },
        orangePrice () {
          return this.$store.state.game.orangePrice
        },
        bananaPrice () {
          return this.$store.state.game.bananaPrice
        },
        prices () {
          return this.$store.state.game.prices
        },
        firstGame () {
          return this.$store.state.firstGame
        }
      },
      methods: {
        countDown () {
          if (this.firstGame) {
            this.$store.commit('firstGameToggle')
          }
          this.$store.commit('gameOnToggle')
          const setInt = setInterval(() => {
            this.count--
            if (this.count < 1) {
              clearInterval(setInt)
              this.$store.commit('gameOnToggle')
              this.$store.commit('endGame', this.game)
            }
            if (this.count !== 0) {
              this.$store.commit('changeApplePrice')
              this.$store.commit('changePearPrice')
              this.$store.commit('changeOrangePrice')
              this.$store.commit('changeBananaPrice')
              this.$store.commit('pushPrices', {
                apples: this.applePrice,
                pears: this.pearPrice,
                oranges: this.orangePrice,
                bananas: this.bananaPrice
              })
            }
          }, 1000)
        },
        restart () {
          this.count = this.countStart
          this.$store.commit('gameReset', Object.assign({}, this.gameTemplate()))
          this.countDown()
        },
        getFinalPrice () {
          let final = this.prices.length - 1
          return this.prices[final]
        }
      },
      created () {}
    }
</script>

<style>
    
</style>
