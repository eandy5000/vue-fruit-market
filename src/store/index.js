import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameOn: false,
    apples: 0,
    pears: 0,
    oranges: 0,
    bananas: 0
  },
  mutations: {
    gameOnToggle (state) {
      state.gameOn = !state.gameOn
    },
    changeApples (state, payload) {
      state.apples += payload
    },
    zeroApples (state) {
      state.apples = 0
    },
    changePears (state, payload) {
      state.pears += payload
    },
    zeroPears (state) {
      state.pears = 0
    },
    changeOranges (state, payload) {
      state.oranges += payload
    },
    zeroOranges (state) {
      state.oranges = 0
    },
    changeBananas (state, payload) {
      state.bananas += payload
    },
    zeroBananas (state) {
      state.bananas = 0
    }
  }
})
