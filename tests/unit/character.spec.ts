import { mount } from "@vue/test-utils";
import Character from "@/components/Character.vue";
import { characters, localVue, store } from "../testUtils";

let wrapper: any;

describe("NavBar.vue", () => {
  beforeEach(() => {
    wrapper = mount(Character, {
      store,
      localVue,
      propsData: {
        character: characters[0]
      },
      data() {
        return {
          exists: false
        };
      }
    });
  });

  test("should render without error", (): void => {
    expect(wrapper).toBeTruthy();
  });

  test("should show add button", async () => {
    expect(wrapper.text()).toMatch("Add");
  });

  test("should show remove button when click on add", async () => {
    await wrapper.find("[data-test=add]").trigger("click");
    expect(wrapper.text()).toMatch("Remove");
    await wrapper.find("[data-test=remove]").trigger("click");
    expect(wrapper.text()).toMatch("Add");
  });
});
