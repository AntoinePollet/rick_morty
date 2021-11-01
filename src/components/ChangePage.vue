<template>
  <div class="wrap flex justify-center py-4">
    <div class="flex w-1/3 justify-between">
      <button @click="minusFive" :disabled="$route.params.id < 6">
        <font-awesome-icon :icon="['fas', 'angle-double-left']" />
      </button>
      <button @click="minusOne" :disabled="$route.params.id == 1">
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </button>
      <button >{{ $route.params.id }}</button>
      <button @click="plusOne" :disabled="$route.params.id == finalPage">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </button>
      <button @click="plusFive" :disabled="$route.params.id > (finalPage -5)">
        <font-awesome-icon :icon="['fas', 'angle-double-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'changePage',
  computed: {
    ...mapState({
      finalPage: state => state.info.pages
    })
  },
  methods: {
    doesPageExist(page) {
      return page >= this.finalPage ? this.finalPage : page;
    },
    minusOne() {
      this.$emit('previous-page', this.doesPageExist(this.$store.state.info.prev));
    },
    minusFive() {
      this.$emit('previous-page', this.doesPageExist(this.$store.state.info.prev-4));
    },
    plusOne() {
      this.$emit('next-page', this.doesPageExist(this.$store.state.info.next));
    },
    plusFive() {
      this.$emit('next-page', this.doesPageExist(this.$store.state.info.next+4));
    }
  }
}
</script>
