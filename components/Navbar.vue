<template>
  <div id="wrapper">
    <div class="top-header">
      <div class="container-fluid">
        <div class="row align-cen">
          <div class="col-10 col-lg-4 col-sm-8 col-md-5">
            <p class="phone">
              <i class="anm anm-phone-s"></i>
              +234 80 8659 3423
            </p>
          </div>
          <div class="col-lg-4 col-sm-4 d-none d-lg-block d-md-block col-md-4">
            <div class="text-center">
              <p class="top-header-text">Worldwide express Shipping</p>
            </div>
          </div>
          <div class="col-2 col-lg-4 col-sm-4 col-md-3 menu text-left">
            <span class="user-menu d-block d-lg-none" @click="showUserMenu()">
              <b-icon icon="person-fill"></b-icon>
            </span>
            <ul class="desktopusermenu list-inline d-sm-none">
              <template v-if="$store.state.auth.loggedIn">
                <li>
                  <nuxt-link to="/account">
                    {{ $store.state.auth.user.email }}
                  </nuxt-link>
                </li>
                <li @click="onLogout()" class="logout">Logout</li>
              </template>
              <template v-else>
                <li><nuxt-link to="/login">Login</nuxt-link></li>
                <li><nuxt-link to="/signup">Create Account</nuxt-link></li>
              </template>
            </ul>
            <ul class="customer-links list-inline d-lg-none" :style="phonemenu">
              <template v-if="$store.state.auth.loggedIn">
                <li>
                  <nuxt-link to="/account"> Account </nuxt-link>
                </li>
                <li @click="onLogout()" class="logout"><a>Logout</a></li>
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
          <!-- desktop menu -->
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
          <!-- end desktop menu -->
          <div class="col-2 col-sm-3 col-md-3 col-lg-8 d-lg-none">
            <div class="d-flex flex-column">
              <b-icon icon="x" @click="showmobile()" v-if="showMobile"></b-icon>
              <b-icon icon="list" @click="showmobile()" v-else></b-icon>
            </div>
          </div>
          <div
            class="
              mobile-logo
              col-6 col-md-6 col-sm-6 col-lg-2
              d-block d-lg-none
            "
          >
            <div class="logo">
              <router-link to="/">
                <img src="/img/logo.jpeg" alt="Kingzx" title="Kingzx Store" />
              </router-link>
            </div>
          </div>
          <div class="col-4 col-sm-3 col-md-3 col-lg-2">
            <div class="site-cart">
              <nuxt-link to="/cart" class="site-header__cart" title="Cart">
                <b-icon class="carticon" icon="bag"></b-icon>

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
                <b-icon icon="search"></b-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- search -->
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
    <div class="mobilemenu" :class="{ active: showMobile }">
      <div class="closemobileMenu" @click="showmobile()">
        <b-icon icon="x"></b-icon> Close Menu
      </div>
      <ul id="MobileNav" class="mobile-nav">
        <li class="lvl1 parent megamenu">
          <nuxt-link to="/">Home </nuxt-link>
        </li>

        <li class="lvl1 parent megamenu">
          <nuxt-link to="/products/category">Category </nuxt-link>
          <b-icon icon="dash" @click="showCategory()" v-if="category"></b-icon>
          <b-icon icon="plus" @click="showCategory()" v-else></b-icon>
          <ul :style="mobilecategory">
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/products/category/men">Men </nuxt-link>
            </li>
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/products/women">Women </nuxt-link>
            </li>
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/products/category/kids">Kids </nuxt-link>
            </li>
          </ul>
        </li>
        <li class="lvl1 parent megamenu">
          <nuxt-link to="/producttype">Product Types </nuxt-link>
          <b-icon
            icon="dash"
            @click="showProducttype()"
            v-if="producttype"
          ></b-icon>
          <b-icon icon="plus" @click="showProducttype()" v-else></b-icon>
          <ul :style="mobileproducttype">
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/producttype/shirt">Shirt </nuxt-link>
            </li>
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/producttype/trouser">Trouser </nuxt-link>
            </li>
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/producttype/gown">Gown </nuxt-link>
            </li>
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/producttype/sportswear">Sportswear </nuxt-link>
            </li>
            <li class="lvl1 parent megamenu">
              <nuxt-link to="/producttype/skirt">Skirt </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {
  BIcon,
  BIconPersonFill,
  BIconArrowUp,
  BIconDash,
  BIconList,
  BIconX,
  BIconBag,
  BIconSearch,
  BIconPlus,
} from "bootstrap-vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BIcon,
    BIconPersonFill,
    BIconArrowUp,
    BIconDash,
    BIconX,
    BIconList,
    BIconBag,
    BIconSearch,
    BIconPlus,
  },
  data() {
    return {
      isActive: false,
      query: "",
      userPhoneActive: false,
      category: false,
      producttype: false,
      showMobile: false,
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["getCartLength"]),
    phonemenu() {
      return this.userPhoneActive ? { display: "block" } : { display: "none" };
    },
    mobilecategory() {
      return this.category ? { display: "block" } : { display: "none" };
    },
    mobileproducttype() {
      return this.producttype ? { display: "block" } : { display: "none" };
    },
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
    showUserMenu() {
      this.userPhoneActive = !this.userPhoneActive;
    },
    showCategory() {
      this.category = !this.category;
    },
    showProducttype() {
      this.producttype = !this.producttype;
    },
    showmobile() {
      this.showMobile = !this.showMobile;
    },
  },
};
</script>