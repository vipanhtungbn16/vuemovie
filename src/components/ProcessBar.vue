<template>
  <vue-topprogress :speed="250" ref="topProgress"></vue-topprogress>
</template>

<script>
import { vueTopprogress } from 'vue-top-progress'
import { mapGetters } from "vuex";
export default {
  name: 'ProcessBar',
  components: {
    vueTopprogress
  },
  computed: {
    ...mapGetters([
      'getLoading'
    ]),
  },
  watch: {
    getLoading: function (val) {
      if (val) {
        this.$refs.topProgress.start()
      } else {
        this.$refs.topProgress.done()
      }
    }
  }
}
</script>
