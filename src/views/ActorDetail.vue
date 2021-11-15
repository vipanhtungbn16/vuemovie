<template>
  <div>
    <div class="container mx-auto px-4 py-16 flex justify-between border-b border-gray-500"  >
      <div>
        <img class="object-contain"  v-lazy="ImgPath(actor)"/>
      </div>
      <div class="text-left flex-1 px-20">
        <h2 class="font-semibold text-4xl">{{actor.name}}</h2>
        <div class="flex items-end mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
          </svg>
          <span class="text-gray-400 text-sm ml-1">{{actor.birthday}}</span>
        </div>
        <p class="mt-5">
          {{actor.biography}}
        </p>
        <h4 class="font-semibold mt-12">Know For</h4>
        <div  class="grid mt-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <div v-for="(item,j) in know_for" :key="j">
            <router-link :to="`/movie/${item.id}`">
              <img :src="MovieImg(item)"
                   alt="post"
                   class="hover:opacity-75 trantision duration-150 mt-1 object-cover"
              />
              <p class="mt-2 text-sm  text-gray-500">{{item.title}}</p>
            </router-link>

          </div>

        </div>
      </div>
    </div>
    <div class=" mx-auto container mt-10 px-4 py-4">
      <h2 class="text-3xl font-semibold text-left">Credits</h2>
      <ul class="list-disc text-left px-5 mt-5">
        <li class="tracking-wide" v-for="(item,i) in credits" :key="i">
          <span class="font-semibold">{{ item.release_date?item.release_date.substr(0,4):"??"}}.</span>{{item.title}}
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
export default {
  name:'ActorDetail',
  data(){
    return{
      actor:{},
      know_for:[],
      credits:[]
    }
  },
  mounted() {
  this.fetchActor(this.$route.params.id)
  this.fetchCredits(this.$route.params.id)
    },
  methods:{
    async fetchActor(id){
      try {
        let res = await this.$http.get(`/person/${id}?api_key=f5eb55f0df7e37b424bc20bf652f483a`)
        this.actor = res.data
      }catch (e) {
        console.log(e)
      }
    },
    ImgPath(item){
      if(item.profile_path){
        return "https://image.tmdb.org/t/p/w300" + item.profile_path
      }else {
        return "https://via.placeholder.com/300x300"
      }
    },
    MovieImg(movie){
      if(movie.poster_path){
        return "https://image.tmdb.org/t/p/w300_and_h300_face/" + movie.poster_path
      }else {
        return "https://via.placeholder.com/300x300"
      }
    },
    async fetchCredits(actorId){
      try {
        let res = await this.$http.get(`/person/${actorId}/movie_credits?api_key=f5eb55f0df7e37b424bc20bf652f483a`)
        this.know_for = res.data.cast.slice(1,6)
        this.credits = res.data.cast

      }catch (e) {
        console.log(e)
      }
    },
  }
}
</script>