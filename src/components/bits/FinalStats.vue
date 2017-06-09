<template>
    <div>
        <p><strong>Transactions:</strong> {{transactions.length}}</p>
        <div class="container">
        <ul>
            <h4>Apples</h4>
            <li>Final {{finalPrices.apples | toDollars}}</li>
            <li>High {{highApplePrice | toDollars}}</li>
            <li>Low {{lowApplePrice | toDollars}}</li>
            <li v-if="applesBought > 0">
              Profit <span 
                        :class="{green: applesProfit > 0, red: applesProfit < 0}"
                     >{{applesProfit | toDollars}}</span>
            </li>
        </ul>
         <ul>
            <h4>Pears</h4>
            <li>Final {{finalPrices.pears | toDollars}}</li>
            <li>High {{highPearPrice | toDollars}}</li>
            <li>Low {{lowPearPrice | toDollars}}</li>
            <li v-if="pearsBought > 0">
              Profit <span 
                        :class="{green: pearsProfit > 0, red: pearsProfit < 0}"
                     >{{pearsProfit | toDollars}}</span>
            </li>
        </ul>
        <ul>
            <h4>Oranges</h4>
            <li>Final {{finalPrices.oranges | toDollars}}</li>
            <li>High {{highOrangePrice | toDollars}}</li>
            <li>Low {{lowOrangePrice | toDollars}}</li>
            <li v-if="orangesBought > 0">
              Profit <span 
                        :class="{green: orangesProfit > 0, red: orangesProfit < 0}"
                     >{{orangesProfit | toDollars}}</span>
            </li>
        </ul>
        <ul>
            <h4>Bananas</h4>
            <li>Final {{finalPrices.bananas | toDollars}}</li>
            <li>High {{highBananaPrice | toDollars}}</li>
            <li>Low {{lowBananaPrice | toDollars}}</li>
            <li v-if="bananasBought > 0">
              Profit <span 
                        :class="{green: bananasProfit > 0, red: bananasProfit < 0}"
                     >{{bananasProfit | toDollars}}</span>
            </li>
        </ul>
        <ul>
          <h4>Cash: <span class="norm">{{cash | toDollars}}</span></h4>
          <li>
            <p><strong>Profit:</strong>
            <span
              :class="{green: profit > 0, red: profit < 0}"
            > {{cash - 100 | toDollars}}</span></p>
            <p><strong>Transactions:</strong> {{transactions.length}}</p>
          </li>
        </ul>
        </div>
    </div>
</template>

<script>
    import filters from '../../util/filters.js'
    export default {
      computed: {
        transactions () {
          return this.$store.state.game.transactions
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
        applesBought () {
          return this.transactions.filter(item => item.fruit === 'Apple' && item.type === 'buy').length
        },
        applesProfit () {
          let bought = this.transactions.filter(item => item.fruit === 'Apple' && item.type === 'buy')
                                        .reduce((agg, item) => agg + item.price, 0)
          let sold = this.transactions.filter(item => item.fruit === 'Apple' && item.type === 'sell')
                                      .reduce((agg, item) => agg + item.price, 0)
          return sold - bought
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
        pearsBought () {
          return this.transactions.filter(item => item.fruit === 'Pear' && item.type === 'buy').length
        },
        pearsProfit () {
          let bought = this.transactions.filter(item => item.fruit === 'Pear' && item.type === 'buy')
                                        .reduce((agg, item) => agg + item.price, 0)
          let sold = this.transactions.filter(item => item.fruit === 'Pear' && item.type === 'sell')
                                      .reduce((agg, item) => agg + item.price, 0)
          return sold - bought
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
        orangesBought () {
          return this.transactions.filter(item => item.fruit === 'Orange' && item.type === 'buy').length
        },
        orangesProfit () {
          let bought = this.transactions.filter(item => item.fruit === 'Orange' && item.type === 'buy')
                                        .reduce((agg, item) => agg + item.price, 0)
          let sold = this.transactions.filter(item => item.fruit === 'Orange' && item.type === 'sell')
                                      .reduce((agg, item) => agg + item.price, 0)
          return sold - bought
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
        },
        bananasBought () {
          return this.transactions.filter(item => item.fruit === 'Banana' && item.type === 'buy').length
        },
        bananasProfit () {
          let bought = this.transactions.filter(item => item.fruit === 'Banana' && item.type === 'buy')
                                        .reduce((agg, item) => agg + item.price, 0)
          let sold = this.transactions.filter(item => item.fruit === 'Banana' && item.type === 'sell')
                                      .reduce((agg, item) => agg + item.price, 0)
          return sold - bought
        },
        cash () {
          return this.$store.state.game.cash
        },
        profit () {
          return this.cash - 100
        },
        count () {
          return this.$store.state.game.count
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
    .stats {
      display: inline-block;
    }
    .green {
      color: green;
    }
    .red {
      color: red
    }
    .norm {
      font-weight: normal;
    }
</style>
