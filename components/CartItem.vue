<template>
  <tr class="cart__row border-bottom line1 cart-flex border-top">
    <td class="cart__image-wrapper cart-flex-item">
      <nuxt-link :to="item.getAbsoluteUrl"
        ><img class="cart__image" :src="item.photo" :alt="item.title"
      /></nuxt-link>
    </td>
    <td class="cart__meta small--text-left cart-flex-item">
      <div class="list-view-item__title">
        <nuxt-link :to="item.getAbsoluteUrl">{{ item.title }} </nuxt-link>
      </div>

      <div class="cart__meta-text">
        Color: {{ item.orderColor }}<br />Size: {{ item.orderSize }}<br />
      </div>
    </td>
    <td class="cart__price-wrapper cart-flex-item">
      <span class="money">${{ item.orderPrice }}</span>
    </td>
    <td class="cart__update-wrapper cart-flex-item text-right">
      <div class="cart__qty text-center">
        <div class="qtyField">
          <a class="qtyBtn minus" @click="decrementQuantity(item)">
            <font-awesome-icon :icon="['fa', 'minus']" />
          </a>
          <input
            class="cart__qty-input qty"
            type="text"
            name="updates[]"
            id="qty"
            v-model="item.quantity"
            pattern="[0-9]*"
          />
          <a class="qtyBtn plus" @click="incrementQuantity(item)">
            <font-awesome-icon :icon="['fa', 'plus']" />
          </a>
        </div>
      </div>
    </td>
    <td class="text-center small--hide cart-price">
      <div>
        <span class="money">$ {{ getItemTotal.toFixed(2) }} </span>
      </div>
    </td>
    <td class="text-center small--hide">
      <a
        class="cart__remove btn btn--secondary"
        title="Remove tem"
        @click="removeFromCart(item)"
      >
        <font-awesome-icon :icon="['fas', 'xmark']"></font-awesome-icon>
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    initialItem: Object,
  },
  data() {
    return {
      item: this.initialItem,
    };
  },
  computed: {
    getItemTotal() {
      return this.item.orderPrice * this.item.quantity;
    },
  },
  methods: {
    decrementQuantity(item) {
      this.$store.commit("decreaseQty", item);
      this.$bvToast.toast("Product quantity decrease", {
        varient: "danger",
        solid: true,
        noCloseButton: true,
      });
    },
    incrementQuantity(item) {
      this.$store.commit("increaseQty", item);

      this.$bvToast.toast("Product quantity increase", {
        varient: "danger",
        solid: true,
        noCloseButton: true,
      });
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
    },
    removeFromCart(item) {
      this.$store.commit("removeProduct", item);
      this.$bvToast.toast("Product remove from cart", {
        varient: "danger",
        solid: true,
        noCloseButton: true,
      });
    },
  },
};
</script>