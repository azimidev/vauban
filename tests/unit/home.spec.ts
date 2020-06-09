import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/views/Home.vue';
import CharacterModel from '@/models/CharacterModel';

describe('Home.vue', () => {
	const localVue = createLocalVue();
	localVue.use(Vuex);
	let wrapper: any;
	let store: any;
	let getters: any;
	const characters: Array<CharacterModel> = require('@/data/characters.json');

	beforeEach(() => {
		getters = {
			characters: () => characters,
			list: () => Array<CharacterModel>(),
			listCount: () => 0,
		};
		store = new Vuex.Store({
			getters,
		});

		wrapper = mount(Home, {
			store,
			localVue,
			data() {
				return {};
			},
		});
	});

	test('should render without error', (): void => {
		expect(wrapper).toBeTruthy();
	});

	test('should display all character', () => {
		for (let i= 0; i <= 9; i++) {
			expect(wrapper.text()).toMatch(characters[i].name);
			expect(wrapper.text()).toMatch(characters[i].height);
			expect(wrapper.text()).toMatch(characters[i].mass);
			expect(wrapper.text()).toMatch(characters[i].hair_color);
			expect(wrapper.text()).toMatch(characters[i].skin_color);
			expect(wrapper.text()).toMatch(characters[i].eye_color);
			expect(wrapper.text()).toMatch(characters[i].birth_year);
			expect(wrapper.text()).toMatch(characters[i].gender);
		}
	});
});
