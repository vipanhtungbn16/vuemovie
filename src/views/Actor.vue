<template>
  <div class="container mx-auto text-left px-4 py-16">
    <h2 class="text-yellow-500 text-lg font-semibold">POPULAR CAST</h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">

        <ActorItem v-for="(actor,i) in actors" :key="i" :actor="actor"></ActorItem>

    </div>
    <div v-if="isLoading" class="spinner mx-auto"></div>
  </div>
</template>

<script>
import ActorItem from "../components/items/ActorItem";
export default {
  data(){
    return{
      actors:[],
      currentPage:1,
      isLoading:false
    }
  },
  mounted() {
  this.fetchActor(this.currentPage)
    this.scroll()
    },
  components:{
    ActorItem
  },
  methods:{
    async fetchActor(page){
      try {
        let res = await this.$http.get(`/person/popular?api_key=f5eb55f0df7e37b424bc20bf652f483a&&page=${page}`)
        this.actors.push(...res.data.results)
        this.isLoading = false
      }catch (e) {
        console.log(e)
      }
    },
    scroll(){
      window.onscroll = () =>{
        let isBottom = document.documentElement.scrollTop + window.innerHeight == document.documentElement.offsetHeight
        if(isBottom){
          this.isLoading = true
          this.currentPage += 1
          this.fetchActor(this.currentPage)
        }
      }
    }

  }
}
</script>