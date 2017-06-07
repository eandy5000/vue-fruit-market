<template>
    <div>
        <ul>
            <li>Apples Owned: {{applesOwned}}</li>
            <li>Apples Bought: {{applesBought}}</li>
            <li>Apples Sold: {{applesSold}}</li>
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
        }
      },
      created () {}
    }
</script>

<style>
    ul {
        list-style: none;
    }
</style>
