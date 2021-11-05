<template>
  <div class="w-screen h-screen fixed p-12">
    <div v-if="dialog" class="flex justify-center w-10/12 p-5 bg-white border-r-4 fixed top-0">
      <p>Epiosde Name</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  }
}
</script>