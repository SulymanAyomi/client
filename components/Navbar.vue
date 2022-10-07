<template>
  <div id="wrapper">
    <div class="top-header">
      <div class="container-fluid">
        <div class="row align-cen">
          <div class="col-lg-4">
            <p class="phone">
              <i class="anm anm-phone-s"></i>
              +234 80 8659 3423
            </p>
          </div>
          <div class="col-lg-4">
            <div class="text-center">
              <p class="top-header-text">Worldwide express Shipping</p>
            </div>
          </div>
          <div class="col-lg-4 menu text-left">
            <span class="user-menu d-block d-lg-none"
              ><i class="anm anm-user-al" aria-hidden="true"></i
            ></span>
            <ul class="customer-links list-inline">
              <template v-if="$store.state.auth.loggedIn">
                <li>
                  <nuxt-link to="/account">{{
                    $auth.$state.user.email
                  }}</nuxt-link>
                </li>
                <li @click="onLogout()" class="logout">Logout</li>
              </template>
              <template v-else>
                <li><nuxt-link to="/login">Login</nuxt-link></li>
                <li><nuxt-link to="/signup">Create Account</nuxt-link></li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-wrapper d-flex border-bottom">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="logo col-md-2 col-lg-2 d-none d-lg-block">
            <router-link to="/">
              <img src="/img/logo.jpeg" alt="Kingzx" title="Kingzx Store" />
            </router-link>
          </div>
          <div class="logo col-md-2 col-lg-8 d-none d-lg-block">
            <nav class="g-item">
              <ul class="sitenav medium text-center" id="siteNav">
                <li class="lvl1 parent dropdown">
                  <nuxt-link to="/" class="menu"
                    >Home <i class="anm anm-angle-down-l"></i
                  ></nuxt-link>
                </li>
                <li class="lvl1 parent dropdown">
                  <nuxt-link to="/products/category" class="menu" href="#"
                    >Category <i class="anm anm-angle-down-l"></i
                  ></nuxt-link>
                  <ul id="drop" class="dropdown drop">
                    <div class="visi">
                      <li>
                        <nuxt-link to="/products/category/men" class="site-nav"
                          >Men</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/products/category/women"
                          class="site-nav"
                          >Women</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link to="/products/category/kids" class="site-nav"
                          >Kids</nuxt-link
                        >
                      </li>
                    </div>
                  </ul>
                </li>
                <li class="lvl1 parent dropdown">
                  <a class="menu" href="#"
                    >Product Types <i class="anm anm-angle-down-l"></i
                  ></a>
                  <ul class="dropdown drop">
                    <li>
                      <nuxt-link to="/producttype/shirt" class="site-nav"
                        >Shirt</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/producttype/trouser" class="site-nav"
                        >Trouser</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/producttype/gown" class="site-nav"
                        >Gown</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/producttype/sportswear" class="site-nav"
                        >Sportswear</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/producttype/skirt" class="site-nav"
                        >Skirt</nuxt-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-4 col-sm-3 col-md-3 col-lg-2">
            <div class="site-cart mt-2 mx-2">
              <nuxt-link to="/cart" class="site-header__cart" title="Cart">
                <font-awesome-layers class="fa-2x">
                  <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                </font-awesome-layers>
                <span
                  id="CartCount"
                  class="site-cart-count"
                  data-cart-render="item_count"
                  >{{ getCartLength }}</span
                >
              </nuxt-link>
            </div>
            <div class="site-header__search" @click="isActive = !isActive">
              <span type="button" class="search">
                <i class="fa fa-search icon"></i>
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="newsletter-section search hide" :class="{ active: isActive }">
        <div class="container">
          <div class="row" style="justify-content: space-around">
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
                  <div class="section-header text-center"></div>
                  <form action="#" method="post">
                    <div class="input-group">
                      <input
                        type="text"
                        class="input-group__field newsletter__input"
                        name="search"
                        placeholder="Enter Search"
                        v-model="query"
                      />
                      <span class="input-group__btn">
                        <button
                          type="submit"
                          class="btn newsletter__submit"
                          name="search"
                          id="Search"
                          @click="onSearch"
                        >
                          <span class="newsletter__submit-text--large"
                            >Search</span
                          >
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isActive: false,
      query: "",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["getCartLength"]),
  },
  methods: {
    onSearch() {
      this.$router.push({
        path: "/search",
        query: { title: this.query },
      });
    },
    onLogout() {
      this.$auth.logout();
    },
  },
};
</script>