<template>
  <div v-if="loading" class="mt-72">
    <pulse-loader></pulse-loader>
  </div>
  <div v-else>
    <Episode @open-dialog="openDialog"></Episode>
    <EpisodeInfosModal :dialog="dialog" :episode="episode" @close-dialog="closeDialog"></EpisodeInfosModal>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import {mapState} from "vuex";
import Episode from '@/components/Episode'
import EpisodeInfosModal from "@/components/EpisodeInfosModal"

export default {
  name: 'BrowseEpisodes',
  components: {Episode, EpisodeInfosModal, PulseLoader},
  data() {
    return {
      dialog: false,
      episode: {},
      loading: true
    }
  },
  async created() {
    try {
      await this.$store.dispatch('episodes');
      this.loading = false;
    }
    catch(err) {
      console.log(err)
    }
  },
  computed: {
    ...mapState({
      episodes: state => state.episodes
    })
  },
  methods: {
    closeDialog(bool) {
      document.body.style.overflowY = "visible";
      this.dialog = bool
    },
    openDialog(episode) {
      document.body.style.overflowY = "hidden";
      this.dialog = true;
      this.episode = episode
    }
  }
}
</script>
