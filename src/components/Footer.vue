<template>
  <footer class="bg-green-500 mt-10 sticky top-full">
    <p class="text-white p-10 font-medium text-lg">Copyright © {{getCurrentYear}} Antoine Pollet</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getCurrentYear() {
      const date = new Date()
      return date.getFullYear();
    }
  }
}
</script>