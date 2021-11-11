<template>
  <div class="wrap flex justify-center py-4">
    <div class="flex justify-between">
      <button ref="minusFive" class="switchPage disabled:opacity-50" @click="minusFive" :disabled="$route.params.id < 6">
        <font-awesome-icon :icon="['fas', 'angle-double-left']" />
      </button>
      <button ref="minusOne" @click="minusOne" class="switchPage disabled:opacity-50" :disabled="$route.params.id == 1">
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </button>
      <button class="font-black bg-green-200 rounded-full border-none p-6 mx-2">{{ $route.params.id }}</button>
      <button ref="plusOne" class="switchPage disabled:opacity-50" @click="plusOne" :disabled="$route.params.id == finalPage">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </button>
      <button ref="plusFive" class="switchPage disabled:opacity-50" @click="plusFive" :disabled="!doesNextPageExistTurbo(parseInt(this.$route.params.id))">
        <font-awesome-icon :icon="['fas', 'angle-double-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
  name: 'changePage',
  computed: {
    ...mapState({
      finalPage: state => state.info.pages,
      nextPage: state => state.info.next
    }),
    ...mapGetters({
      doesNextPageExistTurbo: 'doesNextPageExistTurbo'
    })
  },
  methods: {
    minusOne() {
      this.$emit('previous-page');
    },
    minusFive() {
      this.$emit('previous-page-jump');
    },
    plusOne() {
      this.$emit('next-page');
    },
    plusFive() {
      this.$emit('next-page-jump');
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
