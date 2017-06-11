import Vue from 'vue'
import Vuex from 'vuex'
const COUNTER_SET = 12

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startingCash: 100,
    countStartDefault: COUNTER_SET,
    gameOn: false,
    firstGame: true,
    game: {
      apples: 0,
      pears: 0,
      oranges: 0,
      bananas: 0,
      pearPrice: 5,
      applePrice: 5,
      orangePrice: 5,
      bananaPrice: 5,
      transactions: [],
      prices: [],
      count: COUNTER_SET,
      cash: 100
    },
    games: []
  },
  mutations: {
    gameOnToggle (state) {
      state.gameOn = !state.gameOn
    },
    firstGameToggle (state) {
      state.firstGame = false
    },
    changeApples (state, payload) {
      state.game.apples += payload
    },
    zeroApples (state) {
      state.game.apples = 0
    },
    changePears (state, payload) {
      state.game.pears += payload
    },
    zeroPears (state) {
      state.game.pears = 0
    },
    changeOranges (state, payload) {
      state.game.oranges += payload
    },
    zeroOranges (state) {
      state.game.oranges = 0
    },
    changeBananas (state, payload) {
      state.game.bananas += payload
    },
    zeroBananas (state) {
      state.game.bananas = 0
    },
    endGame (state, payload) {
      state.games.push(payload)
    },
    gameReset (state, payload) {
      state.game = payload
    },
    changeApplePrice (state) {
      let sign = ((Math.random()) <= 0.5) ? -1 : 1
      let rand = parseFloat((Math.random() * sign).toFixed(2))
      let currentPrice = state.game.applePrice

      let out = ((currentPrice + rand) <= 0) ? (currentPrice + (rand *= -1)) : (currentPrice + rand)
      state.game.applePrice = out
    },
    changePearPrice (state) {
      let sign = ((Math.random()) <= 0.5) ? -1 : 1
      let rand = parseFloat((Math.random() * sign).toFixed(2))
      let currentPrice = state.game.pearPrice

      let out = ((currentPrice + rand) <= 0) ? (currentPrice + (rand *= -1)) : (currentPrice + rand)
      state.game.pearPrice = out
    },
    changeOrangePrice (state) {
      let sign = ((Math.random()) <= 0.5) ? -1 : 1
      let rand = parseFloat((Math.random() * sign).toFixed(2))
      let currentPrice = state.game.orangePrice

      let out = ((currentPrice + rand) <= 0) ? (currentPrice + (rand *= -1)) : (currentPrice + rand)
      state.game.orangePrice = out
    },
    changeBananaPrice (state) {
      let sign = ((Math.random()) <= 0.5) ? -1 : 1
      let rand = parseFloat((Math.random() * sign).toFixed(2))
      let currentPrice = state.game.bananaPrice

      let out = ((currentPrice + rand) <= 0) ? (currentPrice + (rand *= -1)) : (currentPrice + rand)
      state.game.bananaPrice = out
    },
    changeCash (state, payload) {
      let cash = state.game.cash
      let out = ((cash + payload) < 0) ? cash : (cash + payload)

      state.game.cash = parseFloat(out.toFixed(2))
    },
    pushPrices (state, payload) {
      state.game.prices.push(payload)
    },
    countDown (state) {
      state.game.count--
    },
    countReset (state) {
      state.count = state.countStartDefault
    }
  },
  actions: {
    test (context) {}
  }
})
