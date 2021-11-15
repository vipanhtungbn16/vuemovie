<template>
  <div class="">
        <router-link :to="`/actor/${actor.id}`">
          <img class=" object-cover"  v-lazy="ImgPath(actor)"/>
        </router-link>
        <h3 class="pt-4">{{actor.name}}</h3>
        <p class="text-sm text-left text-gray-500 mt-2 w-4/5	">{{handleDes(actor.known_for)}}</p>
  </div>
</template>

<script>


export default {
  name: 'Actor',
  props:{
    actor:{
      type:[Array,Object]
    },

  },
  methods:{
    ImgPath(item){
      if(item.profile_path){
        return "https://image.tmdb.org/t/p/w300_and_h300_face" + item.profile_path
      }else {
        return "https://via.placeholder.com/300x300"
      }
    },
    handleDes(array){
      let des = array.map(item => item.title).join(",")
      return des
    }
  },

}
</script>
