import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newsSources: [],
    currentNewsFeed: []
  },
  actions: {
    fetchNewsSources ({commit}) {
      Vue.http.get('https://newsapi.org/v1/sources?language=en')
        .then(
          response => {
            commit({
              type: 'updateSources',
              data: response.body.sources
            })
          },
          error => {
            console.log(error)
          })
    }
  },
  getters: {
    getSourcesMainData: state => {
      return state.newsSources.map(source => ({value: source.id, label: source.name}))
    }
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
