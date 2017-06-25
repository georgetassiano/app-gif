import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lista: []
}

const mutations = {
  SET_LISTA (state, lista) {
    state.lista = lista
  }
}

export default new Vuex.Store({
  state,
  mutations
})
