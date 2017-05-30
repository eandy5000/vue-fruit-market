<template>
    <div class="container">
    
    <fruit-container
      name="Apple"
      :image="apple"
      :counter="appleCount"
      :addFruit="buyApples"
      :subFruit="sellApples"
    ></fruit-container>
    
    <fruit-container
      name="Pear"
      :image="pear"
      :counter="pearCount"
      :addFruit="buyPears"
      :subFruit="sellPears"
    ></fruit-container>
    
    <fruit-container
      name="Orange"
      :image="orange"
      :counter="orangeCount"
      :addFruit="buyOranges"
      :subFruit="sellOranges"
    ></fruit-container>
    
    <fruit-container
      name="Bananas"
      :image="bananas"
      :counter="bananaCount"
      :addFruit="buyBananas"
      :subFruit="sellBananas"
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
          return this.$store.state.apples
        },
        pearCount () {
          return this.$store.state.pears
        },
        orangeCount () {
          return this.$store.state.oranges
        },
        bananaCount () {
          return this.$store.state.bananas
        }
      }
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
