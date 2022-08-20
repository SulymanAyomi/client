<template>
  <div class="page-cart">
    <div class="page section-header text-center">
      <div class="page-title">
        <div class="wrapper"><h1 class="page-width">Account</h1></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-12 col-sm-12 col-lg-6">
          <div class="create-ac-content">
            <div class="cart">
              <h2 class="login-title mb-3">My orders</h2>
              <table>
                <tbody>
                  <OrderSummary
                    v-for="order in orders"
                    v-bind:key="order._id"
                    v-bind:order="order"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="col-6 col-md-6 col-sm-6 col-lg-6"
          v-for="address in addresses"
          v-bind:key="address._id"
        >
          <div class="create-ac-content bg-light-gray padding-20px-all">
            <form>
              <fieldset>
                <h2 class="login-title mb-3">Shipping details</h2>
                <div class="row">
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-firstname"
                      >Full Name <span class="required-f">*</span></label
                    >
                    <input
                      name="firstname"
                      v-model="first_name"
                      id="input-firstname"
                      type="text"
                      :placeholder="$auth.$state.user.name"
                      readonly="readonly"
                    />
                  </div>
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-lastname"
                      >Last Name <span class="required-f">*</span></label
                    >
                    <input
                      name="lastname"
                      v-model="last_name"
                      id="input-lastname"
                      type="text"
                      readonly="readonly"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-email"
                      >E-Mail <span class="required-f">*</span></label
                    >
                    <input
                      name="email"
                      value=""
                      id="input-email"
                      type="email"
                      :placeholder="$auth.$state.user.email"
                      readonly="readonly"
                    />
                  </div>
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-telephone"
                      >Telephone <span class="required-f">*</span></label
                    >
                    <input
                      name="telephone"
                      v-model="email"
                      id="input-telephone"
                      type="tel"
                      :placeholder="address.phoneNumber"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <div class="row">
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-email"
                      >State <span class="required-f">*</span></label
                    >
                    <select name="country_id" id="inut-country" v-model="state">
                      <option value="">--- Please Select ---</option>
                      <option
                        v-for="state in states"
                        v-bind:key="state.Name"
                        value="244"
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

                <fieldset>
                  <div class="row">
                    <div class="form-group col-md-6 col-lg-6 col-xl-6">
                      <label for="input-company">Street Address</label>
                      <input
                        name="street"
                        v-model="streetAddress"
                        id="input-postcode"
                        type="text"
                        :placeholder="address.streetAddress"
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
                        readonly="readonly"
                        required="required"
                        :placeholder="address.phoneNumber"
                      />
                    </div>
                    <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                      <label for="input-country"
                        >Delivery Instructions
                        <span class="required-f">*</span></label
                      >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        v-model="info"
                        :placeholder="address.deliveryInstructions"
                        readonly="readonly"
                      ></textarea>
                    </div>
                  </div>
                </fieldset>
                <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                  <input type="submit" class="btnk mb-3" value="Submit" />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-3 col-md-3 col-sm-3 col-lg-3"
          v-for="address in addresses"
          v-bind:key="address._id"
        >
          <div class="create-ac-content bg-light-gray padding-20px-all">
            <h2 class="login-title mb-3">Shipping details</h2>
            <input
              name="firstname"
              v-model="first_name"
              id="input-firstname"
              type="text"
              :placeholder="$auth.$state.user.name"
              readonly="readonly"
            />
            <input
              name="lastname"
              v-model="last_name"
              id="input-lastname"
              type="text"
              readonly="readonly"
            />

            <input
              name="email"
              value=""
              id="input-email"
              type="email"
              :placeholder="$auth.$state.user.email"
              readonly="readonly"
            />
            <div>
              <address>.phoneNumbers</address>
            </div>
            <div>
              {{ adress }}
            </div>
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
            <input
              name="street"
              v-model="streetAddress"
              id="input-postcode"
              type="text"
              :placeholder="address.streetAddress"
            />

            <input
              name="phone"
              v-model="phone"
              id="input-postcode"
              type="text"
              readonly="readonly"
              required="required"
              :placeholder="address.phoneNumber"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",

  async asyncData({ $axios }) {
    try {
      let address = $axios.$get("/api/addresses");
      let order = $axios.$get("/api/orders");

      const [addResponse, orderResponse] = await Promise.all([address, order]);
      return {
        addresses: addResponse.addresses,
        orders: orderResponse.products,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {},
  methods: {
    async onDeleteAddress(id, index) {
      try {
        let response = await this.$axios.$delete(`/api/addresses/${id}`);

        if (response.success) {
          this.addresses.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async onSetDefault(id, index) {
      try {
        let response = await this.$axios.$put("/api/addresses/set/default", {
          id: id,
        });

        if (response.success) {
          this.message = response.message;
          await this.$auth.fetchUser();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"]),
  },
};
</script>