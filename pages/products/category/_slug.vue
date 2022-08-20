<template>
  <div class="page-category">
    <div class="page-category-header">
      <div class="page-category-hero">
        <div class="page-category-hero__image">
          <img
            class="imgg"
            data-src="assets/images/cat-women2.jpg"
            src="/img/cat-women2.jpg"
            alt="Women"
            title="Women"
          />
        </div>
        <div class="collection-hero__title-wrapper">
          <h1 class="collection-hero__title page-width">
            {{ category.name }} category
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- sidebar -->
        <div class="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
          <div class="closeFilter d-block d-md-none d-lg-none">
            <i class="icon icon anm anm-times-l"></i>
          </div>
          <div class="sidebar_tags">
            <!--Categories-->
            <div class="sidebar_widget categories filter-widget">
              <div class="widget-title"><h2>Categories</h2></div>
              <div class="widget-content">
                <ul class="sidebar_categories">
                  <li
                    class="level1 sub-level"
                    v-for="category in categories"
                    :key="category._id"
                  >
                    <nuxt-link to="" class="site-nav">{{
                      category.type
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <!--Categories-->
            <!--Price Filter-->

            <!--End ter-->
            <!--Brand-->
            <div class="sidebar_widget filterBox filter-widget">
              <div class="widget-title"><h2>Brands</h2></div>
              <div class="widget-content">
                <ul class="sidebar_categories">
                  <li
                    class="level1 sub-level"
                    v-for="brand in brands"
                    :key="brand._id"
                  >
                    <nuxt-link to="" class="site-nav">{{
                      brand.type
                    }}</nuxt-link>
                  </li>

                  <li class="lvl-1">
                    <a href="#;" class="site-nav">Accessories</a>
                  </li>
                </ul>
              </div>
            </div>
            <!--End Brand-->
            <!--Popular Products-->
            <div class="sidebar_widget">
              <div class="widget-title"><h2>Popular Products</h2></div>
              <div class="widget-content">
                <div class="list list-sidebar-products">
                  <div class="grid">
                    <div class="grid__item">
                      <div class="mini-list-item">
                        <div class="mini-view_image">
                          <a class="grid-view-item__link" href="#">
                            <img class="grid-view-item__image" src="" alt="" />
                          </a>
                        </div>
                        <div class="details">
                          <a class="grid-view-item__title" href="#"
                            >Cena Skirt</a
                          >
                          <div class="grid-view-item__meta">
                            <span class="price"
                              ><span class="money">$173.60</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid__item">
                      <div class="mini-list-item">
                        <div class="mini-view_image">
                          <a class="grid-view-item__link" href="#"
                            ><img class="grid-view-item__image" src="" alt=""
                          /></a>
                        </div>
                        <div class="details">
                          <a class="grid-view-item__title" href="#"
                            >Block Button Up</a
                          >
                          <div class="grid-view-item__meta">
                            <span class="product-price__price"
                              ><span class="money">$378.00</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid__item">
                      <div class="mini-list-item">
                        <div class="mini-view_image">
                          <a class="grid-view-item__link" href="#"
                            ><img class="grid-view-item__image" src="" alt=""
                          /></a>
                        </div>
                        <div class="details">
                          <a class="grid-view-item__title" href="#"
                            >Balda Button Pant</a
                          >
                          <div class="grid-view-item__meta">
                            <span class="product-price__price"
                              ><span class="money">$278.60</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid__item">
                      <div class="mini-list-item">
                        <div class="mini-view_image">
                          <a class="grid-view-item__link" href="#"
                            ><img class="grid-view-item__image" src="" alt=""
                          /></a>
                        </div>
                        <div class="details">
                          <a class="grid-view-item__title" href="#"
                            >Border Dress in Black/Silver</a
                          >
                          <div class="grid-view-item__meta">
                            <span class="product-price__price"
                              ><span class="money">$228.00</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--End Popular Products-->
            <!--Banner-->
            <div class="sidebar_widget static-banner">
              <img src="/img/side-banner-2.jpg" alt="" />
            </div>
            <!--Banner-->
            <!--Information-->
            <div class="sidebar_widget">
              <div class="widget-title"><h2>Information</h2></div>
              <div class="widget-content">
                <p>
                  Use this text to share information about your brand with your
                  customers. Describe a product, share announcements, or welcome
                  customers to your store.
                </p>
              </div>
            </div>
            <!--end Information-->
            <!--Product Tags-->
            <div class="sidebar_widget">
              <div class="widget-title">
                <h2>Product Tags</h2>
              </div>
              <div class="widget-content">
                <ul class="product-tags">
                  <li>
                    <a href="#" title="Show products matching tag $100 - $400"
                      >$100 - $400</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag $400 - $600"
                      >$400 - $600</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag $600 - $800"
                      >$600 - $800</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Above $800"
                      >Above $800</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Allen Vela"
                      >Allen Vela</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Black"
                      >Black</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Blue">Blue</a>
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Cantitate"
                      >Cantitate</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Famiza"
                      >Famiza</a
                    >
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Gray">Gray</a>
                  </li>
                  <li>
                    <a href="#" title="Show products matching tag Green"
                      >Green</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag Hot">Hot</a>
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag jean shop"
                      >jean shop</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag jesse kamm"
                      >jesse kamm</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag L">L</a>
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag Lardini"
                      >Lardini</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag lareida"
                      >lareida</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag Lirisla"
                      >Lirisla</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag M">M</a>
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag mini-dress"
                      >mini-dress</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag Monark"
                      >Monark</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag Navy">Navy</a>
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag new">new</a>
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag new arrivals"
                      >new arrivals</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag Orange"
                      >Orange</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag oxford"
                      >oxford</a
                    >
                  </li>
                  <li style="display: none">
                    <a href="#" title="Show products matching tag Oxymat"
                      >Oxymat</a
                    >
                  </li>
                </ul>
                <span class="btn btn--small btnview">View all</span>
              </div>
            </div>
            <!--end Product Tags-->
          </div>
        </div>
        <!-- end sidebar -->
        <div class="col-12 col-sm-12 col-md-9 col-lg-9 sidebar filterbar">
          <div class="category-description">
            <h3>Category Description</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
          <hr />
          <div class="product-list">
            <!-- Toolbar -->
            <button
              type="button"
              class="btn btn-filter d-block d-md-none d-lg-none"
            >
              Product Filters
            </button>
            <div class="toolbar">
              <div class="filters-toolbar-wrapper">
                <div class="row">
                  <div
                    class="
                      col-4 col-md-4 col-lg-4
                      filters-toolbar__item
                      collection-view-as
                      d-flex
                      justify-content-start
                      align-items-center
                    "
                  >
                    <a
                      title="Grid View"
                      class="change-view change-view--active"
                      @click="showGrid()"
                      :class="{ active: grid }"
                    >
                      <img src="/img/grid.jpg" alt="Grid" />
                    </a>
                    <a
                      title="List View"
                      class="change-view"
                      @click="showList()"
                      :class="{ active: list }"
                    >
                      <img src="/img/list.jpg" alt="List" />
                    </a>
                  </div>
                  <div
                    class="
                      col-4 col-md-4 col-lg-4
                      text-center
                      filters-toolbar__item filters-toolbar__item--count
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <span class="filters-toolbar__product-count"
                      >Showing: 22</span
                    >
                  </div>
                  <div class="col-4 col-md-4 col-lg-4 text-right">
                    <div class="filters-toolbar__item">
                      <label for="SortBy" class="hidden">Sort</label>
                      <select
                        name="SortBy"
                        id="SortBy"
                        class="
                          filters-toolbar__input filters-toolbar__input--sort
                        "
                      >
                        <option value="title-ascending" selected="selected">
                          Sort
                        </option>
                        <option>Best Selling</option>
                        <option>Alphabetically, A-Z</option>
                        <option>Alphabetically, Z-A</option>
                        <option>Price, low to high</option>
                        <option>Price, high to low</option>
                        <option>Date, new to old</option>
                        <option>Date, old to new</option>
                      </select>
                      <input
                        class="collection-header__default-sort"
                        type="hidden"
                        value="manual"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end toolbar -->
            <div class="grid-products grid--view-items">
              <div class="row">
                <ProductBox
                  v-for="product in products"
                  v-bind:key="product.id"
                  v-bind:product="product"
                />
                <ProductList
                  v-for="product in products"
                  v-bind:key="product.id"
                  v-bind:product="product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      let categories = $axios.$get("/api/categories");
      let brands = $axios.$get("/api/brands");
      let products = $axios.$get(`/api/products/category/${params.slug}`);

      const [catResponse, brandResponse, productResponse] = await Promise.all([
        categories,
        brands,
        products,
      ]);
      console.log(productResponse);
      return {
        categories: catResponse.categories,
        brands: brandResponse.brands,
        products: productResponse.products,
      };
    } catch (err) {
      console.log(err);
    }
  },
  name: "CategorySlug",
  data() {
    return {
      category: {
        products: [],
      },
      men: false,
      women: true,
    };
  },
  mounted() {
    // this.changePic();
  },
  watch: {},
  methods: {
    changePic() {
      console.log(this.products);
      if (this.products.category.type == "men") {
        this.men != this.men;
        this.women != this.women;
        console.log("wo", this.men, this.women);
      }
    },
  },
};
</script>