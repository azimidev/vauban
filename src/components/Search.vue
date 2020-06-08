<template>
  <input
    class="input is-rounded"
    type="search"
    placeholder="Search"
    v-model.trim="query"
    @keyup="search"
  />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  query = "";

  search() {
    return this.$store.dispatch("search", this.query.toLowerCase());
  }
}
</script>

<style scoped lang="scss"></style>
