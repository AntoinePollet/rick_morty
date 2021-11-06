import { createStore } from 'vuex'

export default createStore({
  state: {
    page: 1,
    episodesCount: null,
    info: {},
    characters: {},
    character: {},
    episodes: {}
  },
  mutations: {
    GET_PAGE(state, res) {
      state.info = res.info;
      state.characters = res.results;
    },
    CHARACTER_INFOS(state, res) {
      state.character = res
    },
    EPISODES_COUNT(state, res) {
      state.episodesCount = res.count
      localStorage.setItem('episodesCount', res.count)
    },
    EPISODES(state, res) {
      state.episodes = res
    },
    CHARACTERS_FILTERED(state, res) {
      state.info = res.info;
      state.characters = res.results;
    }
  },
  actions: {
    async getPage(context, res) {
      await context.commit('GET_PAGE', res);
    },
    async characterInfos({commit}, res) {
      await commit('CHARACTER_INFOS', res)
    },
    episodesCount({commit}, res) {
      commit('EPISODES_COUNT', res.episodes.info)
    },
    episodes({commit}, res) {
      commit('EPISODES', res.episodesByIds)
    },
    charactersFiltered({commit}, res) {
      console.log(res);
      commit('CHARACTERS_FILTERED', res)
    }
  },
  modules: {
  }
})
