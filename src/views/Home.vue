<template>
  <section class="hero is-fullheight is-vcentered">
    <div class="hero-body">
      <div class="container"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  // private get characters(): Array<CharacterModel> {
  //   return this.$store.getters.characters;
  // }
}
</script>

<style lang="scss"></style>
