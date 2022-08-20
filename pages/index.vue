<template>
  <div class="home">
    <section class="is-medium mb-6">
      <div class="slideshow-wrapper p-0">
        <div class="slideshow">
          <figure class="image" style="width: 100%">
            <img src="/img/home11-grid-banner2.jpg" />
          </figure>
          <div class="slidetext">
            <div class="slidecontainer">
              <div class="caption">
                <h1 class="title">Mid season sale</h1>
                <p class="subtitle">Up to 70% off on selected items</p>
                <nuxt-link to="/products/"
                  ><span class="btn">shop now</span></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center header">
            <h2 class="is-size-2 header-1">New Arrivals</h2>
            <p>Grab these new items before they are gone!</p>
          </div>

          <div class="col-12 px-3">
            <div class="row">
              <ProductBox
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:product="product"
              />
            </div>
          </div>
        </div>
      </div>
      <template>
        <div>
          <font-awesome-icon :icon="['fas', 'adjust']" />
          <font-awesome-icon icon="dollar-sign" style="font-size: 30px" />
          <font-awesome-icon icon="cog" />

          <font-awesome-layers class="fa-4x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="check"
              transform="shrink-6"
              :style="{ color: 'white' }"
            />
          </font-awesome-layers>

          <font-awesome-layers full-width class="fa-4x">
            <font-awesome-icon icon="calendar" />
            <font-awesome-layers-text
              transform="shrink-8 down-3"
              value="27"
              class="fa-inverse"
            />
          </font-awesome-layers>
        </div>
      </template>
    </section>
  </div>
</template>
    </section>
  </div>
</template>
    </section>
  </div>
  
</template>

<script>
export default {};
</script>


<script>
export default {
  async asyncData({ $axios, $errorHandler }) {
    try {
      let response = await $axios.$get("/api/products");
      return {
        products: response.products,
      };
    } catch (err) {
      console.log(err);
    }
  },
  name: "IndexPage",
};
</script>
