<template>

<div class="filter">
  <span>News from</span>
  <select @change="fetchNews">
    <option 
      v-for="resource in newsResources"
      :value="resource.id">
      {{ resource.name }}
    </option>  
  </select>
</div>

</template>

<script>

const API_KEY = 'b7923a8ad9474270873932efd37d90b0'

export default {
  data () {
    return {
      newsResources: [],
      dataIsFetching: false
    }
  },
  computed: {
    test () {
      return this.$store.state.test
    }
  },
  beforeCreate () { // get all news sources
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(
        response => {
          response.body.sources.forEach(
            resource => {
              this.newsResources.push({
                name: resource.name,
                id: resource.id
              })
            })
        },
        error => {
          console.log(error)
        })
  },
  methods: {
    fetchNews (e) {
      this.dataIsFetching = true
      this.$http.get('https://newsapi.org/v1/articles', {
        params: {
          apiKey: API_KEY,
          source: e.target.value
        }
      }).then(
        response => {
          this.$emit('newsFetched', response.body.articles)
          this.dataIsFetching = false
          window.scrollTo(0, 0)
        },
        error => {
          console.log(error)
          this.dataIsFetching = false
        })
    }
  }
}

</script>

<style scoped>

span {
  font-size: 1.5em;
  margin-right: 1em;
}

select {
  display: inline-block;
  font-size: 1.5em;
  outline: 0;
  margin: 1rem auto;
  padding: .25em;
}

.loading {
  margin: 1rem auto;
  text-align: center;
}

</style>
