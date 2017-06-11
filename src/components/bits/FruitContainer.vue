<template>
    <div>
        <h3>{{name}}</h3>
        <img :src="image" />
        <h5>Inventory: {{counter}}</h5>
        <h5>Price: {{fruitPrice | dollar}}</h5>
        <game-button :logic="gameOn" text="BUY" :func="addFruit"></game-button>
        <game-button :logic="gameOn" text="SELL" :func="subFruit"></game-button>
    </div>
</template>

<script>
    import GameButton from './GameButton.vue'
    export default {
      props: ['name', 'image', 'counter', 'addFruit', 'subFruit', 'fruitPrice'],
      methods: {},
      filters: {
        dollar (number) {
          return `$${number.toFixed(2)}`
        }
      },
      computed: {
        gameOn () {
          return this.$store.state.gameOn
        }
      },
      components: {
        GameButton
      }
    }
</script>

<style scoped>
    div {
        border: .1em solid black;
        border-radius: 1em;
        padding: 1em 2em;
    }
</style>
