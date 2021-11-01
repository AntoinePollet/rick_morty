<template>
  <div v-for="character in characters" :key="character.id">
    {{character.name}}
    {{character.species}}
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'Characters',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  }
}
</script>