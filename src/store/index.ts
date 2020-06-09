import Vue from "vue";
import Vuex from "vuex";
import Character from "@/store/modules/character";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    character: Character
  }
});
