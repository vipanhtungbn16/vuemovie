<template>
  <div class="border-b border-gray-500 navbar p-4 flex justify-between  items-center">
    <div class="navbar__logo flex items-center">
      <Logo class="navbar__icon"></Logo>
      <router-link to="/" class="navbar__name ml-1 font-bold text-xl">VueMovie</router-link>
    </div>
    <ul class="navbar__list flex justify-between items-center ">
      <li class="navbar-item ml-5">
        <router-link to="">
          Movies
        </router-link>
      </li>
      <li class="navbar-item ml-5">
        <router-link to="/actor">
          Actors
        </router-link>
      </li>
      <li class="navbar-item ml-5">
        <router-link to="">
          Profile
        </router-link>
      </li>
      <SearchBar></SearchBar>
      <UserDrop></UserDrop>
    </ul>

  </div>
</template>
<script>
import Logo from "@/assets/icon/62-film-outline.svg"
import SearchBar from "./SearchBar";
import UserDrop from "./UserDrop";
export default {
  name:'NavBar',
  components:{
    Logo,
    SearchBar,
    UserDrop
  }
}
</script>
<style scoped lang="scss">
  .navbar__icon{
    width: 50px;
    height: 50px;
  }
</style>
