import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameOn: false
  },
  mutations: {
    gameOnToggle (state) {
      state.gameOn = !state.gameOn
    }
  }
})
