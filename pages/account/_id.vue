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
                      <label>City <span class="required-f">*</span></label>
                      <input
                        name="postcode"
                        v-model="city"
                        id="input-postcode"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <div class="row">
                    <div class="form-group col-md-6 col-lg-6 col-xl-6">
                      <label for="input-company"
                        >Street Address <span class="required-f">*</span></label
                      >
                      <input
                        name="street"
                        v-model="streetAddress"
                        id="input-postcode"
                        type="text"
                        required
                      />
                    </div>

                    <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                      <label for="input-postcode"
                        >Phone Number <span class="required-f">*</span></label
                      >
                      <input
                        name="phone"
                        v-model="phone"
                        id="input-postcode"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                        placeholder="080-8659-4323"
                        required
                      />
                    </div>
                  </div>
                </fieldset>
                <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                  <span class="btnk mb-3">
                    <input type="submit" class="btnk" value="Sign In" />
                    <b-spinner small v-if="loading"></b-spinner>
                  </span>
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
  async fetch() {
    try {
      let response = await this.$axios.$get("/api/state");
      let address = await this.$axios.$get(
        `/api/address/${this.$route.params.id}`
      );
      this.states = response.addresses.data;
      this.asign(address.address);
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
      states: "",
      address: "",
    };
  },
  methods: {
    asign(address) {
      this.state = address.state;
      this.city = address.city;
      this.phone = address.phoneNumber;
      this.streetAddress = address.streetAddress;
    },
    async onSubmit() {
      try {
        let result = await this.$axios.$put(
          `/api/address/${this.$route.params.id}`,
          {
            state: this.state,
            phoneNumber: this.phone,
            city: this.city,
            streetAddress: this.streetAddress,
          }
        );
        if (result.success) {
          this.$bvToast.toast("Success", {
            varient: "danger",
            solid: true,
          });
          this.$router.push("/account");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>