<template>
  <div class="post">
    <h2> #{{ index + 1 }} {{ post.title }} </h2>
    <h4> {{ post.author }}</h4>
    <p> {{ post.description }} </p>
    <img :src="post.urlToImage" :alt="post.title">
    <a class="btn" :href="post.url" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i> Read more</a>
    <a class="btn" :href="post.url" target="_blank"><i class="fa fa-clock-o" aria-hidden="true"></i></a>
    <a class="btn" :href="post.url" target="_blank"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
  </div>
</template>

<script>
  export default {
    props: ['post', 'index']
  }
</script>

<style scoped>

h2, h4, p {
  margin: 0 auto .5em;
}

.btn {
  display: inline-block;
  /*width: 150px;*/
  margin: .5rem auto 0;
  /*font-size: 1.25em;*/
  /*font-weight: 600;*/
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  padding: .75em;
  background-color: #0000ff;
  transition: all .15s ease-in-out;
}

.btn:hover {
  background-color: #333333;
}

img {
  width: 100%;
  background-color: pink;
  margin: .5em auto;
}

.post {
  margin: 0 auto 2em;
  padding: 1rem;
  width: 700px;
  border-left: .25em solid #0000ff;  
  transition: all .25s ease-in-out;
}

.post:hover {
  border-color: #ff0000;
}
  
</style>
