<template>
  <div class="card">
    <div class="card-content">
      <div class="level is-vcentered">
        <h1 class="level-left">
          <strong>{{ character.name }}</strong>
        </h1>
        <div class="level-right">
          <div class="level-item">
            <button
              v-if="!exists"
              class="level-item button is-success is-small"
              @click="addToList(character)"
            >
              Add
            </button>
            <button
              v-else
              class="level-item button is-danger is-small"
              @click="removeFromList(character)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <table class="table is-striped is-narrow is-hoverable is-fullwidth">
        <tr>
          <td>Gender</td>
          <td>{{ character.gender }}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{{ character.height }}</td>
        </tr>
        <tr>
          <td>Mass</td>
          <td>{{ character.mass }}</td>
        </tr>
        <tr>
          <td>Hair color</td>
          <td>{{ character.hair_color }}</td>
        </tr>
        <tr>
          <td>Skin color</td>
          <td>{{ character.skin_color }}</td>
        </tr>
        <tr>
          <td>Eye color</td>
          <td>{{ character.eye_color }}</td>
        </tr>
        <tr>
          <td>Birth year</td>
          <td>{{ character.birth_year }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import CharacterModel from "@/models/CharacterModel";
import Capitilize from "@/mixins/Capitilize";

@Component
export default class Character extends Mixins(Capitilize) {
  @Prop({ required: true }) character!: CharacterModel;

  private exists = this.$store.getters.list.includes(this.character);

  private addToList(character: CharacterModel) {
    this.exists = true;
    this.$store.dispatch("addToList", character);
  }

  private removeFromList(character: CharacterModel) {
    this.exists = false;
    this.$store.dispatch("removeFromList", character);
  }
}
</script>

<style lang="scss" scoped></style>
