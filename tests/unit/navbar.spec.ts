import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import { localVue, store, characters, getters } from "../testUtils";

let wrapper: any;
let listCount = 5;

describe("NavBar.vue", () => {
  beforeEach(() => {
    wrapper = mount(NavBar, {
      store,
      localVue,
      data() {
        return {};
      },
      computed: {
        listCount() {
          return listCount;
        }
      }
    });
  });

  test("should render without error", (): void => {
    expect(wrapper).toBeTruthy();
  });

  test("should not display list count if there is no item in the list", (): void => {
    expect(wrapper.text()).not.toMatch("0");
  });

  test("should display list count", (): void => {
    expect(wrapper.text()).toMatch(listCount.toString());
  });
});
