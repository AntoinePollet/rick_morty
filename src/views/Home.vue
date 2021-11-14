<template>
  <div class="flex flex-col mx-20 m-auto justify-center lg:mx-40 xl:mx-60 2xl:mx-80">
    <h1 class="mt-4">
     RICK & MORTY
    </h1>
    <p class="p-5 my-8 text-left text-xl bg-green-50 rounded-xl font-medium">
      Welcome to the rick & morty web application that allows you to discover characters that you may
      have missed in Rick and Morty.
    </p>
    <h1>What can you do ?</h1>
    <ul class="p-5 my-8 bg-green-200 rounded-xl text-left text-green-800 text-xl font-medium list-decimal list-inside">
      <li class="mb-2">You can filter characters by name, gender, status and species.</li>
      <li class="mb-2">See character's personal infos: actual location, episodes and origin.</li>
      <li>See the list of every episodes and characters present in it.</li>
    </ul>
    <div class="browse flex justify-around mt-10 sm:justify-center">
      <router-link :to="{name: 'Characters', params: {id: 1}}" class="no-underline py-4 px-3 bg-green-100 ring-4 ring-green-50
      rounded-xl text-black font-medium hover:bg-green-700 hover:ring-green-200 hover:text-white hover:font-black sm:mx-4">Browse Characters</router-link>
      <router-link :to="{name: 'Episodes'}" class="no-underline py-4 px-3 bg-green-100 ring-4 ring-green-50 rounded-xl
      text-black font-medium hover:bg-green-700 hover:ring-green-200 hover:text-white hover:font-black sm:mx-4">Browse Episodes</router-link>
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
