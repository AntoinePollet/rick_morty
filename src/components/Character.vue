<template>
  <div v-if="character" class="m-3 py-7 bg-green-100">
    <div class="flex flex-col md:flex-row">
      <div class="">
        <img class="rounded-full ml-3" height="175" width="175" :src="character.image" :alt="character.name"/>
      </div>
      <div class="md:ml-5 py-5 flex items-center justify-center flex-col">
        <p>This is <span class="highlight">{{character?.name}}</span> ({{character?.species}}), located on</p>
        <p class="highlight">
          {{character?.location?.type}} {{character?.location?.name}}
        </p>
      </div>
    </div>
    <div>
      <div class="text-left ml-4 my-4">
        <p class="cursor-pointer" @click="showOrigin = !showOrigin">
          <font-awesome-icon :icon="['fas', isTrue(showOrigin)]"/>
          Where is {{ character.name }} originally from ?
        </p>
        <ul v-if="showOrigin">
          <li class="">{{knownOrigin(character.origin)}}</li>
        </ul>
      </div>
      <div class="text-left ml-4 my-4">
        <p class="cursor-pointer" @click="showEpisodes = !showEpisodes">
          <font-awesome-icon :icon="['fas', isTrue(showEpisodes)]"/>
          Wanna see every episodes where {{character.name}} is ?
        </p>
        <ul v-if="showEpisodes">
          <li v-for="episode in character.episode" :key="episode.id">
            {{episode.name}} - {{episode.episode}}
          </li>
        </ul>
      </div>
      <div class="text-left ml-4 my-4">
        <div>
          <p class="cursor-pointer" @click="showResidents = !showResidents">
            <font-awesome-icon :icon="['fas', isTrue(showResidents)]"/>
            See every residents of {{character?.location?.name}}
          </p>
          <div v-if="showResidents">
            <template v-for="resident in character?.location?.residents" :key="resident.id">
              <img :src="resident.image" @click="$router.push({name: 'Character', params: {id :resident.id}})" class="rounded-full w-1/5 md:w-1/12 p-2 cursor-pointer" :alt="resident.name"/>
            </template>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CharacterInfosComponent",
  data() {
    return {
      showOrigin: false,
      showResidents: false,
      showEpisodes: false
    }
  },
  created() {
    if(this.character) {
      console.log(this.character);

    } else {

      console.log(this.character);
    }
  },
  computed: {
    ...mapState({
      character: state => state.character
    })
  },
  methods: {
    isTrue(bool) {
      return bool ? 'angle-down' : 'angle-right'
    },
    knownOrigin(origin) {
      return origin.name !== 'unknown' ? `${origin.type} ${origin.name}` : 'unknown origin'
    }
  }
}
</script>

<style lang="scss">
.highlight {
  @apply bg-gray-100 py-1 my-2 px-2 rounded
}
</style>