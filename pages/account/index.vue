<template>
  <div class="page-cart">
    <div class="page section-header text-center">
      <div class="page-title">
        <div class="wrapper"><h1 class="page-width">Account</h1></div>
      </div>
    </div>
    <div class="container">
      <div class="row mb-3">
        <div class="col-6 col-md-12 col-sm-12 col-lg-6">
          <div class="create-ac-content">
            <div class="cart">
              <h2 class="login-title mb-3">My orders</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Order product(s)</th>
                  </tr>
                </thead>
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
        <div class="col-6 col-md-6 col-sm-6 col-lg-6">
          <div class="create-ac-content bg-light-gray padding-20px-all">
            <fieldset>
              <h2 class="login-title mb-3">Personal details</h2>
              <div class="row">
                <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                  <label for="input-firstname"
                    >Full Name <span class="required-f">*</span></label
                  >
                  <input
                    name="firstname"
                    id="input-firstname"
                    type="text"
                    :placeholder="$auth.$state.user.name"
                    readonly="readonly"
                  />
                </div>
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
              </div>
            </fieldset>
            <h2 class="login-title mb-3">
              Shipping details
              <span class="floatright">
                <nuxt-link to="/account/address"> Add</nuxt-link></span
              >
            </h2>
            <table class="table table-striped table-hover text-left">
              <thead>
                <tr>
                  <th></th>
                  <th>State</th>
                  <th>City</th>
                  <th>Street</th>
                  <th>phone-number</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="">
                <template v-if="addresses">
                  <AddressTable
                    v-for="address in addresses"
                    v-bind:key="address._id"
                    v-bind:address="address"
                  />
                </template>
                <tr>
                  <td colspan="6">Please add your address for delivery</td>
                </tr>
              </tbody>
            </table>
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

  async fetch() {
    try {
      let address = this.$axios.$get("/api/addresses");
      let order = this.$axios.$get("/api/orders");
      const [addResponse, orderResponse] = await Promise.all([address, order]);
      this.addresses = addResponse.addresses;
      this.orders = orderResponse.products;
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      message: "",
      readonly: true,
      city: "",
      streetAddress: "",
      state: "",
      phoneNumber: "",
      addresses: "",
      orders: "",
    };
  },
  mounted() {
    if (this.addresses) {
      this.state = this.addresses.state;
    }
    console.log(this.addresses, "kk");
  },
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
    setEdit() {
      this.readonly = !this.readonly;
    },
    async onSubmit() {
      try {
        let form = {
          city: this.city,
          phoneNumber: this.phoneNumber,
          streetAddress: this.streetAddress,
          state: this.state,
        };
        let result = await this.$axios.$post("/api/addresses", {
          form,
        });
        if (result.status) {
          this.$bvToast.toast("Success", {
            varient: "success",
            solid: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"]),
  },
};
</script>
<style scoped>
.floatright {
  float: right;
  text-transform: lowercase;
  color: #0000ff;
  cursor: pointer;
}
thead {
  background-color: #dee1e6;
}
</style>