import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import productBox from "@/components/ProductBox.vue";
import Vuex from "vuex";

const factory = (state, localVue) => {
  return shallowMount(productBox, {
    propsData: {
      product: {
        id: "adg57uajavam",
        title: "Half of a yellow sun 2",
        description: "one of the best african literature",
        price: {
          XS: 4000,
          XL: 3000,
        },
        getAbsoluteUrl: "/product/dress",
        photo: "www.me",
      },
    },
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    store: state,
    localVue: localVue,
  });
};
describe("productBox.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let actions;
  let store;

  beforeEach(async () => {
    actions = {
      displayModal: jest.fn(),
    };

    store = new Vuex.Store({
      actions,
    });
  });

  it("display productBox", () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
    // const f = wrapper.find(".product-name").text();
    // console.log(f);

    expect(wrapper.html()).toContain("Half of a yellow sun 2");
    expect(wrapper.find(".product-name").text()).toBe("Half of a yellow sun 2");
    expect(wrapper.find(".product-name").text()).toBe("Half of a yellow sun 2");
  });

  it("button click", async () => {
    const wrapper = factory(store, localVue);
    const button = wrapper.find(".btn");
    expect(wrapper.vm).toBeTruthy();
    await button.trigger("click");

    expect(actions.displayModal).toHaveBeenCalled();
  });
});
