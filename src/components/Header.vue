<template>
  <div class="w-full bg-green-500">
    <ul class="flex justify-center list-none pl-0">
      <li v-for="item in header" :key="item.name" class="mx-3 px-3 py-5">
        <router-link class="header-link" v-if="item.params" :to="{name: item.routerPath, params: {id: item.params.id}}">{{ item.name }}</router-link>
        <router-link class="header-link" v-else :to="{name: item.routerPath}">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      header: [
        {
          name: "Home",
          routerPath: "Home"
        },
        {
          name: "Browse Characters",
          routerPath: "Characters",
          params: {
            id: 1
          }
        },
        {
          name: "Browse Episodes",
          routerPath: "Episodes"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header-link {
  @apply no-underline text-white font-medium
}
</style>