import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import CartItem from "@/components/CartItem.vue";
import Vuex from "vuex";

const product = {
  id: "adg57uajavam",
  title: "Half of a yellow sun 2",
  description: "one of the best african literature",
  price: {
    XS: 4000,
    XL: 3000,
  },
  orderPrice: 4000,
  quantity: 3,
  orderSize: "XS",
  orderColor: "black",
  getAbsoluteUrl: "/product/dress",
  photo: "www.me",
};
const factory = (state, localVue) => {
  return shallowMount(CartItem, {
    propsData: {
      product: product,
    },
    stubs: {
      NuxtLink: RouterLinkStub,
      "font-awesome-icon": true,
    },
    store: state,
    localVue: localVue,
    data() {
      return {
        item: product,
      };
    },
  });
};
describe("productBox.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let actions;
  let store;
  let mutations;

  beforeEach(async () => {
    actions = {
      removeProduct: jest.fn(),
      increaseQty: jest.fn(),
      decreaseQty: jest.fn(),
    };
    mutations = {
      removeProduct: jest.fn(),
      increaseQty: jest.fn(),
      decreaseQty: jest.fn(),
    };

    store = new Vuex.Store({
      actions,
      mutations,
    });
  });

  it("cartitem monts", () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
    const f = wrapper.find(".cart__meta-text").text();

    expect(wrapper.html()).toContain("Half of a yellow sun 2");
    expect(wrapper.find(".list-view-item__title").text()).toBe(
      "Half of a yellow sun 2"
    );
  });

  it("plus button click increase", () => {
    const wrapper = factory(store, localVue);
    const button = wrapper.find(".plus");
    expect(wrapper.vm).toBeTruthy();
    button.trigger("click");
    expect(mutations.increaseQty).toHaveBeenCalled();
  });

  it("minus button click decrease", () => {
    const wrapper = factory(store, localVue);
    const button = wrapper.find(".minus");
    expect(wrapper.vm).toBeTruthy();
    button.trigger("click");
    expect(mutations.decreaseQty).toHaveBeenCalled();
  });

  it("remove button remove item", () => {
    const wrapper = factory(store, localVue);
    const button = wrapper.find(".cart__remove");
    expect(wrapper.vm).toBeTruthy();
    button.trigger("click");
    expect(mutations.removeProduct).toHaveBeenCalled();
  });
});
