<template>
  <div class="text-left">
    <router-link :to="`/movie/${movie.id}`">
      <img class="hover:opacity-75 trantision duration-150" :src="ImgPath"/>
    </router-link>
      <div class="mx-2 mt-2">
        <h3>{{movie.title}}</h3>
        <div class="flex">
          <svg   xmlns="http://www.w3.org/2000/svg" class="text-yellow-500 fill-current h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span class="ml-1"> {{movie.vote_average * 10}}% | {{movie.release_date}}</span>
          <br/>
        </div>
        <div class="break-all">
          <span class="text-sm text-gray-500" v-for="(genre,i) in movie.genre_ids" :key="i">{{genreName(genre,i)}}</span>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  name: 'MovieItem',
  components:{

  },
  props:{
    movie:{
      type:[Object],
      default:() => {}
    },
    genres:{
      type:[Object,Array],
    }
  },
  computed:{
    ImgPath(){
      return "https://image.tmdb.org/t/p/w500/" + this.movie.backdrop_path
    }
  },
  methods:{
    genreName(genre,index){
      for ( const item of this.genres){
       if(item.id == genre){
         if(this.movie.genre_ids.length - 1 == index){
           return item.name
         }else {
           return item.name + ","
         }

       }
      }
    }
  }
}
</script>
