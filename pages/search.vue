<template>
  <main>
    <!-- breadcrumb -->
    <div class="bredcrumbWrap">
      <div class="container breadcrumbs">
        <router-link to="/" title="Back to the home page">Home</router-link
        ><span aria-hidden="true">›</span><span> Search </span>
      </div>
    </div>
    <!-- breadcrumb ends -->
    <!-- page -->
    <div class="page-category">
      <div class="page-category-header">
        <div class="page-category-hero">
          <div class="page-category-hero__image">
            <img
              class="imgg"
              data-src="assets/images/cat-women2.jpg"
              src="/img/cat-women1.jpg"
              alt="Women"
              title="Women"
            />
          </div>
          <div class="collection-hero__title-wrapper">
            <h1 class="collection-hero__title page-width">Search result</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <!-- sidebar -->

          <!-- end sidebar -->
          <div class="col-12 col-sm-12 col-md-9 col-lg-9 sidebar filterbar">
            <div class="category-description">
              <h3>Search</h3>
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
                        >Showing: {{ products.length }}</span
                      >
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 text-Fpright">
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
                    v-show="grid"
                    v-for="product in products"
                    v-bind:key="product.objectID"
                    v-bind:product="product"
                  />
                  <ProductList
                    v-show="list"
                    v-for="product in products"
                    v-bind:key="product.objectID"
                    v-bind:product="product"
                  />
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
export default {
  watchQuery: ["title"],
  async asyncData({ $axios, query }) {},
  name: "Search",
  data() {
    return {
      products: [],
      grid: true,
      list: false,
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    async search() {
      try {
        let products = await this.$axios.$post("/api/search", {
          title: this.$route.query.title,
        });
        this.products = products;
        console.log(this.products);
      } catch (err) {
        console.log(err);
      }
    },
    showGrid() {
      this.grid = true;
      this.list = false;
    },
    showList() {
      this.list = true;
      this.grid = false;
    },
  },
};
</script>