import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameOn: false,
    game: {
      apples: 0,
      pears: 0,
      oranges: 0,
      bananas: 0,
      pearPrice: 5,
      applePrice: 5,
      orangePrice: 5,
      bananaPrice: 5
    },
    games: []
  },
  mutations: {
    gameOnToggle (state) {
      state.gameOn = !state.gameOn
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
    }
  },
  actions: {
    test (context) {}
  }
})
