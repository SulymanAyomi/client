export const state = () => ({
  cart: [],
  cartLength: 0,
  isActive: false,
  modalProduct: {},
});

export const actions = {
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.cart.find((prod) => prod._id === product._id);

    if (!cartProduct) {
      commit("pushProductToCart", product);
    } else {
      commit("incrementProductQty", cartProduct);
    }

    commit("incrementCartLength");
  },
  displayModal({ commit }, product) {
    commit("setModal", product);
  },
  fetchCategory() {
    let categories = $axios.$get("/api/categories");
    return categories;
  },
  fetchBrand() {
    let brands = $axios.$get("/api/brands");
    return brands;
  },
  fetchAllProduct() {
    let products = $axios.$get("/api/products");
    return products;
  },
};

export const mutations = {
  pushProductToCart(state, product, color, size = "M") {
    product.quantity = 1;
    product.orderColor = product.color[0];
    product.orderSize = size;
    product.orderPrice = product.price.M;

    state.cart.push(product);
  },

  addToCartProduct(state, item) {
    let product = item.product;
    let quantity = item.quantity;
    let color = item.color;
    let size = item.size;

    // first check if product is in cart
    let cartProduct = state.cart.find((prod) => prod._id === product._id);
    // if it exist replace it, if not add it to cart
    if (!cartProduct) {
      product.quantity = quantity;
      product.orderColor = color;
      product.orderSize = size;
      if (size === "L") {
        product.orderPrice = product.price.L;
      } else if (size === "XS") {
        product.orderPrice = product.price.XS;
      } else if (size === "S") {
        product.orderPrice = product.price.S;
      } else if (size === "L") {
        product.orderPrice = product.price.L;
      } else {
        product.orderPrice = product.price.M;
      }
      state.cart.push(product);
      this.commit("incrementCartLength");
    } else {
      cartProduct.quantity = quantity;
      cartProduct.orderColor = color;
      cartProduct.orderSize = size;
      if (size === "L") {
        cartProduct.orderPrice = product.price.L;
      } else if (size === "XS") {
        cartProduct.orderPrice = product.price.XS;
      } else if (size === "S") {
        cartProduct.orderPrice = product.price.S;
      } else if (size === "L") {
        cartProduct.orderPrice = product.price.L;
      } else {
        cartProduct.orderPrice = product.price.M;
      }
      let indexOfProduct = state.cart.indexOf(cartProduct);
      state.cart.splice(indexOfProduct, 1, cartProduct);
      this.commit("incrementCartLength");
    }
  },

  incrementProductQty(state, product) {
    product.quantity++;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1, product);
  },

  incrementCartLength(state) {
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map((product) => {
        state.cartLength += product.quantity;
      });
    }
  },
  inputCommit(state, product) {
    const quantity = product.quantity;
    let cartProduct = state.cart.find((prod) => prod._id === product.item._id);

    cartProduct.quantity = quantity;
    if (cartProduct.quantity === 0) {
      this.commit("removeProduct", product);
    } else {
      let indexOfProduct = state.cart.indexOf(cartProduct);
      state.cart.splice(indexOfProduct, 1, cartProduct);
    }
    this.commit("incrementCartLength");
  },

  increaseQty(state, product) {
    let cartProduct = state.cart.find((prod) => prod._id === product._id);
    cartProduct.quantity++;

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
    this.commit("incrementCartLength");
  },
  decreaseQty(state, product) {
    let cartProduct = state.cart.find((prod) => prod._id === product._id);

    cartProduct.quantity--;
    if (cartProduct.quantity === 0) {
      this.commit("removeProduct", product);
    } else {
      let indexOfProduct = state.cart.indexOf(cartProduct);
      state.cart.splice(indexOfProduct, 1, cartProduct);
      this.commit("incrementCartLength");
    }
  },
  removeProduct(state, product) {
    state.cartLength -= product.quantity;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1);
    this.commit("incrementCartLength", product);
  },

  clearCart(state) {
    state.cart = [];
    state.cartLength = 0;
  },

  changeColor(state, product, color = "", size) {
    let cartProduct = state.cart.find((prod) => prod._id === product._id);
    cartProduct.orderColor = color;
    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },

  changeSize(state, product, size) {
    let cartProduct = state.cart.find((prod) => prod._id === product._id);
    if (size === "") {
      cartProduct.orderSize = "M";
    } else {
      cartProduct.orderSize = size;
    }
    if (size === "L") {
      cartProduct.orderPrice = product.price.L;
    } else if (size === "XS") {
      cartProduct.orderPrice = product.price.XS;
    } else if (size === "S") {
      cartProduct.orderPrice = product.price.S;
    } else if (size === "L") {
      cartProduct.orderPrice = product.price.L;
    } else {
      cartProduct.orderPrice = product.price.M;
    }
    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },
  setModal(state, product) {
    state.modalProduct = product;
    state.isActive = true;
  },
  removeModal(state) {
    state.isActive = false;
  },
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  },
  getCartTotalPrice(state) {
    let price = state.cart.reduce((acc, curVal) => {
      return (acc += curVal.orderPrice * curVal.quantity);
    }, 0);
    return price;
  },
};
