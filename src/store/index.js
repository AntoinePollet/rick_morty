import { createStore } from 'vuex'
import { apolloClient } from '@/apollo'
import EPISODES_COUNT from "@/graphql/episodesCount";
import EPISODES from "@/graphql/episodes";
import CHARACTER from "@/graphql/character";
import CHARACTERS_FILTERED from "@/graphql/charactersFiltered";

export default createStore({
  state: {
    episodesCount: null,
    info: {},
    characters: {},
    character: {},
    episodes: {},
    filter: {
      name: "",
      gender: "",
      status: "",
      species: ""
    }
  },
  getters: {
    doesNextPageExist: (state) => {
      return !!state.info.next
    },
    doesNextPageExistTurbo: (state) => (page) => {
      return (state.info.count - ((page) * 20) > 80);
    }
  },
  mutations: {
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
    },
    STORE_FILTER(state, filter) {
      for(let [key, value] of Object.entries(filter)) {
        if(state.filter[key]) {
          state.filter[key] = value
        }
      }
    },
    RESET_FILTER(state) {
      for(let item in state.filter) {
        state.filter[item] = ""
      }
    },
    CHARACTERS_BY_PAGE(state, res) {
      state.info = res.info;
      state.characters = res.results;
    }
  },
  actions: {
    async getPage(context, res) {
      await context.commit('GET_PAGE', res);
    },
    async characterInfos({commit}, id) {
      const res = await apolloClient.query({
        query: CHARACTER,
        variables: {
          id: parseInt(id)
        }
      })
      commit('CHARACTER_INFOS', res.data.character)
    },
    async episodesCount({commit}) {
      const res = await apolloClient.query({
        query: EPISODES_COUNT
      })
      commit('EPISODES_COUNT', res.data.episodes.info)
    },
    async episodes({commit}) {
      const count = localStorage.getItem('episodesCount')
      let destructuredEpisodesCount = [];
      for(let i = 1; i <= count; i++) {
        destructuredEpisodesCount.push(i)
      }
      const res = await apolloClient.query({
        query: EPISODES,
        variables: {
          ids: destructuredEpisodesCount
        }
      })
      commit('EPISODES', res.data.episodesByIds);
    },
    async charactersFiltered({commit}, payload) {
      const res = await apolloClient.query({
        query: CHARACTERS_FILTERED,
        variables: {
          filter: payload.filter,
          page: parseInt(payload.id)
        }
      })
      commit('CHARACTERS_BY_PAGE', res.data.characters)
    },
    async storeFilter({commit}, filter) {
      commit('STORE_FILTER', filter);
    },
    async resetFilter({commit}) {
      commit('RESET_FILTER');
    }
  },
  modules: {
  }
})
