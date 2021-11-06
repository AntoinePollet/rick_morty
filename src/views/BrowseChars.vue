<template>
  <div class="browse-characters">
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
import CHARACTERS from "@/graphql/characters";
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
      vm.getCharacters(vm.$route.params.id);
    })
  },
  methods: {
    nextPage(page) {
      this.getCharacters(page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
    nextPageJump(page) {
      this.getCharacters(page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
    previousPage(page) {
      this.getCharacters(page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
    previousPageJump(page) {
      this.getCharacters(page);
      this.$router.push({name: 'Characters', params: {id: page}});
    },
    async getCharacters(page) {
      const res = await this.$apollo.query({
        query: CHARACTERS,
        variables:{
          page: parseInt(page)
        },
        update: data => data.characters
      })
      await this.$store.dispatch('getPage', res.data.characters);
    }
  }
}
</script>
