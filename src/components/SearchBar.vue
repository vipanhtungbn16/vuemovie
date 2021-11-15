<template>
  <div class="search__bar flex ml-5 relative">
    <input @focus="handleFocus" @input="handleSearch" type="text" class="focus:outline-none rounded-full bg-gray-600 mr-3 h-10 px-9" placeholder="Search..."/>
      <div class="absolute">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-3 ml-3  text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <div v-if="isLoading" class="spinner absolute right-9"></div>
      <div v-if="searchResult.length != 0" class=" z-10 absolute mt-12 ml-1 rounded bg-gray-600 w-60  ">
        <ul v-for="(item,i) in searchResult" :key="i" class="">
          <li @click="handle" class=" hover:bg-gray-700 trantision duration-150 ease text-left py-1 px-1  border-b border-gray-500">
            <router-link class="flex items-center" :to="{
              name:'Movie',
              params:{
                id:item.id
              }
            }">
              <img class=" w-16 h-14   object-cover" :src="ImgPath(item)"/>
              <span class="ml-3">{{item.title}}</span>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>



export default {
  name: 'SearchBar',
  components: {

  },
  data(){
    return{
      searchResult:[],
      timeOut:null,
      isLoading:false
    }
  },
  mounted() {
    this.handlePress()
  },
  methods:{
    async fetchResult(value){
      try {
        const res = await this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=f5eb55f0df7e37b424bc20bf652f483a&query=${value}`)
        this.searchResult = res.data.results
        this.isLoading = false
      }catch (e){
        console.log(e)
      }

    },
    handleFocus(e){
      this.handleSearch(e)
    },
    handlePress(){
      window.addEventListener("click",(e)=>{
        if(!this.$el.contains(e.target)){
          this.searchResult = []
        }
      })
    },
    handleSearch(event){
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(()=>{
        if(event.target.value ){
          this.fetchResult(event.target.value)
          this.isLoading = true
        }
      },300)
    },
    handle(){
      this.searchResult = []
    },
    ImgPath(item){
      if(item.backdrop_path){
        return "https://image.tmdb.org/t/p/w500" + item.backdrop_path
      }else {
        return "https://via.placeholder.com/300x200"
      }
    }
  }
}
</script>
