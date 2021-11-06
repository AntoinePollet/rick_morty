<template>
  <div class="flex justify-center my-5">
    <input type="text" class="rounded-xl border-green-100 pl-4 outline-none" placeholder="Name" v-model="name"/>
    <select v-model="gender" class="select">
      <option>Gender</option>
      <option>Female</option>
      <option>Male</option>
      <option>Genderless</option>
      <option>unknown</option>
    </select>
    <select v-model="status" class="select">
      <option>Status</option>
      <option>Dead</option>
      <option>Alive</option>
      <option>unknown</option>
    </select>
    <select class="select">
      <option>
        Type
      </option>
    </select>
    <select class="select">
      <option>
        Species
      </option>
    </select>
    <button type="submit" @click="submit">submit</button>
  </div>
</template>

<script>
import CHARACTERS_FILTERED from "@/graphql/charactersFiltered";

export default {
  data() {
    return {
      name: "",
      gender: "Gender",
      status: "Status",
      filter: {}
    }
  },
  methods: {
    async submit() {
      if(this.gender !== 'Gender') this.filter.gender = this.gender;
      if(this.status !== 'Status') this.filter.status = this.status;
      if(this.name !== '') this.filter.name = this.name;
      const res = await this.$apollo.query({
        query: CHARACTERS_FILTERED,
        variables: {
          filter: this.filter
        }
      })
      await this.$store.dispatch('charactersFiltered', res.data.characters)
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
  @apply outline-none p-2 mx-2 rounded-xl border-green-400
}
</style>