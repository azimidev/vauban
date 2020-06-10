import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { localVue, store, characters } from "../testUtils";

let wrapper: any;

describe("Home.vue", (): void => {
  beforeEach((): void => {
    wrapper = mount(Home, {
      store,
      localVue
    });
  });

  test("should render without error", (): void => {
    expect(wrapper).toBeTruthy();
  });

  test("should display all character", (): void => {
    const expectHomeToMatchTexts = (...items: any) => {
      for (items of items) {
        expect(wrapper.text()).toMatch(items);
      }
    };

    for (let i = 0; i < characters.length; i++) {
      expectHomeToMatchTexts(
        characters[i].name,
        characters[i].height,
        characters[i].mass,
        characters[i].hair_color,
        characters[i].skin_color,
        characters[i].eye_color,
        characters[i].birth_year,
        characters[i].gender
      );
    }
  });
});
