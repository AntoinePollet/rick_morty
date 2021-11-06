<template>
  <div>
    <div @click="openDialog(episode)" class="text-left p-4 bg-opacity-75 bg-green-200 even:bg-green-50 hover:bg-opacity-100 cursor-pointer " v-for="episode in episodes" :key="episode.id">
      <p>{{episode.episode}} - {{episode.name}}</p>
      <p>{{episode.air_date}}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Episode',
  computed: {
    ...mapState({
      episodes: state => state.episodes
    })
  },
  methods: {
    openDialog(episode) {
      this.$emit('open-dialog', episode);
    }
  }
}
</script>