import { createStore } from 'vuex'

export default createStore({
  state: {
    page: 1,
    info: {},
    characters: {},
    character: {}
  },
  mutations: {
    GET_PAGE(state, res) {
      state.info = res.info;
      state.characters = res.results;
    },
    CHARACTER_INFOS(state, res) {
      state.character = res
    }
  },
  actions: {
    async getPage(context, res) {
      await context.commit('GET_PAGE', res);
    },
    async characterInfos({commit}, res) {
      await commit('CHARACTER_INFOS', res)
    }
  },
  modules: {
  }
})
