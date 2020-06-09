import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home.vue";
import CharacterModel from '@/models/CharacterModel';

describe("Home.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let wrapper: any;
  let store: any;
  let getters: any;
  const characters: Array<CharacterModel> = require("@/data/characters.json");

  beforeEach(() => {
    getters = {
      characters: () => characters,
      list: () => Array<CharacterModel>(),
      listCount: () => 0
    };
    store = new Vuex.Store({
      getters
    });

    wrapper = mount(Home, {
      store,
      localVue,
      data() {
        return {};
      }
    });
  });

  test("should render without error", () => {
    expect(true).toBe(true)
  });
});
