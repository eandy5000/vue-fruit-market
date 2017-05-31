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
          orange
        }
      },
      components: {
        FruitContainer
      },
      methods: {
        buyApples () {
          this.$store.commit('changeApples', 1)
        },
        sellApples () {
          if ((this.$store.state.apples - 1) < 0) {
            this.$store.commit('zeroApples')
          } else {
            this.$store.commit('changeApples', -1)
          }
        },
        buyPears () {
          this.$store.commit('changePears', 1)
        },
        sellPears () {
          if (this.pearCount - 1 < 0) {
            this.$store.commit('zeroPears')
          } else {
            this.$store.commit('changePears', -1)
          }
        },
        buyOranges () {
          this.$store.commit('changeOranges', 1)
        },
        sellOranges () {
          if (this.orangeCount - 1 < 0) {
            this.$store.commit('zeroOranges')
          } else {
            this.$store.commit('changeOranges', -1)
          }
        },
        buyBananas () {
          this.$store.commit('changeBananas', 1)
        },
        sellBananas () {
          if (this.bananaCount - 1 < 0) {
            this.$store.commit('zeroBananas')
          } else {
            this.$store.commit('changeBananas', -1)
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
