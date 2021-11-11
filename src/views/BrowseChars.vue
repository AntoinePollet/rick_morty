<template>
  <div class="browse-characters">
    <FilterByParams @characters-filter="charactersFilter"></FilterByParams>
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
  async created() {
    try {
      await this.$store.dispatch('charactersByPage', this.$route.params.id);
    }
    catch(err) {
      console.log(err)
    }
  },
  methods: {
    async charactersFilter(filter) {
      console.log(filter)
      await this.$store.dispatch('charactersFiltered', filter)
    },
    async nextPage() {
      const nextPage = parseInt(this.$route.params.id) +1
      await this.$store.dispatch('charactersByPage', nextPage);
      await this.$router.push({name: 'Characters', params: {id: nextPage}});
    },
    async nextPageJump() {
      const nextPageJump = parseInt(this.$route.params.id) +4
      await this.$store.dispatch('charactersByPage', nextPageJump);
      await this.$router.push({name: 'Characters', params: {id: nextPageJump}});
    },
    async previousPage() {
      const previousPage = parseInt(this.$route.params.id) -1
      await this.$store.dispatch('charactersByPage', previousPage);
      await this.$router.push({name: 'Characters', params: {id: previousPage}});
    },
    async previousPageJump() {
      const previousPageJump = parseInt(this.$route.params.id) -4
      await this.$store.dispatch('charactersByPage', previousPageJump);
      await this.$router.push({name: 'Characters', params: {id: previousPageJump}});
    },
  }
}
</script>
