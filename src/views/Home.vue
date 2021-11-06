<template>
  <div class="home">
    <h1 class="text-left">
      Welcome, this web app allows you to discover characters that you may
      have missed in Rick and Morty, to filter them by gender, names and more !
    </h1>
    <div class="browse flex flex-col">
      <router-link :to="{name: 'Characters', params: {id: 1}}">Browse Characters</router-link>
      <router-link :to="{name: 'Episodes'}">Browse Episodes</router-link>
    </div>
  </div>
</template>

<script>
import EPISODES_COUNT from "@/graphql/episodesCount";

export default {
  name: 'Home',
  components: {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.episodesCount()
    })
  },
  methods: {
    async episodesCount() {
      const res = await this.$apollo.query({
        query: EPISODES_COUNT
      })
      this.$store.dispatch('episodesCount', res.data)
    }
  }
}
</script>
