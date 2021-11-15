<template>
  <div>
    <div class="hidden sm:block w-full bg-green-500">
      <ul class="flex justify-center list-none pl-0">
        <li v-for="item in header" :key="item.name" class="mx-3 px-3 py-5">
          <router-link class="header-link" v-if="item.params" :to="{name: item.routerPath, params: {id: item.params.id}}">{{ item.name }}</router-link>
          <router-link class="header-link" v-else :to="{name: item.routerPath}">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="sm:hidden w-full bg-green-500">
      <div class="flex justify-end py-2">
        <div @click="openMenu" class="mr-5 cursor-pointer">
          <font-awesome-icon size="3x" :icon="['fas', 'bars']" />
        </div>
      </div>
    </div>
    <HeaderCollapseModal @scroll.prevent :show="dialog" :items="header" @close-menu="close"></HeaderCollapseModal>
  </div>
</template>

<script>
import HeaderCollapseModal from "@/components/HeaderCollapseModal";
export default {
  name: "Header",
  components: {HeaderCollapseModal},
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
      ],
      dialog: false
    }
  },
  methods: {
    openMenu() {
      this.dialog = true;
      document.body.style.overflowY = "hidden";
    },
    close() {
      this.dialog = false;
      document.body.style.overflowY = "visible";

    }
  }
}
</script>

<style lang="scss">
.header-link {
  &:hover {
    border-bottom: white solid 1px;
  }
  @apply no-underline text-white font-medium
}
.router-link-active {
  border-bottom: white solid 1px;
}
</style>