<template>
  <div class="sm:flex sm:flex-wrap">
    <div v-for="character in characters" :key="character.id"
         class="sm:w-1/2 md:w-1/3 flex flex-col">
      <div @click="characterInfos(character.id)" class="rounded cursor-pointer bg-green-100 m-3">
        <div class="flex justify-center mt-3">
          <img :src="character.image" height="80" width="80" class="rounded-full" :alt="character.name"/>
        </div>
        <p>{{character.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'Characters',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  },
  methods: {
    characterInfos(id) {
      this.$router.push({name: "Character", params: {id: id}})
    }
  }
}
</script>