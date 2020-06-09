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

	const expectTextMatch = (exp: string): void => {
		return expect(wrapper.text()).toMatch(exp)
	}

	test('should render without error', () => {
		expect(wrapper).toBeTruthy();
	});

	test('should display 1st character', () => {
		expectTextMatch(characters[0].name);
		expectTextMatch(characters[0].height);
		expectTextMatch(characters[0].mass);
		expectTextMatch(characters[0].hair_color);
		expectTextMatch(characters[0].skin_color);
		expectTextMatch(characters[0].eye_color);
		expectTextMatch(characters[0].birth_year);
		expectTextMatch(characters[0].gender);
	});

	test('should display 2st character', () => {
		expectTextMatch(characters[1].name);
		expectTextMatch(characters[1].height);
		expectTextMatch(characters[1].mass);
		expectTextMatch(characters[1].hair_color);
		expectTextMatch(characters[1].skin_color);
		expectTextMatch(characters[1].eye_color);
		expectTextMatch(characters[1].birth_year);
		expectTextMatch(characters[1].gender);
	});

	test('should display 3rd character', () => {
		expectTextMatch(characters[2].name);
		expectTextMatch(characters[2].height);
		expectTextMatch(characters[2].mass);
		expectTextMatch(characters[2].hair_color);
		expectTextMatch(characters[2].skin_color);
		expectTextMatch(characters[2].eye_color);
		expectTextMatch(characters[2].birth_year);
		expectTextMatch(characters[2].gender);
	});

	test('should display 4th character', () => {
		expectTextMatch(characters[3].name);
		expectTextMatch(characters[3].height);
		expectTextMatch(characters[3].mass);
		expectTextMatch(characters[3].hair_color);
		expectTextMatch(characters[3].skin_color);
		expectTextMatch(characters[3].eye_color);
		expectTextMatch(characters[3].birth_year);
		expectTextMatch(characters[3].gender);
	});

	test('should display 5th character', () => {
		expectTextMatch(characters[4].name);
		expectTextMatch(characters[4].height);
		expectTextMatch(characters[4].mass);
		expectTextMatch(characters[4].hair_color);
		expectTextMatch(characters[4].skin_color);
		expectTextMatch(characters[4].eye_color);
		expectTextMatch(characters[4].birth_year);
		expectTextMatch(characters[4].gender);
	});

	test('should display 6th character', () => {
		expectTextMatch(characters[5].name);
		expectTextMatch(characters[5].height);
		expectTextMatch(characters[5].mass);
		expectTextMatch(characters[5].hair_color);
		expectTextMatch(characters[5].skin_color);
		expectTextMatch(characters[5].eye_color);
		expectTextMatch(characters[5].birth_year);
		expectTextMatch(characters[5].gender);
	});

	test('should display 7th character', () => {
		expectTextMatch(characters[6].name);
		expectTextMatch(characters[6].height);
		expectTextMatch(characters[6].mass);
		expectTextMatch(characters[6].hair_color);
		expectTextMatch(characters[6].skin_color);
		expectTextMatch(characters[6].eye_color);
		expectTextMatch(characters[6].birth_year);
		expectTextMatch(characters[6].gender);
	});

	test('should display 8th character', () => {
		expectTextMatch(characters[7].name);
		expectTextMatch(characters[7].height);
		expectTextMatch(characters[7].mass);
		expectTextMatch(characters[7].hair_color);
		expectTextMatch(characters[7].skin_color);
		expectTextMatch(characters[7].eye_color);
		expectTextMatch(characters[7].birth_year);
		expectTextMatch(characters[7].gender);
	});

	test('should display 9th character', () => {
		expectTextMatch(characters[8].name);
		expectTextMatch(characters[8].height);
		expectTextMatch(characters[8].mass);
		expectTextMatch(characters[8].hair_color);
		expectTextMatch(characters[8].skin_color);
		expectTextMatch(characters[8].eye_color);
		expectTextMatch(characters[8].birth_year);
		expectTextMatch(characters[8].gender);
	});
});
