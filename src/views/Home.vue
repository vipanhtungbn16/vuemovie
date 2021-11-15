<template>
  <div class="home mx-auto container">
    <upcoming></upcoming>
    <Populate></Populate>
  </div>
</template>

<script>
// @ is an alias to /src
import Populate from "../components/Populate";
import Upcoming from "../components/Upcoming";

export default {
  name: 'Home',
  components: {
    Populate,
    Upcoming
  }
}
</script>
