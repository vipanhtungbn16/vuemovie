<template>
  <div class="mx-auto container" id="app">
    <ProcessBar></ProcessBar>
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import ProcessBar from "./components/ProcessBar";
export default {
  components:{
    Navbar,
    ProcessBar
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  
}
</style>
