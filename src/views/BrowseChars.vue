<template>
  <div class="browse-characters">
    <router-link to="/">Home</router-link>
    <Characters></Characters>
    <ChangePage @previous-page="previousPage" @next-page="nextPage"></ChangePage>
  </div>
</template>

<script>
import Characters from "@/components/Characters";
import ChangePage from "@/components/ChangePage";
import CHARACTERS from "@/graphql/characters";
import {mapState} from "vuex";
export default {
  name: 'BrowseChars',
  components: {Characters, ChangePage},
  data() {
    return {
      characters: {},
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getCharacters(vm.$route.params.id)
    })
  },
  computed: {
    ...mapState({
      page: state => state.page
    })
  },
  methods: {
    nextPage(page) {
      console.log('push to new url', page)
      this.getCharacters(page)
    },
    previousPage(page) {
      console.log('push to new url', page)
      this.getCharacters(page)
    },
    async getCharacters(page) {
      const res = await this.$apollo.query({
        query: CHARACTERS,
          variables:{
            page: parseInt(page)
          },
        update: data => data.characters
      })
      await this.$store.dispatch('getPage', res.data.characters)

    }
  }
}
</script>
