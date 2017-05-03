<template>
  <div class="post">
    <div class="post-image" :style="{backgroundImage: 'url(' + post.urlToImage + ')'}">
      <!--<img :src="post.urlToImage" :alt="post.title">      -->
    </div>
    <div class="post-text-content">
      <h4><a :href="post.url" target="_blank">{{ post.title }}</a></h4>
      <h5> {{ post.author }}</h5>
      <p> {{ post.description }} </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['post', 'index']
  }
</script>

<style lang="scss" scoped>

h4, h5, p {
  margin: 0;
  margin-bottom: .5rem;
  &:last-child {
    margin-bottom: 0;
  }
}

.post {
  display: flex;
  margin: 0 1rem .5em;
  padding: 1rem;
  max-width: 600px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
}

.post-image {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  // border-radius: 50%;
  margin-right: 1rem;
}

.post-text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  white-space: initial;
  cursor: default;
  a {
    color: #00ccff;
  }
}
  
</style>
