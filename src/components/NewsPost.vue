<template>
  <div class="post">
    <div class="post-image">
      <img :src="post.urlToImage" :alt="post.title" :href="post.url">      
    </div>
    <div class="post-text-content">
      <h4><a :href="post.url" target="_blank">{{ post.title }}</a></h4>
      <h5> {{ post.author }}</h5>
      <p> {{ post.description }} </p>
      <!--<a class="btn" :href="post.url" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i> Read more</a>-->
    </div>
  </div>
</template>

<script>
  export default {
    props: ['post', 'index']
  }
</script>

<style scoped>

h4, h5, p {
  margin: 0;
}

.btn {
  display: inline-block;
  width: 130px;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  padding: .5em;
  background-color: #0000ff;
  transition: all .15s ease-in-out;
}

.btn:hover {
  background-color: #333333;
}

img {
  width: 100%;
  /*background-color: pink;*/
}

.post {
  display: flex;
  margin: 0 auto .5em;
  padding: 1rem 0;
  width: 600px;
}

.post-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  margin-right: .5rem;
}

.post-text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
}
  
</style>
