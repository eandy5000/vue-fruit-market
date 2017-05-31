<template>
    <div>
        <h3>{{name}}</h3>
        <img :src="image" />
        <h5>Inventory: {{counter}}</h5>
        <h5>Price: {{fruitPrice | dollar}}</h5>
        <button v-if="gameOn" @click="addFruit()">Buy</button>
        <button v-if="gameOn" @click="subFruit()">Sell</button>
    </div>
</template>

<script>
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
