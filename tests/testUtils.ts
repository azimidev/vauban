import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CharacterModel from '@/models/CharacterModel';

export const localVue = createLocalVue();
localVue.use(Vuex);
export let store: any;
export let getters: any;
export const characters: Array<CharacterModel> = require('@/data/characters.json');

beforeEach(() => {
	getters = {
		characters: () => characters,
		list: () => Array<CharacterModel>(),
		listCount: () => 0,
	};
	store = new Vuex.Store({
		getters,
	});
});
