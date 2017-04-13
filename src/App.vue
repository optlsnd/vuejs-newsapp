<template>
  <div id="app">
    <div class="header">
      <div>
        <source-filter @newsFetched="showNews"></source-filter>
      </div>
    </div>
    <news-feed :news="currentFeed"></news-feed>
  </div>
</template>

<script>

import NewsFeed from './components/NewsFeed'
import Filter from './components/Filter'

export default {
  name: 'app',
  data () {
    return {
      currentFeed: [], // текущая лента новостей
      readLaterFeed: [] // сюда складываем посты, которые можно будет прочитать позже
    }
  },
  components: {
    'source-filter': Filter,
    'news-feed': NewsFeed
  },
  methods: { // вернуться сюда
    showNews (news) {
      this.currentFeed = []
      news.forEach(
        post => this.currentFeed.push(post)
      )
    }
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
