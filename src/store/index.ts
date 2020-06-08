import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import CharacterModel from "@/models/CharacterModel";
import characters from "@/data/characters.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: characters,
    list: Array<CharacterModel>(),
    listCount: 0
  },

  getters: {
    characters: state => state.characters,
    list: state => state.list,
    listCount: state => state.listCount
  },

  mutations: {
    [types.ADD_TO_LIST](state, character) {
      state.list.push(character);
      state.listCount = state.listCount + 1;
    },
    [types.REMOVE_FROM_LIST](state, character) {
      // NOTE: I'm comparing the whole object because there is no identifier
      const index = state.list.map(item => item.name).indexOf(character.name);
      state.list.splice(index, 1);
      state.listCount = state.listCount - 1;
    }
  },

  actions: {
    addToList({ commit }, character) {
      commit(types.ADD_TO_LIST, character);
    },

    removeFromList({ commit }, character) {
      commit(types.REMOVE_FROM_LIST, character);
    }
  },

  modules: {}
});
