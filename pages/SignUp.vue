<template>
  <div class="page-sign-up">
    <div class="page-log-in">
      <div class="page section-header text-center">
        <div class="page-title">
          <div class="wrapper">
            <h1 class="page-width">CREATE AN ACCOUNT</h1>
          </div>
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
                @submit.prevent="onSubmitForm"
              >
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="form-group">
                      <label for="CustomerEmail">Name</label>
                      <input
                        name="customer[email]"
                        placeholder=""
                        id="CustomerName"
                        class=""
                        autocorrect="off"
                        autocapitalize="off"
                        autofocus=""
                        v-model="name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="form-group">
                      <label for="CustomerEmail">Email</label>
                      <input
                        name="customer[email]"
                        placeholder=""
                        id="CustomerEmail"
                        class=""
                        autocorrect="off"
                        autocapitalize="off"
                        v-model="email"
                        type="email"
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
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="form-group">
                      <label for="CustomerPassword">Password2</label>
                      <input
                        type="password"
                        name="customerPassword2"
                        placeholder=""
                        id="CustomerPassword2"
                        class=""
                        v-model="password2"
                        required
                      />
                    </div>
                  </div>
                  <div
                    class="notification is-danger"
                    style="color: red"
                    v-if="errors.length"
                  >
                    <p v-for="error in errors" v-bind:key="error">
                      {{ error }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="submit" class="btnk mb-3" value="Sign Up" />
                    <p class="mb-4">
                      <a href="#" id="RecoverPassword"
                        >Already have an account?</a
                      >
                      &nbsp; | &nbsp;
                      <nuxt-link
                        to="/login"
                        class="account"
                        id="customer_register_link"
                        >Sign in</nuxt-link
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
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: [],
    };
  },
  methods: {
    async onSubmitForm() {
      this.loading = true;

      this.errors = [];
      if (this.password !== this.password2) {
        this.errors.push("The passwords doesn't match");
      }
      try {
        if (!this.errors.length) {
          const formData = {
            name: this.name,
            email: this.email,
            password: this.password,
          };

          let response = await this.$axios.post("/api/auth/signup", formData);

          if (response.data.success) {
            this.$auth.loginWith("local", {
              data: {
                email: this.email,
                password: this.password,
              },
            });
          }
        }
      } catch (err) {
        console.log(err);
        this.errors.push("Server error. Try again");
      }
    },
  },
};
</script>