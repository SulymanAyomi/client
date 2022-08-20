<template>
  <div>
    {{ message }}
    <div v-show="status">
      <nuxt-link to="/account/verify">click here to procced</nuxt-link>
    </div>
    <div class="text-center" v-show="status2">
      <h4>Enter your email to request for activation link</h4>
      <form
        id="CustomerLoginForm"
        accept-charset="UTF-8"
        class="contact-form"
        @submit.prevent="requestToken"
      >
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
              <label for="CustomerEmail">Email</label>
              <input
                name="email"
                placeholder=""
                id="CustomerEmail"
                class=""
                autocorrect="off"
                autocapitalize="off"
                autofocus=""
                v-model="email"
              />
            </div>
            <input type="submit" class="btnk mb-3" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: false,
      status2: false,
      email: "",
    };
  },
  mounted() {
    this.check();
  },
  methods: {
    async check() {
      await this.$axios
        .$post("/api/auth/signup/verify", { token: this.$params.token })
        .then((response) => {
          if (response.success) {
            this.message = response.message;
            this.status = true;
            this.$router.push("/account/address");
          } else {
            this.message = response.message;
            this.status2 = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async requestToken() {
      await this.$axios
        .$post("/api/auth/signup/requestToken", { email: this.email })
        .then((response) => {
          if (response.success) {
            this.message = response.message;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>