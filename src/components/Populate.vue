<template>
  <div class="mx-5 popultate">
    <h2 class="mt-5 text-lg font-semibold text-left text-yellow-500 uppercase">popular movies</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <MovieItem v-for="(movie,i) in movies" :key="i" :movie="movie" :genres="genres" ></MovieItem>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieItem from "./items/MovieItem";

export default {
  name: 'Populate',
  components: {
    MovieItem
  },
  data(){
    return{
      movies:[],
      genres:[]
    }
  },
  async mounted() {
    this.fetchGenres()
    try {
      const res = await this.$http.get("/movie/popular?api_key=f5eb55f0df7e37b424bc20bf652f483a")
      this.movies = res.data.results
    }catch (e) {
      console.log(e)
    }
  },

  methods:{
   async fetchGenres(){
     try {
       let res = await this.$http.get("/genre/movie/list?api_key=f5eb55f0df7e37b424bc20bf652f483a")
       this.genres = res.data.genres
     }catch (e) {
       console.log(e)
     }
    }
  }
}
</script>
