<template>
  <div class="page-log-in">
    <div class="page section-header text-center">
      <div class="page-title">
        <div class="wrapper">
          <h1 class="page-width">Add Address</h1>
          <p>
            All your orders will be delivered to the address. You can always
            change it from your <NuxtLink to="/account"> account page</NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
          <div class="mb-4">
            <div class="create-ac-content bg-light-gray padding-20px-all">
              <form @submit.prevent="onSubmit">
                <fieldset>
                  <h2 class="login-title mb-3">Address details</h2>
                  <div class="row">
                    <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                      <label for="input-firstname"
                        >First Name <span class="required-f">*</span></label
                      >
                      <input
                        name="firstname"
                        v-model="firstName"
                        id="input-firstname"
                        type="text"
                      />
                    </div>
                    <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                      <label for="input-lastname"
                        >Last Name <span class="required-f">*</span></label
                      >
                      <input
                        name="lastname"
                        v-model="lastName"
                        id="input-lastname"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                      <label for="input-email"
                        >State <span class="required-f">*</span></label
                      >
                      <select
                        name="country_id"
                        id="inut-country"
                        v-model="state"
                      >
                        <option value="">--- Please Select ---</option>
                        <option
                          v-for="state in states"
                          v-bind:key="state.Name"
                          :value="state.Name"
                        >
                          {{ state.Name }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                      <label for="input-telephone"
                        >City <span class="required-f">*</span></label
                      >
                      <input
                        name="postcode"
                        v-model="city"
                        id="input-postcode"
                        type="text"
                        required="required"
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <div class="row">
                    <div class="form-group col-md-6 col-lg-6 col-xl-6">
                      <label for="input-company">Street Address</label>
                      <input
                        name="street"
                        v-model="streetAddress"
                        id="input-postcode"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                      <label for="input-postcode"
                        >Phone Number <span class="required-f">*</span></label
                      >
                      <input
                        name="phone"
                        v-model="phone"
                        id="input-postcode"
                        type="text"
                        required="required"
                      />
                    </div>
                  </div>
                </fieldset>
                <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                  {{ state }}
                  <input type="submit" class="btnk mb-3" value="Submit" />
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

  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/state");
      console.log(response.addresses.data);
      return {
        states: response.addresses.data,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      state: "lagos",
      phone: "",
      city: "",
      streetAddress: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        let result = await this.$axios.$post("/api/addresses", {
          firstName: this.firstName,
          lastName: this.lastName,
          state: this.state,
          phoneNumber: this.phone,
          city: this.city,
          streetAddress: this.streetAddress,
        });
        if (result.status) {
          this.$router.push("/account");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>