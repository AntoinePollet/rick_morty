<template>
  <div>
    <Character></Character>
  </div>
</template>

<script>
import Character from "@/components/Character.vue";

export default {
  name: "CharacterInfos",
  components: {Character},
  data() {
    return {
      character: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.$store.dispatch('characterInfos',vm.$route.params.id)
    })
  },
  async beforeRouteUpdate(to, from, next) {
    await this.$store.dispatch('characterInfos', to.params.id)
    next()
  },
}
</script>

<style lang="scss">

</style>