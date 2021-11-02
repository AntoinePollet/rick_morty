<template>
  <div>
    <Character></Character>
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
import CHARACTER from "@/graphql/character";

export default {
  name: "CharacterInfos",
  components: {Character},
  data() {
    return {
      character: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.characterInfos(vm.$route.params.id)
    })
  },
  methods: {
    async characterInfos(id) {
      const res = await this.$apollo.query({
        query: CHARACTER,
        variables: {
          id: parseInt(id)
        },
        update: data => data.character
      })
      await this.$store.dispatch('characterInfos', res.data.character)
    }
  }
}
</script>

<style lang="scss">

</style>