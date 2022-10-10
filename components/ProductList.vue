<template>
  <div class="list-product list-view-item">
    <div class="list-view-item__image-column mx-2">
      <div class="list-view-item__image-wrapper">
        <!-- Image -->
        <nuxt-link :to="product.getAbsoluteUrl"
          ><img
            class="list-view-item__image blur-up lazyloaded"
            :src="product.photo"
            alt="image"
            title="product"
          />
        </nuxt-link>
        <!-- End Image -->
      </div>
    </div>
    <div class="list-view-item__title-column mx-3">
      <div class="h4 title">
        <nuxt-link :to="product.getAbsoluteUrl">
          {{ product.title }}
        </nuxt-link>
      </div>
      <!-- Product Review -->
      <p class="product-review">
        <client-only>
          <star-rating
            v-model="product.avarageRating"
            :show-rating="false"
            :glow="1"
            :border-width="1"
            :read-only="true"
            :star-size="10"
          ></star-rating>
        </client-only>
      </p>
      <p>
        {{ product.description }}
      </p>
      <p>price range form XS to XS</p>

      <p class="product-price price">
        <span class="product-price__price product-price__sale"
          ><span class="money"
            >${{ product.price.XS.toFixed(2) }} -
            {{ product.price.XL.toFixed(2) }}</span
          ></span
        >
      </p>
      <!-- End Price -->
      <button
        class="btn btn--small"
        type="button"
        @click="displayModal(product)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "ProductList",
  props: {
    product: Object,
  },
  methods: {
    ...mapActions(["addProductToCart", "displayModal"]),
  },
};
</script>