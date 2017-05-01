import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newsSources: [],
    currentNewsFeed: []
  },
  mutations: {
    updateSources (state, payload) {
      state.newsSources = [...payload.data]
    },
    updateFeed (state, payload) {
      state.currentNewsFeed = [...payload.data]
    }
  }
})
