<template>
  <div class="wrap flex justify-center py-4">
    <div class="flex w-1/3 justify-between">
      <button>-5</button>
      <button @click="minusOne">-1</button>
      <button>{{ actualPage }}</button>
      <button @click="plusOne">+1</button>
      <button>+5</button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'changePage',
  computed: {
    ...mapState({
      actualPage: state => state.page
    })
  },
  methods: {
    minusOne() {
      this.$emit('previous-page', this.$store.state.info.prev)
    },
    plusOne() {
      this.$emit('next-page', this.$store.state.info.next)
    }
  }
}
</script>
