<template>
  <div class="flex flex-col sm:justify-center sm:flex-row my-5">
    <input type="text" class="rounded-xl border-green-100 p-2 m-2 outline-none sm:my-0" placeholder="Name" v-model="filter.name"/>
    <select v-model="filter.gender" class="select sm:my-0">
      <option value="" disabled hidden>Gender</option>
      <option>Female</option>
      <option>Male</option>
      <option>Genderless</option>
      <option>unknown</option>
    </select>
    <select v-model="filter.status" class="select sm:my-0">
      <option value="" disabled hidden>Status</option>
      <option>Dead</option>
      <option>Alive</option>
      <option>unknown</option>
    </select>
    <select v-model="filter.species" class="select sm:my-0">
      <option disabled hidden value="">Species</option>
      <option>Human</option>
      <option>Humanoid</option>
      <option>Alien</option>
      <option>Robot</option>
      <option>unknown</option>
    </select>
  </div>
  <div class="mb-5">
    <button @click="reset" class="px-6 py-3 bg-red-500 ring-4 ring-red-200 bg-opacity-90 rounded-lg outline-none
    border-none cursor-pointer text-white font-black uppercase mx-4 hover:bg-opacity-100">reset</button>
    <button type="submit" @click="submit" class="px-6 py-3 bg-green-500 ring-4 ring-green-200 bg-opacity-90 rounded-lg
    outline-none border-none cursor-pointer text-white font-black uppercase mx-4 hover:bg-opacity-100">submit</button>
  </div>
</template>

<script>
export default {
  emits: ['characters-filter', 'characters-reset'],
  data() {
    return {
      filter: {
        name: "",
        gender: "",
        status: "",
        species: ""
      }
    }
  },
  mounted() {
    this.filter = this.$store.state.filter
  },
  methods: {
    submit() {
      const filterParams = {}
      if(this.filter.gender !== '') filterParams.gender = this.filter.gender;
      if(this.filter.status !== '') filterParams.status = this.filter.status;
      if(this.filter.name !== '') filterParams.name = this.filter.name;
      if(this.filter.species !== '') filterParams.species = this.filter.species;
      this.$emit('characters-filter', { filter: filterParams, id: 1 });
    },
    reset() {
      this.filter = { name: "", gender: "", status: "",  species: "" };
      this.$emit('characters-reset');
    }
  }
}
</script>

<style lang="scss">
input {
  &:focus-visible {
    @apply bg-green-50 border-green-200
  }
}

.select {
  &:focus-visible {
    @apply bg-green-50 border-green-200
  }
  @apply outline-none p-2 m-2 rounded-xl border-green-400
}
</style>