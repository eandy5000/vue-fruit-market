<template>
    <div>
        <ul>
            <li>Apples Owned: {{applesOwned}}</li>
            <li>Apples Bought: {{applesBought}}</li>
            <li>Apples Sold: {{applesSold}}</li>
        </ul>
         <ul>
            <li>Pears Owned: {{pearsOwned}}</li>
            <li>Pears Bought: {{pearsBought}}</li>
            <li>Pears Sold: {{pearsSold}}</li>
        </ul>
         <ul>
            <li>Oranges Owned: {{orangesOwned}}</li>
            <li>Oranges Bought: {{orangesBought}}</li>
            <li>Oranges Sold: {{orangesSold}}</li>
        </ul>
         <ul>
            <li>Bananas Owned: {{bananasOwned}}</li>
            <li>Bananas Bought: {{bananasBought}}</li>
            <li>Bananas Sold: {{bananasSold}}</li>
        </ul>
    </div>
</template>

<script>
    import filters from '../../util/filters.js'
    export default {
      filters,
      computed: {
        prices () {
          return this.$store.state.game.prices
        },
        transactions () {
          return this.$store.state.game.transactions
        },
        applesOwned () {
          return this.$store.state.game.apples
        },
        applesBought () {
          return this.transactions.filter(item => {
            return item.fruit === 'Apple' && item.type === 'buy'
          }).length
        },
        applesSold () {
          return this.transactions.filter(item => {
            return item.fruit === 'Apple' && item.type === 'sell'
          }).length
        },
        pearsOwned () {
          return this.$store.state.game.pears
        },
        pearsBought () {
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
        orangesBought () {
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
        bananasBought () {
          return this.transactions.filter(item => {
            return item.fruit === 'Banana' && item.type === 'buy'
          }).length
        },
        bananasSold () {
          return this.transactions.filter(item => {
            return item.fruit === 'Banana' && item.type === 'sell'
          }).length
        }
      },
      created () {
        console.log(this.transactions)
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
</style>
