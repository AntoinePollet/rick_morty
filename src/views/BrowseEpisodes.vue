<template>
  <div>
    <Episode @open-dialog="openDialog"></Episode>
    <EpisodeInfosModal :dialog="dialog" :episode="episode" @close-dialog="closeDialog"></EpisodeInfosModal>
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
      dialog: false,
      episode: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.$store.dispatch('episodes')
    })
  },
  computed: {
    ...mapState({
      episodes: state => state.episodes
    })
  },
  methods: {
    closeDialog(bool) {
      this.dialog = bool
    },
    openDialog(episode) {
      this.dialog = true;
      this.episode = episode
    }
  }
}
</script>
