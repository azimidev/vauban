import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { localVue, store, characters } from "../testUtils";

let wrapper: any;

describe("Home.vue", () => {
  beforeEach(() => {
    wrapper = mount(Home, {
      store,
      localVue,
      data() {
        return {};
      }
    });
  });

  test("should render without error", (): void => {
    expect(wrapper).toBeTruthy();
  });

  test("should display all character", (): void => {
    for (let i = 0; i <= 9; i++) {
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
