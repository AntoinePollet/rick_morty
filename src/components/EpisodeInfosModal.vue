<template>
  <div v-if="dialog" class="z-10 overflow-auto w-screen h-screen fixed p-20 top-0 left-0 bg-black bg-opacity-40">
    <div class="flex flex-col rounded-xl p-5 bg-white ">
      <div class="flex justify-between w-full">
        <p>{{episode.episode}} - {{episode.name}}</p>
        <div @click="closeDialog" class="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <font-awesome-icon :icon="['fa', 'times']" size="lg"></font-awesome-icon>
        </div>
      </div>
      <div class="my-2">
        <p class="text-left">Released {{episode.air_date}}</p>
      </div>
      <p class="text-left my-2">Characters present in this episode :</p>
      <div class="flex flex-wrap">
        <template v-for="character in episode.characters" :key="character.id">
          <img :src="character.image" @click="$router.push({name: 'Character', params: {id :character.id}})" :alt="character.name" class="w-1/4 sm:w-1/6 md:w-2/12 lg:w-1/12 rounded-full p-2 cursor-pointer"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    episode: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog', false);
    }
  }
}
</script>