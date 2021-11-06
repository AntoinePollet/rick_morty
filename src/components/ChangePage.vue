<template>
  <div class="wrap flex justify-center py-4">
    <div class="flex justify-between">
      <button ref="minusFive" :class="[isDisabledMinusFive ? 'disabled' : 'switchPage']" @click="minusFive" :disabled="$route.params.id < 6">
        <font-awesome-icon :icon="['fas', 'angle-double-left']" />
      </button>
      <button ref="minusOne" @click="minusOne" :class="[isDisabledMinusOne ? 'disabled' : 'switchPage']" :disabled="$route.params.id == 1">
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </button>
      <button class="font-black bg-green-200 rounded-full border-none p-6 mx-2">{{ $route.params.id }}</button>
      <button ref="plusOne" :class="[isDisabledPlusOne ? 'disabled' : 'switchPage']" @click="plusOne" :disabled="$route.params.id == finalPage">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </button>
      <button ref="plusFive" :class="[isDisabledPlusFive ? 'disabled' : 'switchPage']" @click="plusFive" :disabled="$route.params.id > (finalPage -5)">
        <font-awesome-icon :icon="['fas', 'angle-double-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'changePage',
  data() {
    return {
      isDisabledMinusFive: null,
      isDisabledMinusOne: null,
      isDisabledPlusFive: null,
      isDisabledPlusOne: null
    }
  },
  mounted() {
    this.isDisabledMinusFive = !!this.$refs.minusFive?.attributes['disabled'];
    this.isDisabledMinusOne = !!this.$refs.minusOne?.attributes['disabled'];
    this.isDisabledPlusFive = !!this.$refs.plusFive?.attributes['disabled'];
    this.isDisabledPlusOne = !!this.$refs.plusOne?.attributes['disabled'];
  },
  computed: {
    ...mapState({
      finalPage: state => state.info.pages
    }),
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

<style lang="scss">
.switchPage {
  @apply bg-green-200 rounded-full cursor-pointer border-none p-6 mx-2 hover:bg-green-300
}
.disabled {
  @apply bg-green-100 rounded-full border-none p-6 mx-2
 }
</style>
