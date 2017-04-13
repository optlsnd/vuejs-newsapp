<template>
  <div id="app">
    <div class="header">
      <div>
        <source-filter></source-filter>
      </div>
    </div>
    <news-feed></news-feed>
  </div>
</template>

<script>

import NewsFeed from './components/NewsFeed'
import Filter from './components/Filter'

export default {
  name: 'app',
  beforeCreate () { // get all news sources
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(
        response => {
          this.$store.commit({ // update store
            type: 'updateSources',
            sources: response.body.sources
          })
        },
        error => {
          console.log(error)
        })
  },
  components: {
    'source-filter': Filter,
    'news-feed': NewsFeed
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #0000ff;
  color: #ffffff;
}

.header > div {
  text-align: center;
}

.filter {
  display: inline-block;
}

.newsfeed {
  margin-top: 6rem;
}

</style>
