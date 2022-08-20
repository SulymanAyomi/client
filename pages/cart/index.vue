<template>
  <div class="page-cart">
    <div class="page section-header text-center">
      <div class="page-title">
        <div class="wrapper"><h1 class="page-width">shopping cart</h1></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-sm-12 col-lg-12">
          <div class="cart">
            <table>
              <thead class="cart__row cart__header">
                <tr>
                  <th colspan="2" class="text-center">Product</th>
                  <th class="text-center">Price</th>
                  <th class="text-center">Quantity</th>
                  <th class="text-center">Total</th>
                  <th class="action">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <CartItem
                  v-for="product in getCart"
                  v-bind:key="product._id"
                  v-bind:initialItem="product"
                  v-on:removeFromCart="removeFromCart"
                />
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="text-right">
                    <span class="cart__subtotal-title">Subtotal</span>
                  </td>
                  <td colspan="" class="text-center">
                    <span class=""
                      ><span class="money"
                        >$ {{ getCartTotalPrice }}
                      </span></span
                    >
                  </td>
                  <td colspan="4" class="text-center">
                    <span class="cart__subtotal-title"
                      >{{ getCartLength }} items</span
                    >
                  </td>
                </tr>
                <tr>
                  <td colspan="6" class="text-right">
                    <router-link to="/cart/checkout">
                      <button type="submit" name="clear" class="btn--checkout">
                        Proceed to Checkout
                      </button></router-link
                    >
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",

  data() {
    return {
      cart: {
        items: [],
      },
    };
  },
  mounted() {},
  methods: {
    removeFromCart(item) {
      this.cart.items = this.cart.items.filter(
        (i) => i.product.id !== item.product.id
      );
    },
  },
  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"]),
  },
};
</script>