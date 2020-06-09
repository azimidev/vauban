import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import CharacterModel from "@/models/CharacterModel";
import { VueConstructor } from "vue";

export let localVue: VueConstructor<Vue>;
localVue = createLocalVue();
localVue.use(Vuex);
export let store: any;
export let getters: any;
export let actions: any;
export const characters: Array<CharacterModel> = require("@/data/characters.json");

beforeEach(() => {
  getters = {
    characters: () => characters,
    list: () => Array<CharacterModel>(),
    listCount: () => 0
  };

  actions = {
    addToList: jest.fn(),
    removeFromList: jest.fn(),
    search: jest.fn()
  };

  store = new Vuex.Store({
    actions,
    getters
  });
});
