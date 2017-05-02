<template>

<div class="newsfeed">
  <news-post 
    v-for="post, i in news"
    :post="post"
    :index="i"
    :key="i">
  </news-post> 
</div>

</template>

<script>

import NewsPost from './NewsPost'

export default {
  components: {
    'news-post': NewsPost
  },
  computed: {
    news () {
      return this.$store.state.currentNewsFeed
    }
  }
}

</script>

<style>

.newsfeed {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
