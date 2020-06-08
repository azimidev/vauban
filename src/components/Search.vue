<template>
  <input
    class="input is-rounded"
    type="search"
    placeholder="Search"
    v-model="query"
  />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  query = "";
}
</script>

<style scoped lang="scss"></style>
