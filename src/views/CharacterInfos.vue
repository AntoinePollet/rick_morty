<template>
  <clip-loader v-if="loading" class="mt-40"></clip-loader>
  <div v-else>
    <Character></Character>
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue"
export default {
  name: "CharacterInfos",
  components: {Character, ClipLoader},
  data() {
    return {
      loading: true
    }
  },
  async created() {
    try {
      await this.$store.dispatch('characterInfos', this.$route.params.id);
      this.loading = false;
    } catch(err) {
      console.log(err)
    }

  },
  async beforeRouteUpdate(to, from, next) {
    await this.$store.dispatch('characterInfos', to.params.id);
    next();
  },
}
</script>

<style lang="scss">

</style>