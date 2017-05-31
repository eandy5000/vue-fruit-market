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
      bananaPrice: 5,
      transactions: []
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
    },
    changeApplePrice (state) {
      let sign = (Math.random() <= 0.5) ? -1 : 1
      let rand = Math.random() * sign

      rand = ((state.game.applePrice + rand) <= 0) ? (rand * -1) : rand

      state.game.applePrice += rand
    },
    changePearPrice (state) {
      let sign = ((Math.random()) <= 0.5) ? -1 : 1
      let rand = Math.random() * sign
      if ((state.game.pearPrice + rand) < 0) {
        rand *= -1
      }
      state.game.pearPrice += rand
    },
    changeOrangePrice (state) {
      let sign = ((Math.random()) <= 0.5) ? -1 : 1
      let rand = (Math.random() * sign)

      if ((state.game.orangePrice += rand) < 0) {
        rand *= -1
      }
      state.game.orangePrice += rand
    },
    changeBananaPrice (state) {
      let sign = (Math.random() >= 0.5) ? -1 : 1
      let rand = Math.random() * sign

      if ((state.game.bananaPrice + rand) < 0) {
        rand = rand * (sign * -1)
      }
      state.game.bananaPrice += rand
    }
  },
  actions: {
    test (context) {}
  }
})
