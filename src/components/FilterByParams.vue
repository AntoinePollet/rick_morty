<template>
  <div class="flex justify-center my-5">
    <input type="text" class="rounded-xl border-green-100 pl-4 outline-none" placeholder="Name" v-model="filter.name"/>
    <select v-model="filter.gender" class="select">
      <option>Gender</option>
      <option>Female</option>
      <option>Male</option>
      <option>Genderless</option>
      <option>unknown</option>
    </select>
    <select v-model="filter.status" class="select">
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
export default {
  data() {
    return {
      filter: {
        name: "",
        gender: "Gender",
        status: "Status"
      }
    }
  },
  mounted() {
    this.filter = this.$store.state.filter
  },
  methods: {
    submit() {
      const filterParams = {}
      if(this.filter.gender !== 'Gender') filterParams.gender = this.filter.gender;
      if(this.filter.status !== 'Status') filterParams.status = this.filter.status;
      if(this.filter.name !== '') filterParams.name = this.filter.name;
      this.$emit('characters-filter', filterParams)
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