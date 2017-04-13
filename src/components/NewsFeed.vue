<template>

<div class="newsfeed">
  <news-post v-for="post, i in news" :post="post" :index="i" :key="i"></news-post> 
</div>

</template>

<script>

import NewsPost from './NewsPost'

export default {
  props: ['news'],
  components: {
    'news-post': NewsPost
  }
}

</script>
