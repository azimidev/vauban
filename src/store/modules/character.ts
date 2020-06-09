import characters from "@/data/characters.json";
import CharacterModel from "@/models/CharacterModel";
import * as types from "@/store/types";

export default {
  state: {
    characters: characters,
    list: Array<CharacterModel>(),
    listCount: 0
  },

  getters: {
    characters: (state: any) => state.characters,
    list: (state: any) => state.list,
    listCount: (state: any) => state.listCount
  },

  mutations: {
    [types.ADD_TO_LIST](state: any, character: CharacterModel) {
      state.list.push(character);
      state.listCount = state.listCount + 1;
    },

    [types.REMOVE_FROM_LIST](state: any, character: CharacterModel) {
      const index = state.list
        .map((item: CharacterModel) => item.name)
        .indexOf(character.name);
      state.list.splice(index, 1);
      state.listCount = state.listCount - 1;
    },

    [types.SEARCH](state: any, query: string) {
      state.characters = characters.filter((character: any) => {
        // TODO: 1st Way - search through any values
        return (
          JSON.stringify(Object.values(character))
            .toLowerCase()
            .indexOf(query) !== -1
        );

        // TODO: 2nd Way - search through name value
        // return character.name.toLowerCase().includes(query);
      });
    }
  },

  actions: {
    addToList({ commit }: any, character: CharacterModel) {
      commit(types.ADD_TO_LIST, character);
    },

    removeFromList({ commit }: any, character: CharacterModel) {
      commit(types.REMOVE_FROM_LIST, character);
    },

    search({ commit }: any, query: string) {
      commit(types.SEARCH, query);
    }
  }
};
