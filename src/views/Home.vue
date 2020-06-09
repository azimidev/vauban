<template>
  <section id="home" class="has-background-dark">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-6">
          <Search class="mt-20" />
        </div>
      </div>

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
import Search from "@/components/Search.vue";

@Component({
  components: { Search, Character }
})
export default class Home extends Mixins(Chunk) {
  private get characters(): Array<CharacterModel> {
    return this.$store.getters.characters;
  }
}
</script>

<style lang="scss">
#home {
  min-height: 100vh;
}
.column {
  display: flex;
}
.card {
  width: 100%;
}
</style>
