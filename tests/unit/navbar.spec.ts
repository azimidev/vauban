import { mount } from '@vue/test-utils';
import NavBar from '@/views/NavBar.vue';
import { localVue, store, characters } from '../testUtils';

let wrapper: any;

describe('Home.vue', () => {
	beforeEach(() => {
		wrapper = mount(NavBar, {
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

});
