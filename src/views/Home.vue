<template>
  <section id="home" class="has-background-dark">
    <div class="container">
      <div
        class="columns is-centered"
        v-for="(set, index) in chunk(characters, 3)"
        :key="index"
      >
        <div class="column is-4" v-for="(character, index) in set" :key="index">
          <Character :character="character" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterModel from "@/models/CharacterModel";
import Character from "@/components/Character.vue";

@Component({
  components: { Character }
})
export default class Home extends Vue {
  private get characters(): Array<CharacterModel> {
    return this.$store.getters.characters;
  }

  chunk(array: Array<any>, chunk = 3): Array<any> {
    const temporary = [];
    let i, j;
    for (i = 0, j = array.length; i < j; i += chunk) {
      temporary.push(array.slice(i, i + chunk));
    }
    return temporary;
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
