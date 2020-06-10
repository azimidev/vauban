import { mount } from "@vue/test-utils";
import { characters, localVue, store } from "../testUtils";
import List from "@/components/List.vue";

let wrapper: any;
const list = [characters[0], characters[1], characters[2]];

describe("NavBar.vue", (): void => {
  beforeEach(() => {
    wrapper = mount(List, {
      store,
      localVue,
      computed: {
        list() {
          return list;
        },
        listCount() {
          return list.length;
        }
      }
    });
  });

  test("should render without error", (): void => {
    expect(wrapper).toBeTruthy();
  });

  test("should display the characters in the personal list", (): void => {
    const expectListToMatchTexts = (...items: any) => {
      for (items of items) {
        expect(wrapper.text()).toMatch(items);
      }
    };

    for (let i = 0; i < list.length; i++) {
      expectListToMatchTexts(
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

  test("should display number of items in the personal list", () => {
    expect(wrapper.text()).toMatch(list.length.toString());
  });
});
