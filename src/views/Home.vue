<template>
  <section id="home" class="has-background-dark">
    <div class="container has-text-centered">
      <div
        class="columns is-centered"
        v-for="(set, index) in chunk(characters, 3)"
        :key="index"
      >
        <div class="column is-4" v-for="(character, index) in set" :key="index">
          <Character :character.sync="character" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import CharacterModel from "@/models/CharacterModel";
import Character from "@/components/Character.vue";
import Chunk from "@/mixins/Chunk";

@Component({
  components: { Character }
})
export default class Home extends Mixins(Chunk) {
  private get characters(): Array<CharacterModel> {
    return this.$store.state.characters;
  }
}
</script>

<style lang="scss">
#home {
  min-height: 100vh;
  padding: 30px 0;
}
.column {
  display: flex;
}
.card {
  width: 100%;
}
</style>
