<template>
  <div class="m-3 bg-red-200">
    <div class="flex flex-col md:flex-row">
      <div class="py-5">
        <img class="rounded-full object-contain" width="175" height="175" :src="character.image" :alt="character.name"/>
      </div>
      <div class="py-5">
        <p>
          Hey you, I am {{character.name}}, I come from
          {{character.location.type}} {{character.location.name}}
        </p>
      </div>
    </div>
    <div>
      <div class="text-left ml-4 my-4">
        <p class="cursor-pointer" @click="showLocation = !showLocation">
          Where can I find this character ?
          <font-awesome-icon :icon="['fas', isTrue(showLocation)]"/>
        </p>
        <div v-if="showLocation" class="ml-4">
          <p>Comes from {{character.location.type}} {{character.location.name}}</p>
          <div>
            <p class="cursor-pointer" @click="showResidents = !showResidents">
              See every residents
              <font-awesome-icon :icon="['fas', isTrue(showResidents)]"/>
            </p>
            <div v-if="showResidents">
              <template v-for="resident in character.location.residents" :key="resident.id">
                <img :src="resident.image" class="rounded-full w-1/5 p-2" :alt="resident.name"/>
              </template>
            </div>
          </div>
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
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CharacterInfosComponent",
  data() {
    return {
      showLocation: false,
      showOrigin: false,
      showResidents: false
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