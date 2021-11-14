<template>
  <FilterByParams @characters-filter="charactersFilter" @characters-reset="charactersReset"></FilterByParams>
  <div v-if="error">
    <p class="p-5 bg-red-300 rounded-xl text-red-700 font-medium text-xl mx-40 m-auto">No character(s) found with these filters, please try again with other ones</p>
  </div>
  <div v-else class="browse-characters">
    {{error}}
    <Characters></Characters>
    <ChangePage @previous-page="previousPage"
                @next-page="nextPage"
                @previous-page-jump="previousPageJump"
                @next-page-jump="nextPageJump"
    ></ChangePage>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Characters from "@/components/Characters";
import ChangePage from "@/components/ChangePage";
import FilterByParams from "@/components/FilterByParams";
export default {
  name: 'BrowseChars',
  components: {Characters, ChangePage, FilterByParams},
  data() {
    return {
      characters: {},
      error: ""
    }
  },
  async created() {
    try {
      await this.$store.dispatch('charactersFiltered', {
        filter: this.filter,  id: this.$route.params.id
      });
    }
    catch(err) {
      console.log(err)
    }
  },
  computed: {
    ...mapState({
      filter: state => state.filter
    })
  },
  methods: {
    async charactersFilter(payload) {
      try {
        await this.$store.dispatch('storeFilter', payload.filter);
        await this.$store.dispatch('charactersFiltered', {
          filter: payload.filter,  id: payload.id
        });
        this.error = "";
        await this.$router.push({name: 'Characters', params: {id: payload.id}});
      } catch (err) {
        this.error = err.message;
      }
    },
    async charactersReset() {
      await this.$store.dispatch('resetFilter');
      await this.$store.dispatch('charactersFiltered', {filter: {}, id: 1});
      await this.$router.push({name: 'Characters', params: {id: 1}});
    },
    async nextPage() {
      const nextPage = parseInt(this.$route.params.id) +1
      await this.$store.dispatch('charactersFiltered', {
        filter: this.filter,  id: nextPage
      });
      await this.$router.push({name: 'Characters', params: {id: nextPage}});
    },
    async nextPageJump() {
      const nextPageJump = parseInt(this.$route.params.id) +4
      await this.$store.dispatch('charactersFiltered', {
        filter: this.filter,  id: nextPageJump
      });
      await this.$router.push({name: 'Characters', params: {id: nextPageJump}});
    },
    async previousPage() {
      const previousPage = parseInt(this.$route.params.id) -1
      await this.$store.dispatch('charactersFiltered', {
        filter: this.filter,  id: previousPage
      });
      await this.$router.push({name: 'Characters', params: {id: previousPage}});
    },
    async previousPageJump() {
      const previousPageJump = parseInt(this.$route.params.id) -4
      await this.$store.dispatch('charactersFiltered', {
        filter: this.filter,  id: previousPageJump
      });
      await this.$router.push({name: 'Characters', params: {id: previousPageJump}});
    },
  }
}
</script>
