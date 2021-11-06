<template>
  <div>
    <Episode></Episode>
    <EpisodeInfosModal :dialog="dialog"></EpisodeInfosModal>
  </div>
</template>

<script>
import EPISODES from "@/graphql/episodes";
import {mapState} from "vuex";
import Episode from '@/components/Episode'
import EpisodeInfosModal from "@/components/EpisodeInfosModal"

export default {
  name: 'BrowseEpisodes',
  components: {Episode, EpisodeInfosModal},
  data() {
    return {
      dialog: false
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getEpisodes()
    })
  },
  computed: {
    ...mapState({
      episodes: state => state.episodes
    })
  },
  methods: {
    async getEpisodes() {
      const count = localStorage.getItem('episodesCount')
      let destructuredEpisodesCount = [];
      for(let i = 1; i <= count; i++) {
        destructuredEpisodesCount.push(i)
      }
      const res = await this.$apollo.query({
        query: EPISODES,
        variables: {
          ids: destructuredEpisodesCount
        }
      })

      await this.$store.dispatch('episodes', res.data)
    }
  }
}
</script>
