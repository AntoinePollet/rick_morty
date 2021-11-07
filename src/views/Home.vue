<template>
  <div class="flex flex-col justify-center sm:w-2/3 md:w-1/2 m-auto">
    <h1 class="my-2">
     RICK & MORTY
    </h1>
    <p>
      Welcome to the rick & morty web application that allows you to discover characters that you may
      have missed in Rick and Morty, to filter them by gender, names and more !
    </p>
    <div class="browse flex flex-col">
      <router-link :to="{name: 'Characters', params: {id: 1}}">Browse Characters</router-link>
      <router-link :to="{name: 'Episodes'}">Browse Episodes</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.$store.dispatch('episodesCount')
    })
  },
}
</script>
