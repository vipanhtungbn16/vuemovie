import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  getters:{
    getLoading: state => {
      return state.loading;
    }
  },
  actions: {
  },
  modules: {
  }
})
