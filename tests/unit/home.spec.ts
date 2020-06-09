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
		const character = characters[0];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 2st character', () => {
		const character = characters[1];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 3rd character', () => {
		const character = characters[2];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 4th character', () => {
		const character = characters[3];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 5th character', () => {
		const character = characters[4];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 6th character', () => {
		const character = characters[5];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 7th character', () => {
		const character = characters[6];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 8th character', () => {
		const character = characters[7];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});

	test('should display 9th character', () => {
		const character = characters[8];
		expectTextMatch(character.name);
		expectTextMatch(character.height);
		expectTextMatch(character.mass);
		expectTextMatch(character.hair_color);
		expectTextMatch(character.skin_color);
		expectTextMatch(character.eye_color);
		expectTextMatch(character.birth_year);
		expectTextMatch(character.gender);
	});
});
