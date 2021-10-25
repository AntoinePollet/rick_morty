<template>
  <div class="wrap flex justify-center py-4">
    <div class="flex w-1/3 justify-between">
      <button @click="minusFive" :disabled="$route.params.id < 6">-5</button>
      <button @click="minusOne" :disabled="$route.params.id == 1">-1</button>
      <button >{{ $route.params.id }}</button>
      <button @click="plusOne" :disabled="$route.params.id == finalPage">+1</button>
      <button @click="plusFive" :disabled="$route.params.id > (finalPage -5)">+5</button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'changePage',
  computed: {
    ...mapState({
      actualPage: state => state.page,
      finalPage: state => state.info.pages
    })
  },
  methods: {
    doesPageExist(page) {
      return page >= this.finalPage ? this.finalPage : page
    },
    minusOne() {
      this.$emit('previous-page', this.doesPageExist(this.$store.state.info.prev))
    },
    minusFive() {
      this.$emit('previous-page', this.doesPageExist(this.$store.state.info.prev-4))
    },
    plusOne() {
      this.$emit('next-page', this.doesPageExist(this.$store.state.info.next))
    },
    plusFive() {
      this.$emit('next-page', this.doesPageExist(this.$store.state.info.next+4))
    }
  }
}
</script>
