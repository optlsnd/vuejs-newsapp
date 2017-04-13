<template>
  <div class="app">
    <notifications></notifications>
    <div class="header">
      <div>
        <source-filter></source-filter>
      </div>
    </div>
    <news-feed></news-feed>
  </div>
</template>

<script>

import NewsFeed from './components/NewsFeed.vue'
import Filter from './components/Filter.vue'
import Notifications from './components/Notifications.vue' // TODO: make notifications

export default {
  name: 'app',
  components: {
    'source-filter': Filter,
    'news-feed': NewsFeed,
    'notifications': Notifications
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

body {
  font-family: Helvetica, Arial, sans-serif;
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
