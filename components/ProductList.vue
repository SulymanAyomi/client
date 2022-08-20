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
        <i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star"></i
        ><i class="font-13 fa fa-star"></i><i class="font-13 fa fa-star-o"></i
        ><i class="font-13 fa fa-star-o"></i>
      </p>
      <!-- End Product Review -->
      <!-- Sort Description -->
      <p>
        Belle Multipurpose Bootstrap 4 Html Template that will give you and your
        customers a smooth shopping experience which can be used for various
        kinds of stores such as boutiques, bookstores, technology stores,
        jewelries and other types of web shops....
      </p>
      <!-- End Sort Description -->
      <!-- Price -->
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