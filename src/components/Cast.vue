<template>
  <div class=" mx-auto container mt-10">
      <h2 class="text-4xl font-semibold text-left">Cast</h2>
      <div  class="grid mb-5 mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <div  v-for="(item,i) in cast" :key="i" class="text-left">
          <router-link :to="`/actor/${item.id}`">
            <img class=" object-cover" v-lazy="ImgPath(item)">
            <span class="text-left text-gray-500 mt-2">{{item.original_name}}</span>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Cast',
  props:{
    cast:{
      type:[Array,Object]
    },

  },
  methods:{
    ImgPath(item){
      if(item.profile_path){
        return "https://image.tmdb.org/t/p/w500" + item.profile_path
      }else {
        return "https://via.placeholder.com/300x470"
      }
    }
  },

}
</script>
