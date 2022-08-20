URL = "http://localhost:4000";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "client",
    script: [{ src: "https://js.stripe.com/v3/" }],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/localStorage.js", ssr: false },
    { src: "~/plugins/error-handler.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // styleResources: {
  //   scss: [
  //     "~/assets/scss/style.scss",
  //     "~/assets/scss/sections/section.scss",
  //     "~/assets/scss/sections/slide.scss",
  //   ],
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    Proxy: true,
    baseURL: "http://localhost:4000",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  Proxy: {
    "/api": URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    redirect: {
      login: "/login",
      logout: "/",
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/auth/login",
            propertyName: "token",
          },
          logout: true,
        },
      },
    },
  },
};
