<template>
  <nav
    class="navbar is-black is-bold"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand is-flex container">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/list">
        Your List
        <span v-if="listCount" class="tag is-primary is-rounded ml-10">
          {{ listCount }}
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  private get listCount(): number {
    return this.$store.getters.listCount;
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  width: 100%;
  justify-content: space-between;
}
.ml-10 {
  margin-left: 10px;
}
</style>
