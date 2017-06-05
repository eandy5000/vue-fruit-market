<template>
    <div class="container">
        <p>Transactions: {{transactions}}</p>
        <ul>
            <h4>Apples</h4>
            <li>Final {{finalPrices.apples | toDollars}}</li>
            <li>High {{highApplePrice | toDollars}}</li>
            <li>Low {{lowApplePrice | toDollars}}</li>
        </ul>
    </div>
</template>

<script>
    import filters from '../../util/filters.js'
    export default {
      computed: {
        transactions () {
          return this.$store.state.game.transactions.length
        },
        prices () {
          return this.$store.state.game.prices
        },
        finalPrices () {
          let last = this.prices.length - 1
          return this.prices[last]
        },
        highApplePrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'apples')
          return pricer.reduce(this.maxReduce)
        },
        lowApplePrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'apples')
          return pricer.reduce(this.minReduce)
        }
      },
      created () {},
      methods: {
        mapFruit (arr, fruit) {
          return arr.map(item => item[fruit])
        },
        maxReduce (total, item) {
          return Math.max(total, item)
        },
        minReduce (total, item) {
          return Math.min(total, item)
        }
      },
      filters
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }
    ul {
        list-style: none;
    }
</style>
