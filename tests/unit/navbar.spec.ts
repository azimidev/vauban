import { mount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';
import { localVue, store, characters } from '../testUtils';

let wrapper: any;

describe('NavBar.vue', () => {
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
