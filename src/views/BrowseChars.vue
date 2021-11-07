<template>
  <div class="browse-characters">
    <FilterByParams></FilterByParams>
    <Characters></Characters>
    <ChangePage @previous-page="previousPage"
                @next-page="nextPage"
                @previous-page-jump="previousPageJump"
                @next-page-jump="nextPageJump"
    ></ChangePage>
  </div>
</template>

<script>
import Characters from "@/components/Characters";
import ChangePage from "@/components/ChangePage";
import FilterByParams from "@/components/FilterByParams";
export default {
  name: 'BrowseChars',
  components: {Characters, ChangePage, FilterByParams},
  data() {
    return {
      characters: {},
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.$store.dispatch('CharactersByPage', vm.$route.params.id);
    })
  },
  methods: {
    async nextPage(page) {
      await this.$store.dispatch('CharactersByPage', page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
    async nextPageJump(page) {
      await this.$store.dispatch('CharactersByPage', page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
    async previousPage(page) {
      await this.$store.dispatch('CharactersByPage', page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
    async previousPageJump(page) {
      await this.$store.dispatch('CharactersByPage', page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
  }
}
</script>
