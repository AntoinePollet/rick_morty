<template>
  <Header></Header>
  <router-view class="min-h-screen" :key="$route.fullPath"/>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "App",
  components: {Header, Footer}
}
</script>
<style lang="scss">
*, *::after, *::before {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
