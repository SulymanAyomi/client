<template>
  <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
    <div class="product-box">
      <div class="col-12">
        <nuxt-link :to="product.getAbsoluteUrl">
          <div class="product-image">
            <img :src="product.photo" /></div
        ></nuxt-link>
        <div class="product-detail text-center">
          <div class="product-name">
            <nuxt-link :to="product.getAbsoluteUrl">
              {{ product.title }}
            </nuxt-link>
          </div>
          <div class="product-price">
            <p>
              ${{ product.price.XS.toFixed(2) }} -
              {{ product.price.XL.toFixed(2) }}
            </p>
          </div>
        </div>
      </div>

      <span class="btn" @click="displayModal(product)">Add to cart </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductBox",
  props: {
    product: Object,
  },
  data() {
    return {
      quantity: 1,
      size: "M",
    };
  },
  methods: {
    ...mapActions(["addProductToCart", "displayModal"]),
  },
};
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>