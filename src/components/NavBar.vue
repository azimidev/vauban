<template>
  <nav
    class="navbar is-black is-bold"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand is-flex container">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/">Your List</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar-brand {
  width: 100%;
  justify-content: space-between;
}
</style>
