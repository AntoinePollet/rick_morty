<template>
  <div v-if="show" class="sm:hidden h-screen w-screen bg-green-300 z-10 fixed p-4">
    <div class="flex justify-start">
      <div @click="close" class="cursor-pointer hover:bg-white rounded-full py-2 px-3">
        <font-awesome-icon size="2x" :icon="['fas', 'times']"></font-awesome-icon>
      </div>
    </div>
    <div class="flex flex-col">
      <div v-for="item in items" :key="item.name" @click="close" class="my-4 text-2xl">
        <router-link class="header-link" v-if="item.params" :to="{name: item.routerPath, params: {id: item.params.id}}">{{ item.name }}</router-link>
        <router-link class="header-link" v-else :to="{name: item.routerPath}">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerMenuCollapse",
  props: {
    show: {
      default: false,
      type: Boolean
    },
    items: {
      default: Object,
      type: () => {}
    }
  },
  methods: {
    close() {
      this.$emit('close-menu');
    }
  }
}
</script>