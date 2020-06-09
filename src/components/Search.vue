<template>
  <div>
    <input
      title="Search"
      class="input is-rounded"
      type="search"
      placeholder="Search"
      v-model.trim="query"
      @keyup="search"
    />
    <small class="has-text-primary">
      Search characters name, gender, height, mass, hair color, skin color, eye
      color or birth year.
    </small>
  </div>
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
