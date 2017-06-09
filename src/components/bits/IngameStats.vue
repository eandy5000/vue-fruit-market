<template>
    <div>
        <ul>
            <li>Apples Owned: {{applesOwned}}</li>
            <li>Apples Bought: {{applesBoughtCount}}</li>
            <li>Apples Sold: {{applesSoldCount}}</li>
        </ul>
         <ul>
            <li>Pears Owned: {{pearsOwned}}</li>
            <li>Pears Bought: {{pearsBoughtCount}}</li>
            <li>Pears Sold: {{pearsSold}}</li>
        </ul>
         <ul>
            <li>Oranges Owned: {{orangesOwned}}</li>
            <li>Oranges Bought: {{orangesBoughtCount}}</li>
            <li>Oranges Sold: {{orangesSold}}</li>
        </ul>
         <ul>
            <li>Bananas Owned: {{bananasOwned}}</li>
            <li>Bananas Bought: {{bananasBoughtCount}}</li>
            <li>Bananas Sold: {{bananasSold}}</li>
        </ul>
        <ul>
          <li><h3>Timer: {{count}}</h3></li>
          <li>
            <p><strong>Profit:</strong>
            <span
              :class="{green: profit > 0, red: profit < 0}"
            > {{cash - 100 | toDollars}}</span></p>
          </li>
          <li>
              <p><strong>Transactions:</strong> {{transactions.length}}</p>
          </li>
        </ul>
        <div class="stats">
         
          <p><strong>Profit:</strong>
          <span
            :class="{green: profit > 0, red: profit < 0}"
          > {{cash - 100 | toDollars}}</span></p>
          <p><strong>Transactions:</strong> {{transactions.length}}</p>
        </div>
    </div>
</template>

<script>
    import filters from '../../util/filters.js'
    import CountdownTimer from './CountdownTimer.vue'
    export default {
      filters,
      computed: {
        prices () {
          return this.$store.state.game.prices
        },
        count () {
          return this.$store.state.game.count
        },
        cash () {
          return this.$store.state.game.cash
        },
        transactions () {
          return this.$store.state.game.transactions
        },
        applesOwned () {
          return this.$store.state.game.apples
        },
        applesBought () {
          return this.transactions.filter(item => item.fruit === 'Apple' && item.type === 'buy')
        },
        applesSold () {
          return this.transactions.filter(item => item.fruit === 'Apple' && item.type === 'sold')
        },
        applesBoughtCount () {
          return this.transactions.filter(item => {
            return item.fruit === 'Apple' && item.type === 'buy'
          }).length
        },
        applesSoldCount () {
          return this.transactions.filter(item => {
            return item.fruit === 'Apple' && item.type === 'sell'
          }).length
        },
        pearsOwned () {
          return this.$store.state.game.pears
        },
        pearsBoughtCount () {
          return this.transactions.filter(item => {
            return item.fruit === 'Pear' && item.type === 'buy'
          }).length
        },
        pearsSold () {
          return this.transactions.filter(item => {
            return item.fruit === 'Pear' && item.type === 'sell'
          }).length
        },
        orangesOwned () {
          return this.$store.state.game.oranges
        },
        orangesBoughtCount () {
          return this.transactions.filter(item => {
            return item.fruit === 'Orange' && item.type === 'buy'
          }).length
        },
        orangesSold () {
          return this.transactions.filter(item => {
            return item.fruit === 'Orange' && item.type === 'sell'
          }).length
        },
        bananasOwned () {
          return this.$store.state.game.bananas
        },
        bananasBoughtCount () {
          return this.transactions.filter(item => {
            return item.fruit === 'Banana' && item.type === 'buy'
          }).length
        },
        bananasSold () {
          return this.transactions.filter(item => {
            return item.fruit === 'Banana' && item.type === 'sell'
          }).length
        },
        profit () {
          return this.cash - 100
        }
      },
      beforeUpdate () {},
      components: {
        CountdownTimer
      }
    }
</script>

<style scoped>
    div {
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
      color: red;
    }
</style>
