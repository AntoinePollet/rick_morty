import { createStore } from 'vuex'
//import gql from "graphql-tag";

export default createStore({
  state: {
    page: 1,
    info: {},
    characters: {}
  },
  mutations: {
    GET_PAGE(state, res) {
      state.info = res.info;
      state.characters = res.results;
    }
  },
  actions: {
    async getPage(context, res) {
      context.commit('GET_PAGE', res);
    }
  },
  modules: {
  }
})
