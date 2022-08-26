<template>
  <div class="page-log-in">
    <div class="page section-header text-center">
      <div class="page-title">
        <div class="wrapper"><h1 class="page-width">Login</h1></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
          <div class="mb-4">
            <form
              id="CustomerLoginForm"
              accept-charset="UTF-8"
              class="contact-form"
              @submit.prevent="onLogin"
            >
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <label for="CustomerEmail">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder=""
                      id="CustomerEmail"
                      class=""
                      autocorrect="off"
                      autocapitalize="off"
                      autofocus=""
                      v-model="email"
                      required
                    />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <label for="CustomerPassword">Password</label>
                    <input
                      type="password"
                      name="customer[password]"
                      placeholder=""
                      id="CustomerPassword"
                      class=""
                      v-model="password"
                      required
                    />
                  </div>
                </div>
                <div
                  class="notification is-danger"
                  style="color: red"
                  v-if="errors.length"
                >
                  <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                </div>
              </div>
              <div class="row">
                <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                  <input type="submit" class="btnk mb-3" value="Sign In" />
                  <p class="mb-4">
                    <a href="#" id="RecoverPassword">Forgot your password?</a>
                    &nbsp; | &nbsp;
                    <nuxt-link
                      to="/signup"
                      class="account"
                      id="customer_register_link"
                      >Create account</nuxt-link
                    >
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  name: "IndexPage",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async onLogin() {
      try {
        this.loading = true;
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        if (this.$store.state.auth.loggedIn) {
          toPath = "/cart";
          this.$router.push(toPath);
        }
      } catch (err) {
        console.log("kkhfcvb", err);
        this.errors.push(err.response.data.message);
      }
    },
  },
};
</script>