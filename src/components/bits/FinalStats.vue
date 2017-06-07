<template>
    <div>
        <p><strong>Transactions:</strong> {{transactions}}</p>
        <div class="container">
        <ul>
            <h4>Apples</h4>
            <li>Final {{finalPrices.apples | toDollars}}</li>
            <li>High {{highApplePrice | toDollars}}</li>
            <li>Low {{lowApplePrice | toDollars}}</li>
        </ul>
         <ul>
            <h4>Pears</h4>
            <li>Final {{finalPrices.pears | toDollars}}</li>
            <li>High {{highPearPrice | toDollars}}</li>
            <li>Low {{lowPearPrice | toDollars}}</li>
        </ul>
        <ul>
            <h4>Oranges</h4>
            <li>Final {{finalPrices.oranges | toDollars}}</li>
            <li>High {{highOrangePrice | toDollars}}</li>
            <li>Low {{lowOrangePrice | toDollars}}</li>
        </ul>
        <ul>
            <h4>Bananas</h4>
            <li>Final {{finalPrices.bananas | toDollars}}</li>
            <li>High {{highBananaPrice | toDollars}}</li>
            <li>Low {{lowBananaPrice | toDollars}}</li>
        </ul>
        </div>
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
        },
        highPearPrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'pears')
          return pricer.reduce(this.maxReduce)
        },
        lowPearPrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'pears')
          return pricer.reduce(this.minReduce)
        },
        highOrangePrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'oranges')
          return pricer.reduce(this.maxReduce)
        },
        lowOrangePrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'oranges')
          return pricer.reduce(this.minReduce)
        },
        highBananaPrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'bananas')
          return pricer.reduce(this.maxReduce)
        },
        lowBananaPrice () {
          let pricer = this.prices
          pricer = this.mapFruit(pricer, 'bananas')
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
    }
    ul {
        list-style: none;
    }
</style>
