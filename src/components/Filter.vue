<template>

<div class="filter">
  <el-row>

  </el-row>

  <h1>News app</h1>
  
  <el-select 
    v-model="currentSource"
    @change="fetchNews"
    placeholder="Select news source">
    <el-option 
      v-for="source in newsSources" 
      :value="source.id" 
      :label="source.name">
    </el-option>
  </el-select>

</div>

</template>

<script>

import { EventBus } from '@/event-bus.js'

const API_KEY = 'b7923a8ad9474270873932efd37d90b0'
const API_SOURCES_ENDPOINT = 'https://newsapi.org/v1/articles'

export default {
  data () {
    return {
      dataIsFetching: false,
      counter: 0,
      currentSource: ''
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
      this.$store.commit({
        type: 'updateFeed',
        news: {}
      })
      this.dataIsFetching = true
      this.$http.get(API_SOURCES_ENDPOINT, {
        params: {
          apiKey: API_KEY,
          source: this.currentSource
        }
      }).then(
        response => {
          this.$store.commit({
            type: 'updateFeed',
            news: response.body.articles
          })
          EventBus.$emit('notify', `News from ${this.currentSource}`)
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

.filter {
  padding: 1em;
}

h1 {
  margin: 0 0 1rem;
}

span {
  font-size: 1.5em;
  margin-right: 1em;
}

</style>
