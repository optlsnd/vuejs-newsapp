import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newsSources: [],
    currentNewsFeed: []
  },
  mutations: {
    UPDATE_SOURCES (state, payload) {
      state.newsSources = [...payload.data]
    },
    UPDATE_FEED (state, payload) {
      state.currentNewsFeed = [...payload.data]
    }
  }
})
