<template>
  <div>
    <div>
      <footer class="footer" style="margin-bottom: 0">
        <div class="newsletter-section">
          <div class="container">
            <div class="row">
              <div
                class="
                  col-12 col-sm-12 col-md-12 col-lg-7
                  d-flex
                  justify-content-start
                  align-items-center
                "
              >
                <div class="display-table w-100">
                  <div class="display-table-cell footer-newsletter">
                    <div class="section-header text-center">
                      <label class="h2"
                        ><span>sign up for </span>newsletter</label
                      >
                    </div>
                    <form action="#" method="post">
                      <div class="input-group">
                        <input
                          type="email"
                          class="input-group__field newsletter__input"
                          name="EMAIL"
                          value=""
                          placeholder="Email address"
                          required=""
                        />
                        <span class="input-group__btn">
                          <button
                            type="submit"
                            class="btn newsletter__submit"
                            name="commit"
                            id="Subscribe"
                          >
                            <span class="newsletter__submit-text--large"
                              >Subscribe</span
                            >
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-12 col-sm-12 col-md-12 col-lg-5
                  d-flex
                  justify-content-end
                  align-items-center
                "
              >
                <div class="footer-social">
                  <ul
                    class="list--inline site-footer__social-icons social-icons"
                  >
                    <li>
                      <a
                        class="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Facebook"
                        ><i class="icon icon-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Twitter"
                      >
                        <font-awesome-icon :icon="['fab', 'twitter']" />

                        <span class="icon__fallback-text">Twitter</span></a
                      >
                    </li>
                    <li>
                      <a
                        class="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Pinterest"
                      >
                        <font-awesome-icon :icon="['fab', 'pinterest']" />

                        <span class="icon__fallback-text">Pinterest</span></a
                      >
                    </li>
                    <li>
                      <a
                        class="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Instagram"
                      >
                        <font-awesome-icon :icon="['fab', 'instagram']" />

                        <span class="icon__fallback-text">Instagram</span></a
                      >
                    </li>
                    <li>
                      <a
                        class="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Tumblr"
                      >
                        <font-awesome-icon :icon="['fab', 'tumblr']" />

                        <span class="icon__fallback-text">Tumblr</span></a
                      >
                    </li>
                    <li>
                      <a class="social-icons__link" href="#" target="_blank">
                        <font-awesome-icon :icon="['fab', 'youtube']" />

                        <span class="icon__fallback-text">YouTube</span></a
                      >
                    </li>
                    <li>
                      <a
                        class="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Vimeo"
                      >
                        <font-awesome-icon :icon="['fab', 'vimeo']" />

                        <span class="icon__fallback-text">Vimeo</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer">
          <div class="container">
            <!--Footer Links-->
            <div class="footer-top">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 class="h4">Quick Shop</h4>
                  <ul>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Sportswear</a></li>
                    <li><a href="#">Sale</a></li>
                  </ul>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 class="h4">Informations</h4>
                  <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms &amp; condition</a></li>
                    <li><a href="#">My Account</a></li>
                  </ul>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 class="h4">Customer Services</h4>
                  <ul>
                    <li><a href="#">Request Personal Data</a></li>
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Orders and Returns</a></li>
                    <li><a href="#">Support Center</a></li>
                  </ul>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                  <h4 class="h4">Contact Us</h4>
                  <ul class="addressFooter">
                    <li>
                      <i class="icon anm anm-map-marker-al"></i>
                      <p>55 Gally Ilorin,<br />2568 steet, 23568 KWA</p>
                    </li>
                    <li class="phone">
                      <i class="icon anm anm-phone-s"></i>
                      <p>(234) 000 000 0000</p>
                    </li>
                    <li class="email">
                      <i class="icon anm anm-envelope-l"></i>
                      <p>sales@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--End Footer Links-->
            <hr />
            <div class="footer-bottom">
              <div class="row">
                <!--Footer Copyright-->
                <div
                  class="
                    col-12 col-sm-12 col-md-12 col-lg-12
                    order-1 order-md-0 order-lg-0 order-sm-1
                    copyright
                    text-sm-center text-md-left text-lg-left
                  "
                >
                  <p class="text-center py-2">Copyright (c) 2022</p>
                </div>
                <!--End Footer Copyright-->

                <!--End Footer Payment Icon-->
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <!-- modal -->
    <no-ssr>
      <div v-if="$store.state.isActive">
        <div
          class="modal fade quick-view-popup show"
          id="content_quickview"
          :class="{ active: $store.state.isActive }"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div id="add-to-cart">
                  <div class="productdetail">
                    <!-- start modal close -->
                    <a
                      @click="removeModal()"
                      data-dismiss="modal"
                      class="model-close-btn pull-right"
                      title="close"
                      ><span class="icon fa fa-times">
                        <font-awesome-icon :icon="['fa', 'fa-times']" />X</span
                      ></a
                    >
                    <!-- modal close -->
                    <div class="row">
                      <!-- img -->
                      <div
                        class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sm-mt-2"
                      >
                        <div class="productdetail-img">
                          <div class="zoompro-wrap product-zoom pl-20">
                            <div class="imgbox">
                              <img
                                alt=""
                                :src="$store.state.modalProduct.photo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- prod img -->
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="productdetail_info">
                          <h1 class="productdetail_title">
                            {{ $store.state.modalProduct.title }}
                          </h1>
                          <div class="productdetail_stock">
                            <div class="product-stock">
                              <span class="instock">In Stock</span>
                              <span class="outstock hide">Unavailable</span>
                            </div>
                            <div class="product-sku">
                              SKU: <span class="variant-sku">19115-rdxs</span>
                            </div>
                            <div class="product-review">
                              <a class="reviewLink" href="#tab2"
                                ><i class="font-13 fa fa-star"></i
                                ><i class="font-13 fa fa-star"></i
                                ><i class="font-13 fa fa-star"></i
                                ><i class="font-13 fa fa-star-o"></i
                                ><i class="font-13 fa fa-star-o"></i
                                ><span class="spr-badge-caption"
                                  >6 reviews</span
                                ></a
                              >
                            </div>
                          </div>
                          <p class="productdetail_price">
                            <span class="price"
                              >XS:${{
                                $store.state.modalProduct.price.XS.toFixed(2)
                              }}
                            </span>
                            <span class="price"
                              >S:${{
                                $store.state.modalProduct.price.S.toFixed(2)
                              }}
                            </span>
                            <span class="price"
                              >M:${{
                                $store.state.modalProduct.price.M.toFixed(2)
                              }}
                            </span>
                            <span class="price"
                              >L:${{
                                $store.state.modalProduct.price.L.toFixed(2)
                              }}
                            </span>
                            <span class="price"
                              >XL:${{
                                $store.state.modalProduct.price.XL.toFixed(2)
                              }}
                            </span>
                          </p>
                          <div class="productdetail_description">
                            <p>
                              {{ $store.state.modalProduct.description }}
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
                                  >Color:
                                  <span class="value">{{ color }}</span></label
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
                                  class="
                                    swatch-element
                                    color
                                    dark-green
                                    available
                                  "
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
                                  >Size:
                                  <span class="value">{{ size }}</span></label
                                >
                                <div
                                  data-value="XS"
                                  class="swatch-element xs available"
                                >
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
                                <div
                                  data-value="S"
                                  class="swatch-element s available"
                                >
                                  <input
                                    class="swatchInput"
                                    id="swatch-1-s"
                                    type="radio"
                                    name="option-1"
                                    value="S"
                                    v-model="size"
                                  />
                                  <label
                                    class="swatchbox medium"
                                    for="swatch-1-s"
                                    title="S"
                                    >S</label
                                  >
                                </div>
                                <div
                                  data-value="M"
                                  class="swatch-element m available"
                                >
                                  <input
                                    class="swatchInput"
                                    id="swatch-1-m"
                                    type="radio"
                                    name="option-1"
                                    value="M"
                                    v-model="size"
                                  />
                                  <label
                                    class="swatchbox medium"
                                    for="swatch-1-m"
                                    title="M"
                                    >M</label
                                  >
                                </div>
                                <div
                                  data-value="L"
                                  class="swatch-element l available"
                                >
                                  <input
                                    class="swatchInput"
                                    id="swatch-1-l"
                                    type="radio"
                                    name="option-1"
                                    value="L"
                                    v-model="size"
                                  />
                                  <label
                                    class="swatchbox medium"
                                    for="swatch-1-l"
                                    title="L"
                                    >L</label
                                  >
                                </div>
                                <div
                                  data-value="XL"
                                  class="swatch-element xl available"
                                >
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
                                      ><font-awesome-icon
                                        :icon="['fa', 'minus']"
                                    /></span>
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
                                      <font-awesome-icon
                                        :icon="['fa', 'plus']"
                                      />
                                      <i
                                        class="fa fa-plus"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="productdetail_action_submit">
                                <button
                                  type="button"
                                  name="add"
                                  class="btn"
                                  @click="addProduct($store.state.modalProduct)"
                                >
                                  <span id="AddToCartText-product-template"
                                    >Add to cart</span
                                  >
                                </button>
                              </div>
                            </div>
                            <!-- End Product Add to cart -->
                          </form>
                        </div>
                      </div>
                    </div>
                    <!-- end single product -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: 1,
      product: {},
      size: "M",
      color: "Black",
    };
  },
  mounted() {},
  methods: {
    quantityValue(value) {
      if (value == "plus") {
        this.quantity += 1;
      } else {
        if (this.quantity > 1) {
          this.quantity -= 1;
        }
      }
    },
    addProduct(product) {
      let item = {
        product: product,
        quantity: this.quantity,
        color: this.color,
        size: this.size,
      };
      this.$store.commit("addToCartProduct", item);
      this.$bvToast.toast("Product add to cart", {
        varient: "danger",
        solid: true,
        noCloseButton: true,
        autoHideDelay: 3000,
      });
    },
    removeModal() {
      this.$store.commit("removeModal");
    },
  },
};
</script>