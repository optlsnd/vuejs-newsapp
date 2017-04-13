<template>

<div class="filter">
  <span>News from</span>
  <select @change="fetchNews">
    <option 
      v-for="source in newsSources"
      :value="source.id">
      {{ source.name }}
    </option>  
  </select>
</div>

</template>

<script>

import { EventBus } from './event_bus/event-bus.js'

const API_KEY = 'b7923a8ad9474270873932efd37d90b0'
const API_SOURCES_ENDPOINT = 'https://newsapi.org/v1/articles'

export default {
  data () {
    return {
      dataIsFetching: false
    }
  },
  beforeCreate () { // get all news sources
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(
        response => {
          this.$store.commit({ // update store
            type: 'updateSources',
            sources: response.body.sources
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
    }
  },
  methods: {
    fetchNews (e) {
      this.dataIsFetching = true
      this.$http.get(API_SOURCES_ENDPOINT, {
        params: {
          apiKey: API_KEY,
          source: e.target.value
        }
      }).then(
        response => {
          this.$store.commit({
            type: 'updateFeed',
            news: response.body.articles
          })
          EventBus.$emit('notify', `News from ${e.target.value}`)
          this.dataIsFetching = false
          window.scrollTo(0, 0)
        },
        error => { // TODO: add warning to interface
          console.log(error)
          this.dataIsFetching = false
        })
    }
  }
}

</script>

<style scoped>

span {
  font-size: 1.5em;
  margin-right: 1em;
}

select {
  display: inline-block;
  font-size: 1.5em;
  outline: 0;
  margin: 1rem auto;
  padding: .25em;
}

.loading {
  margin: 1rem auto;
  text-align: center;
}

</style>
