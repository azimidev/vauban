<template>
  <section id="list" class="has-background-primary">
    <div class="container has-text-centered">
      <h1 class="title">Your List</h1>
      <h2 class="subtitle" v-if="!listCount">Your list is empty!</h2>
      <div
        class="columns is-centered"
        v-for="(set, index) in chunk(list, 3)"
        :key="index"
      >
        <div class="column is-4" v-for="character in set" :key="character.name">
          <Character :character.sync="character" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Chunk from "@/mixins/Chunk";
import Character from "@/components/Character.vue";
import CharacterModel from "@/models/CharacterModel";

@Component({
  components: { Character }
})
export default class List extends Mixins(Chunk) {
  private get list(): Array<CharacterModel> {
    return this.$store.getters.list;
  }

  private get listCount(): Array<CharacterModel> {
    return this.$store.getters.listCount;
  }
}
</script>

<style lang="scss" scoped>
#list {
  min-height: 100vh;
  padding: 30px 0;
}
</style>
