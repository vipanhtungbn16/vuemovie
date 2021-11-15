<template>
  <div>
    <div v-if="!isLoading" class="text-left flex container mx-auto mt-20 pb-20 border-b border-gray-600">
      <img class=" w-64 h-80 object-contain" v-lazy="ImgPath"/>
      <div class="ml-24 ">
        <h1 class="text-4xl font-semibold">{{movie.title}}</h1>
        <span class="text-sm text-gray-500 mt-3 inline-flex" >
        <svg   xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 mr-1 fill-current h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        {{movie.vote_average * 10}}% | {{movie.release_date}} &nbsp;<span class="text-sm text-gray-500" v-for="(item,i) in movie.genres" :key="i">{{
                item.name}}
          <span v-if="movie.genres.length - 1 != i">,</span>
        </span>
        </span>


        <p class="mt-5">
         {{movie.overview}}
        </p>
        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>
          <div class="flex">
            <div v-for="(item,y) in crew" :key="y">
              <div v-if="y < 2" class="mt-5 flex flex-col mr-5">
                <span>{{item.name}}</span>
                <span class="text-gray-500">{{item.job}}</span>
              </div>
            </div>

          </div>
        </div>
        <div class="mt-5 flex">
          <a :href="youtubeVideo" target="_blank" class="hover:opacity-75 trantision duration-150 rounded py-3 mr-3 px-5 inline-flex bg-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="ml-3"> Play Trailer</span>
          </a>
          <a href="#" class="hover:opacity-75 trantision duration-150 rounded py-3 px-8  inline-flex bg-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span class="ml-3"> Favorite</span>
          </a>
        </div>
      </div>
    </div>
    <InfoMovie v-else></InfoMovie>
    <Cast :cast ="cast"  ></Cast>
  </div>
</template>

<script>
import Cast from "../components/Cast";
import InfoMovie from "../components/skeleton/InfoMovie";

export default {
  name: 'Movie',
  components: {
    Cast,
    InfoMovie
  },
  data(){
   return{
     movie:{},
     cast:[],
     crew:[],
     isLoading:false
   }
  },
  mounted() {
    this.fetchMovie(this.$route.params.id)
  },
  computed:{
    ImgPath(){
      if(this.movie && this.movie.backdrop_path){
        return "https://image.tmdb.org/t/p/w500/" + this.movie.backdrop_path
      }else {
        return "https://via.placeholder.com/300x470"
      }

    },
    youtubeVideo(){
      if(this.movie.videos && this.movie.videos.results.length > 0 ){
        return "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      }else {
        return ""
      }
    }
  },
  methods:{
    async fetchMovie(id){
      this.isLoading = true
      try {
        const res = await this.$http.get(`/movie/${id}?api_key=f5eb55f0df7e37b424bc20bf652f483a&append_to_response=videos`)
        const result = await this.$http.get(`/movie/${id}/credits?api_key=f5eb55f0df7e37b424bc20bf652f483a`)
        this.movie = res.data
        this.cast = result.data.cast
        this.crew = result.data.crew
        this.isLoading = false
      }catch (e){
        console.log(e)
      }
    },
  },
  watch: {
    '$route.params.id': {
      handler: function(id) {
       this.fetchMovie(id)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
