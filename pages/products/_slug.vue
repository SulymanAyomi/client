<template>
  <main>
    <!-- breadcrumb -->
    <div class="bredcrumbWrap">
      <div class="container breadcrumbs">
        <nuxt-link to="/" title="Back to the home page">Home</nuxt-link
        ><span aria-hidden="true">›</span
        ><span><nuxt-link to="/products"> Products</nuxt-link></span>
        <span aria-hidden="true">›</span><span> {{ product.title }} </span>
      </div>
    </div>
    <!-- breadcrumb ends -->
    <div class="container">
      <!-- single product -->
      <div class="productdetail">
        <div class="row">
          <div class="col-lg-6">
            <div class="productdetail-img">
              <div class="zoompro-wrap product-zoom pl-20">
                <div class="imgbox">
                  <img alt="" :src="product.photo" />
                </div>
                <div class="product-labels">
                  <span class="lbl on-sale">Sale</span
                  ><span class="lbl pr-label1">new</span>
                </div>
                <div class="product-buttons">
                  <a
                    href="https://www.youtube.com/"
                    class="btn popup-video"
                    title="View Video"
                    ><i class="icon anm anm-play-r" aria-hidden="true"></i
                  ></a>
                  <a href="#" class="btn prlightbox" title="Zoom"
                    ><i
                      class="icon anm anm-expand-l-arrows"
                      aria-hidden="true"
                    ></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="productdetail_info">
              <h1 class="productdetail_title">{{ product.title }}</h1>
              <div class="productdetail_stock">
                <div class="product-stock">
                  <span class="instock">In Stock</span>
                  <span class="outstock hide">{{ product.stockQuantity }}</span>
                </div>
                <div class="product-sku">
                  SKU: <span class="variant-sku">19115-rdxs</span>
                </div>
                <div class="product-review">
                  <star-rating
                    :rating="product.avarageRating"
                    :show-rating="false"
                    :glow="1"
                    :border-width="1"
                    :rounded-corners="true"
                    :read-only="true"
                    :star-size="10"
                    :star-points="[
                      23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 36, 34, 46,
                      19, 31, 17,
                    ]"
                  >
                  </star-rating>
                </div>
              </div>
              <p class="productdetail_price">
                <span class="price"
                  >${{ product.price.XS }} - {{ product.price.M }}</span
                >
              </p>
              <div class="productdetail_description">
                <p>
                  {{ product.description }}
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
              </div>
              <form
                method="post"
                accept-charset="UTF-8"
                class="productdetail_form"
                enctype="multipart/form-data"
              >
                <div
                  class="swatch clearfix swatch-0 option1"
                  data-option-index="0"
                >
                  <div class="productdetail_form_item">
                    <label class="header"
                      >Color: <span class="value">{{ color }}</span></label
                    >

                    <div
                      data-value="Black"
                      class="swatch-element color black available"
                    >
                      <input
                        class="swatchInput"
                        id="swatch-0-black"
                        type="radio"
                        value="Black"
                        v-model="color"
                      /><label
                        class="swatchbox color small"
                        for="swatch-0-black"
                        style="background-color: black"
                        title="Black"
                      ></label>
                    </div>
                    <div
                      data-value="Maroon"
                      class="swatch-element color maroon available"
                    >
                      <input
                        class="swatchInput"
                        id="swatch-0-maroon"
                        type="radio"
                        name="option-0"
                        value="Maroon"
                        v-model="color"
                      /><label
                        class="swatchbox color small"
                        for="swatch-0-maroon"
                        style="background-color: maroon"
                        title="Maroon"
                      ></label>
                    </div>
                    <div
                      data-value="Blue"
                      class="swatch-element color blue available"
                    >
                      <input
                        class="swatchInput"
                        id="swatch-0-blue"
                        type="radio"
                        name="option-0"
                        value="Blue"
                        v-model="color"
                      /><label
                        class="swatchbox color small"
                        for="swatch-0-blue"
                        style="background-color: blue"
                        title="Blue"
                      ></label>
                    </div>
                    <div
                      data-value="Dark Green"
                      class="swatch-element color dark-green available"
                    >
                      <input
                        class="swatchInput"
                        id="swatch-0-dark-green"
                        type="radio"
                        name="option-0"
                        value="Dark Green"
                        v-model="color"
                      /><label
                        class="swatchbox color small"
                        for="swatch-0-dark-green"
                        style="background-color: darkgreen"
                        title="Dark Green"
                      ></label>
                    </div>
                  </div>
                </div>
                <div
                  class="swatch clearfix swatch-1 option2"
                  data-option-index="1"
                >
                  <div class="product-form__item">
                    <label class="header"
                      >Size: <span class="value">{{ size }}</span></label
                    >
                    <div data-value="XS" class="swatch-element xs available">
                      <input
                        class="swatchInput"
                        id="swatch-1-xs"
                        type="radio"
                        name="option-1"
                        value="XS"
                        v-model="size"
                      />
                      <label
                        class="swatchbox medium"
                        for="swatch-1-xs"
                        title="XS"
                        >XS</label
                      >
                    </div>
                    <div data-value="S" class="swatch-element s available">
                      <input
                        class="swatchInput"
                        id="swatch-1-s"
                        type="radio"
                        name="option-1"
                        value="S"
                        v-model="size"
                      />
                      <label class="swatchbox medium" for="swatch-1-s" title="S"
                        >S</label
                      >
                    </div>
                    <div data-value="M" class="swatch-element m available">
                      <input
                        class="swatchInput"
                        id="swatch-1-m"
                        type="radio"
                        name="option-1"
                        value="M"
                        v-model="size"
                      />
                      <label class="swatchbox medium" for="swatch-1-m" title="M"
                        >M</label
                      >
                    </div>
                    <div data-value="L" class="swatch-element l available">
                      <input
                        class="swatchInput"
                        id="swatch-1-l"
                        type="radio"
                        name="option-1"
                        value="L"
                        v-model="size"
                      />
                      <label class="swatchbox medium" for="swatch-1-l" title="L"
                        >L</label
                      >
                    </div>
                    <div data-value="XL" class="swatch-element xl available">
                      <input
                        class="swatchInput"
                        id="swatch-1-xl"
                        type="radio"
                        name="option-1"
                        value="XL"
                        v-model="size"
                      />
                      <label
                        class="swatchbox medium"
                        for="swatch-1-xl"
                        title="XL"
                        >XL</label
                      >
                    </div>
                  </div>
                </div>

                <!-- Product Add to cart -->
                <div class="productdetail_action clearfix">
                  <div class="productdetail_action_quantity">
                    <div class="wrapQtyBtn">
                      <div class="qtyField">
                        <span
                          class="qtyBtn minus"
                          @click="quantityValue('minus')"
                        >
                          <font-awesome-icon :icon="['fas', 'minus']" />
                        </span>
                        <input
                          id="Quantity"
                          name="quantity"
                          class="product-form__input qty"
                          v-model="quantity"
                        />
                        <span
                          class="qtyBtn plus"
                          @click="quantityValue('plus')"
                        >
                          <font-awesome-icon :icon="['fas', 'plus']" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="productdetail_action_submit">
                    <button
                      type="button"
                      name="add"
                      class="btn"
                      @click="addProduct()"
                    >
                      <span id="AddToCartText-product-template"
                        >Add to cart</span
                      >
                    </button>
                  </div>
                </div>
                <!-- End Product Add to cart -->
              </form>
              <div class="productdetail_tag">
                <p class="product-type">
                  <span class="lbl">Product Type: </span>
                  <a href="#" title="Women's">{{ product.productType.type }}</a>
                </p>
                <p class="product-cat">
                  <span class="lbl">Collections: </span
                  ><nuxt-link :to="categoryPath()">{{
                    product.category.type
                  }}</nuxt-link>
                </p>
                <p class="product-tags">
                  <span class="lbl">Product Tags: </span
                  ><nuxt-link to="#">$100 - $400</nuxt-link>,
                  <a href="#">$400 - $600</a>, <a href="#">$600 - $800</a>,
                  <a href="#">Above $800</a>, <a href="#">Gray</a>,
                  <a href="#">Hot</a>, <a href="#">Orange</a>,
                  <a href="#">Red</a>, <a href="#">S</a>,
                  <a href="#">Shoe</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- single product end -->
      <div class="productreview">
        <div class="productreview-title">
          <div class="head">
            <h3>Product Reviews</h3>
          </div>
        </div>
        <div class="productreview-body">
          <div class="contain">
            <div class="prdsummary">
              <span>
                <i class="font-13 fa fa-star"></i>
              </span>
              <span> Based on 6 reviews</span>
            </div>
            <div class="prdcontent">
              <div class="productreview-form">
                <form
                  class="review-form"
                  @submit.prevent="onAddReview(product)"
                >
                  <h3 class="form-title">Write a review</h3>
                  <fieldset class="form-field">
                    <div class="review mb-3">
                      <label for="rating">rating</label>
                      <div>
                        <star-rating v-model="ratings"> </star-rating>
                      </div>
                    </div>
                    <div class="headline mb-3">
                      <label for="healine">Headline</label>
                      <input
                        type="text"
                        placeholder="Give your review a title"
                        name="headline"
                        v-model="headline"
                      />
                    </div>
                    <div class="headline mb-3">
                      <label for="">Body of Review</label>
                      <textarea
                        name="comment"
                        id=""
                        rows="10"
                        placeholder="Write your comment here"
                        v-model="body"
                      ></textarea>
                    </div>
                  </fieldset>
                  <fieldset>
                    <fieldset class="form-actions">
                      <input type="submit" class="btn" value="Submit Review" />
                    </fieldset>
                  </fieldset>
                </form>
              </div>
              <div class="p-reviews">
                <div class="spr-review">
                  <div class="spr-review-header">
                    <span
                      class="
                        product-review
                        spr-starratings spr-review-header-starratings
                      "
                      ><span class="reviewLink"
                        ><i class="fa fa-star"></i
                        ><i class="font-13 fa fa-star"></i
                        ><i class="font-13 fa fa-star"></i
                        ><i class="font-13 fa fa-star"></i
                        ><i class="font-13 fa fa-star"></i></span
                    ></span>
                    <h3 class="spr-review-header-title">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <span class="spr-review-header-byline"
                      ><strong>dsacc</strong> on
                      <strong>Apr 09, 2019</strong></span
                    >
                  </div>
                  <div class="spr-review-content">
                    <p class="spr-review-content-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StarRating from "vue-star-rating";
