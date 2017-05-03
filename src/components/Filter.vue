<template>

  <div class="filter">
    <h1>📰 News app</h1>
    <select @change="fetchNews" v-model="currentSource">
      <option 
        v-for="source in newsSources"
        :value="source.value">{{source.label}}</option>
    </select>
  </div>
</template>

<script>

  import { API_KEY } from '@/secret.js'

  const API_SOURCES_ENDPOINT = 'https://newsapi.org/v1/articles'

  export default {
    data () {
      return {
        dataIsFetching: false,
        currentSource: ''
      }
    },
    mounted () { // get all news sources
      this.$store.dispatch('fetchNewsSources')
    },
    computed: {
      newsSources () {
        return this.$store.getters.getSourcesMainData
      }
    },
    methods: {
      fetchNews (e) {
        this.dataIsFetching = true

        this.$store.commit({
          type: 'updateFeed',
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
              type: 'updateFeed',
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
      border-radius: 5px;
    }
  }

</style>
