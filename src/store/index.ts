import Vue from "vue";
import Vuex from "vuex";
// import * as types from "./types";
import CharacterModel from "@/models/CharacterModel";
import characters from "@/data/characters.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: characters,
    list: Array<CharacterModel>()
  },

  getters: {
    characters: state => state.characters
  },

  mutations: {
    // [types.ADD_TO_LIST](state, characters) {
    //   state.characters = characters;
    // }
  },

  actions: {
    // addToList({ commit }, character) {
    //   commit(types.ADD_TO_LIST, { id: character.id });
    // },
  },

  modules: {}
});