import { mapActions } from "vuex";
export default {
  components: {
    StarRating,
  },
  async asyncData({ $axios, params }) {
    try {
      let product = await $axios.$get(`/api/products/${params.slug}`);

      return {
        product: product.product,
      };
    } catch (err) {
      console.log(err);
    }
  },
  name: "Product",
  data() {
    return {
      quantity: 1,
      color: "",
      size: "",
      ratings: 0,
      body: "",
      headline: "",
    };
  },
  mounted() {
    this.getReview();
    console.log("rev", this.review);
  },
  methods: {
    ...mapActions(["addProductToCart"]),
    categoryPath() {
      return `/products/category/${this.product.category.slug}/`;
    },
    async getReview() {
      try {
        let review = await this.$axios.$get("/api/products/this.product._id");
        console.log(review);
        return {
          review: review,
        };
      } catch (err) {
        console.log(err);
      }
    },

    quantityValue(value) {
      if (value == "plus") {
        this.quantity += 1;
      } else {
        if (this.quantity > 0) {
          this.quantity -= 1;
        }
      }
    },
    addProduct() {
      let product = this.product;
      let quantity = this.quantity;
      let color = this.color;
      let size = this.size;
      this.$store.commit("addToCartProduct", product, quantity, color, size);
    },
    async onAddReview(product) {
      try {
        let response = await this.$axios.post(`/api/reviews/${product._id}`, {
          headline: this.headline,
          body: this.body,
          rating: this.rating,
        });
        console.log(product._id);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>