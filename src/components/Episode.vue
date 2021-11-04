<template>
  <div>
    <div class="w-1/3" v-for="episode in episodes" :key="episode.id">
      {{episode.name}}
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
  }
}
</script>