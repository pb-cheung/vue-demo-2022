import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 公共状态
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...modules
  }
})

export default store
