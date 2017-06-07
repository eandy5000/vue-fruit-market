<template>
    <div class="container">
    
    <fruit-container
      name="Apple"
      :image="apple"
      :counter="appleCount"
      :addFruit="buyApples"
      :subFruit="sellApples"
      :fruitPrice="applePrice"
    ></fruit-container>
    
    <fruit-container
      name="Pear"
      :image="pear"
      :counter="pearCount"
      :addFruit="buyPears"
      :subFruit="sellPears"
      :fruitPrice="pearPrice"
    ></fruit-container>
    
    <fruit-container
      name="Orange"
      :image="orange"
      :counter="orangeCount"
      :addFruit="buyOranges"
      :subFruit="sellOranges"
      :fruitPrice="orangePrice"
    ></fruit-container>
    
    <fruit-container
      name="Bananas"
      :image="bananas"
      :counter="bananaCount"
      :addFruit="buyBananas"
      :subFruit="sellBananas"
      :fruitPrice="bananaPrice"
    ></fruit-container>
    </div>
</template>

<script>
    import pear from '../../assets/pear.png'
    import apple from '../../assets/apple.png'
    import bananas from '../../assets/bananas.png'
    import orange from '../../assets/orange.png'
    import FruitContainer from './FruitContainer.vue'
    export default {
      data () {
        return {
          pear,
          apple,
          bananas,
          orange,
          pearName: 'Pear',
          appleName: 'Apple',
          bananaName: 'Banana',
          orangeName: 'Orange'
        }
      },
      components: {
        FruitContainer
      },
      methods: {
        buyApples () {
          if (this.cash - this.applePrice < 0) {
            return
          } else {
            this.$store.commit('changeApples', 1)
            this.transactions.push({
              fruit: this.appleName,
              price: this.applePrice,
              type: 'buy'
            })
            this.$store.commit('changeCash', parseFloat(-this.applePrice.toFixed(2)))
            return
          }
        },
        sellApples () {
          if ((this.appleCount - 1) < 0) {
            this.$store.commit('zeroApples')
          } else {
            this.$store.commit('changeApples', -1)
            this.transactions.push({
              fruit: this.appleName,
              price: this.applePrice,
              type: 'sell'
            })
            this.$store.commit('changeCash', parseFloat(this.applePrice.toFixed(2)))
          }
        },
        buyPears () {
          if (this.cash - this.pearPrice < 0) {
            return
          } else {
            this.$store.commit('changePears', 1)
            this.transactions.push({
              fruit: this.pearName,
              price: this.pearPrice,
              type: 'buy'
            })
            this.$store.commit('changeCash', parseFloat(-this.pearPrice.toFixed(2)))
            return
          }
        },
        sellPears () {
          if ((this.pearCount - 1) < 0) {
            this.$store.commit('zeroPears')
          } else {
            this.$store.commit('changePears', -1)
            this.transactions.push({
              fruit: this.pearName,
              price: this.pearPrice,
              type: 'sell'
            })
            this.$store.commit('changeCash', parseFloat(this.pearPrice.toFixed(2)))
          }
        },
        buyOranges () {
          if (this.cash - this.orangePrice < 0) {
            return
          } else {
            this.$store.commit('changeOranges', 1)
            this.transactions.push({
              fruit: this.orangeName,
              price: this.orangePrice,
              type: 'buy'
            })
            this.$store.commit('changeCash', parseFloat(-this.orangePrice.toFixed(2)))
            return
          }
        },
        sellOranges () {
          if ((this.orangeCount - 1) < 0) {
            this.$store.commit('zeroOranges')
          } else {
            this.$store.commit('changeOranges', -1)
            this.transactions.push({
              fruit: this.orangeName,
              price: this.orangePrice,
              type: 'sell'
            })
            this.$store.commit('changeCash', parseFloat(this.orangePrice.toFixed(2)))
          }
        },
        buyBananas () {
          if (this.cash - this.bananaPrice < 0) {
            return
          } else {
            this.$store.commit('changeBananas', 1)
            this.transactions.push({
              fruit: this.bananaName,
              price: this.bananaPrice,
              type: 'buy'
            })
            this.$store.commit('changeCash', parseFloat(-this.bananaPrice.toFixed(2)))
            return
          }
        },
        sellBananas () {
          if ((this.bananaCount - 1) < 0) {
            this.$store.commit('zeroBananas')
          } else {
            this.$store.commit('changeBananas', -1)
            this.transactions.push({
              fruit: this.bananaName,
              price: this.bananaPrice,
              type: 'sell'
            })
            this.$store.commit('changeCash', parseFloat(this.bananaPrice.toFixed(2)))
          }
        }
      },
      computed: {
        appleCount () {
          return this.$store.state.game.apples
        },
        pearCount () {
          return this.$store.state.game.pears
        },
        orangeCount () {
          return this.$store.state.game.oranges
        },
        bananaCount () {
          return this.$store.state.game.bananas
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
        transactions () {
          return this.$store.state.game.transactions
        },
        cash () {
          return this.$store.state.game.cash
        }
      },
      created () {}
    }
</script>

<style scoped>
    .container {
      display: flex;
      justify-content: space-around;
    }
    .fruit {
      border: 1px solid black;
      border-radius: 1em;
      padding: 3em;
    }
</style> 
