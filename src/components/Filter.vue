<template>

<div class="filter">
  <h1>📰 News app</h1>
  <select @change="fetchNews" v-model="currentSource">
    <option 
      v-for="source in newsSources"
      :value="source.value"
      >{{source.label}}</option>
  </select>
</div>

</template>

<script>

import { EventBus } from '@/event-bus.js'
import { API_KEY } from '@/secret.js'

const API_SOURCES_ENDPOINT = 'https://newsapi.org/v1/articles'

export default {
  data () {
    return {
      dataIsFetching: false,
      currentSource: ''
    }
  },
  beforeCreate () { // get all news sources
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(
        response => {
          this.$store.commit({ // update store
            type: 'UPDATE_SOURCES',
            data: response.body.sources
          })
          EventBus.$emit('notify', 'News sources refreshed!') // send messge to global event bus
        },
        error => {
          console.log(error)
          EventBus.$emit('notify', 'Could not get news sources')
        })
  },
  computed: {
    newsSources () {
      return this.$store.state.newsSources
        .map(source => ({value: source.id, label: source.name}))
    }
  },
  methods: {
    fetchNews (e) {
      this.dataIsFetching = true

      this.$store.commit({
        type: 'UPDATE_FEED',
        data: {}
      })

      this.$http.get(API_SOURCES_ENDPOINT, {
        params: {
          apiKey: API_KEY,
          source: this.currentSource
        }
      }).then(
        response => {
          this.$store.commit({
            type: 'UPDATE_FEED',
            data: response.body.articles
          })
          this.dataIsFetching = false
          window.scrollTo(0, 0)
        },
        error => {
          console.log(error)
          this.dataIsFetching = false
        })
    }
  }
}

</script>

<style lang="scss" scoped>

.filter {
  padding: 1em 1em 0 1em;
  width: 100%;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
  h1 {
    margin: 0 0 1rem;
    text-transform: uppercase;
    text-align: center;
  }
  select {
    display: block;
    width: 400px;
    margin: 1rem auto;
    padding: .5em;
    font-size: 1rem;
    outline: none;
  }
}

</style>
