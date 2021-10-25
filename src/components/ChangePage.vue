<template>
  <div class="wrap flex justify-center py-4">
    <div class="flex w-1/3 justify-between">
      <button>-5</button>
      <button>-1</button>
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
    plusOne() {
      this.$emit('receive-id', 5)
    }
  }
}
</script>
