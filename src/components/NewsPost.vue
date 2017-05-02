<template>
  <div class="post">
    <div class="post-image">
      <img :src="post.urlToImage" :alt="post.title">      
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
}

.post {
  display: flex;
  margin: 0 1rem .5em;
  padding: 1rem;
  width: 600px;
  box-shadow: 0px 0px 3px 0 #aaa;
  transition: all .05s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 3px 0 #555;    
  }
}

.post-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  margin-right: 1rem;
  // background-color: #000;
  animation: appear 1s ease-in-out;
  animation-iteration-count: 1;
}

.post-text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
}

@keyframes appear {
  0% {
    background-color: #000;
  }
  99% {
    background-color: #fff;    
  }
  100% {
    background-color: transparent;
  }
}
  
</style>
