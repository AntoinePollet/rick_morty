<template>
  <div v-for="character in characters" :key="character.id">
    {{character.name}}
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
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('beforeROuterEnter char component', vm)
    })
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  }
}
</script>