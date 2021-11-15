<template>
  <div class="container mx-auto">
    <h2 class="mt-5 px-4 text-lg font-semibold text-left text-yellow-500 uppercase">Upcoming movies</h2>
    <Carousel3d
        :controls-visible="true"
        :clickable ="false"
        :listData ="upcoming"
        :key="upcoming.length"
        :height="500"
    >
        <Slide :index="i" v-for="(slide,i) in upcoming" :key="i">
          <figure>
            <img :src="ImgPath(slide)">
            <figcaption>
              <router-link :to="`movie/${slide.id}`">
                {{slide.title}}
              </router-link>

            </figcaption>
          </figure>

        </Slide>
      </Carousel3d>
  </div>
</template>
<script>
import {Carousel3d,Slide} from "vue-carousel-3d"
export default {
  name:'Upcoming',
  data(){
    return{
      upcoming:[]
    }
  },
  components:{
    Carousel3d,Slide
  },
  mounted() {
    this.fetchUpcoming()
  },
  methods:{
    async fetchUpcoming(){
      try {
        let res = await this.$http.get(`movie/upcoming?api_key=f5eb55f0df7e37b424bc20bf652f483a`)
        this.upcoming = res.data.results.slice(1,6)
        console.log(this.upcoming)

      }catch (e) {
        console.log(e)
      }
    },
    ImgPath(item){
      if(item.poster_path){
        return "https://image.tmdb.org/t/p/w300" + item.poster_path
      }else {
        return "https://via.placeholder.com/300x300"
      }
    },
  }
}
</script>
<style>
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>