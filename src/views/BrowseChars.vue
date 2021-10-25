<template>
  <div class="browse-characters">
    <router-link to="/">Home</router-link>
    <Characters></Characters>
    <ChangePage @receive-id="receiveId"></ChangePage>
  </div>
</template>

<script>
import Characters from "@/components/Characters";
import ChangePage from "@/components/ChangePage";
import gql from 'graphql-tag'
export default {
  name: 'BrowseChars',
  components: {Characters, ChangePage},
  data() {
    return {
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouterEnter')
    next(async vm => {
      const res = await vm.$apollo.query({query: gql`query getCharactersByPage($page: Int!){
          characters(page: $page) {
            info {
              pages
              count
              next
              prev
            },
            results {
              id
              name
              image
              status
              species
              origin {
                id
                name
                dimension
              }
            }
          }
        }`,
        variables: {
            page: parseInt(vm.$route.params.id)
        }
      })
      await vm.$store.dispatch('getPage', res.data.characters)
    })
  },
  methods: {
    receiveId(id) {
      this.$router.push({name: 'Characters', params: {id: id}})
    }
  }
}
</script>
