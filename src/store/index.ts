import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
// import CharacterModel from "@/models/CharacterModel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // characters: Array<CharacterModel>(require("@/data/characters.json")),
    characters: require("@/data/characters.json")
  },

  getters: {
    characters: state => state.characters
  },

  mutations: {
    [types.CHARACTERS](state, characters) {
      state.characters = characters;
    }
  },

  actions: {
    // action({ commit }, character) {
    //   commit(types.ACTION, { id: character.id });
    // },
  },

  modules: {}
});
