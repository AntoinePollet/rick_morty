<template>
  <div class="">
    <div class="flex m-3 bg-red-200">
      <div class="w-1/2 py-5">
        <p>{{character.name}}</p>
        <div class="text-left ml-4 my-4">
          <p class="cursor-pointer" @click="showLocation = !showLocation">
            Where can I find this character ?
            <font-awesome-icon :icon="['fas', isTrue(showLocation)]"/>
          </p>
          <div v-if="showLocation" class="ml-4">
            <p>{{character.location}}</p>
          </div>
        </div>
        <div class="text-left ml-4 my-4">
          <p class="cursor-pointer" @click="showOrigin = !showOrigin">
            Where is he from ?
            <font-awesome-icon :icon="['fas', isTrue(showOrigin)]"/>
          </p>
          <div v-if="showOrigin" class="ml-4">
            <p>{{character.origin}}</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 py-5">
        <img class="rounded-full w-1/2" :src="character.image" :alt="character.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CharacterInfosComponent",
  data() {
    return {
      showLocation: false,
      showOrigin: false
    }
  },
  computed: {
    ...mapState({
      character: state => state.character
    })
  },
  methods: {
    isTrue(bool) {
      return bool ? 'angle-down' : 'angle-up'
    }
  }
}
</script>

<style lang="scss">

</style>