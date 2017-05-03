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
    align-items: flex-start;
    margin: 0 1rem .5em;
    padding: 1rem;
    width: 800px;
    background-color: #fff;
    color: #333;
    border: 1px solid #ddd;
    transition: box-shadow .5s ease;
    &:hover .post-image {
      border-radius: 0;
    }
    &:hover {
      box-shadow: -.25em 0 0 #00ccff;
    }
  }

  .post-image {
    flex: none;
    width: 150px;
    height: 150px;
    margin-right: 1rem;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    // &:hover {
    //   border-radius: 0;      
    // }
  }

  .post-text-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: initial;
    cursor: default;
    a {
      color: #00ccff;
    }
  }
  
</style>
