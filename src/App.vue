<template>
  <div class="app">
    <source-filter></source-filter>
    <news-feed></news-feed>
  </div>
</template>

<script>

import NewsFeed from './components/NewsFeed.vue'
import Filter from './components/Filter.vue'
import Notifications from './components/Notifications.vue'

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

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #6aafd8;
  color: #ffffff;
}

</style>
