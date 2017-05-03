<template>

  <div class="app">
    <source-filter></source-filter>
    <news-feed></news-feed>
  </div>

</template>

<script>

  import NewsFeed from './components/NewsFeed.vue'
  import Filter from './components/Filter.vue'

  export default {
    name: 'app',
    components: {
      'source-filter': Filter,
      'news-feed': NewsFeed
    }
  }

</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Roboto');

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #333;
  }

</style>
