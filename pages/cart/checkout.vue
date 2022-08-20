<template>
  <div class="page-checkout">
    <div class="page section-header text-center">
      <div class="page-title">
        <div class="wrapper"><h1 class="page-width">checkout</h1></div>
      </div>
    </div>
    <div class="container">
      <div class="row billing-field">
        <div class="col-6 col-xl-6.col-md-6.col-lg-6 col-sm-6">
          <div class="create-ac-content bg-light-gray padding-20px-all">
            <form>
              <fieldset>
                <h2 class="login-title mb-3">Billing details</h2>
                <div class="row">
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-firstname"
                      >First Name <span class="required-f">*</span></label
                    >
                    <input
                      name="firstname"
                      v-model="first_name"
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
                      v-model="last_name"
                      id="input-lastname"
                      type="text"
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
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <div class="row">
                  <div class="form-group col-md-6 col-lg-6 col-xl-6">
                    <label for="input-company">Company</label>
                    <input
                      name="company"
                      value=""
                      id="input-company"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-address-1"
                      >Address <span class="required-f">*</span></label
                    >
                    <input
                      name="address"
                      v-model="address"
                      id="input-address"
                      type="text"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-postcode"
                      >Post Code <span class="required-f">*</span></label
                    >
                    <input
                      name="postcode"
                      v-model="zipcode"
                      id="input-postcode"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                    <label for="input-country"
                      >State <span class="required-f">*</span></label
                    >
                    <select name="country_id" id="input-country">
                      <option value="">--- Please Select ---</option>
                      <option value="244">Abuja</option>
                      <option value="1">Lagos</option>
                      <option value="2">Osun</option>
                      <option value="3">Oyo</option>
                      <option value="4">Kwara</option>
                      <option value="5">Anambra</option>
                      <option value="6">Ondo</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="col-6 col-xl-6.col-md-6.col-lg-6 col-sm-6">
          <div class="your-order-payment">
            <div class="your-order">
              <h2 class="login-title mb-4">Your Order</h2>

              <div class="table-responsive-sm order-table">
                <table
                  class="bg-white table table-bordered table-hover text-center"
                >
                  <thead>
                    <tr>
                      <th class="text-left">Product Name</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Checkoutitem
                      v-for="item in getCart"
                      v-bind:key="item.id"
                      v-bind:Item="item"
                    />
                  </tbody>
                  <tfoot class="font-weight-600">
                    <tr>
                      <td colspan="4" class="text-right">Shipping</td>
                      <td>${{ shippingPrice }}.00</td>
                    </tr>
                    <tr>
                      <td colspan="4" class="text-right">Total</td>
                      <td>${{ ordertotal.toFixed(2) }}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <hr />
            <div class="form-group estimate">
              <span class="estimated"
                >Estimated Devlivery:
                <span class="estimated-span">{{
                  estimatedDelivery
                }}</span></span
              >
              <select
                name="estimate"
                v-model="shipping"
                @change="onSelectShipping"
              >
                <option value="">--- Delivery options ---</option>
                <option value="normal">Normal</option>
                <option value="Fast">Fast</option>
                <option value="store">Store pick</option>
              </select>
            </div>
            <hr />

            <div class="your-payment">
              <h2 class="login-title mb-3">payment method</h2>
              <div class="order-button-payment my-4">
                <button
                  class="btn--checkout"
                  :disabled="loading"
                  @click="onpayment"
                >
                  Pay with Paystack
                  <b-spinner small v-if="loading"></b-spinner>
                </button>
              </div>
              <div class="order-button-payment my-4">
                <button
                  class="btn--checkout"
                  :disabled="loading"
                  @click="makePayment"
                >
                  Pay with Paystack 2
                  <b-spinner small v-if="loading"></b-spinner>
                </button>
              </div>
              <div class="my-3" id="card-element"></div>
              <div>{{ errors }}</div>

              <div class="order-button-payment">
                <button
                  class="btn--checkout"
                  value="Place order"
                  type="submit"
                  :disabled="stripeloading"
                  @click="stripePayment"
                >
                  Pay with Stripe
                  <b-spinner small v-if="stripeloading"></b-spinner>
                </button>
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
  middleware: "auth",

  name: "Checkout",
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$post("/api/shipment", {
        shipment: "normal",
      });
      return {
        shippingPrice: response.shipment.price,
        estimatedDelivery: response.shipment.estimated,
      };
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      cart: {
        items: [],
      },
      loading: false,
      stripeloading: false,
      shipping: "",
      stripe: {},
      card: {},
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      zipcode: "",
      place: "",
      errors: [],
    };
  },
  mounted() {
    const popup = document.createElement("script");
    popup.setAttribute("src", "https://js.paystack.co/v2/inline.js");
    popup.async = true;
    document.head.appendChild(popup);

    this.stripe = Stripe(
      "pk_test_51LQr6OI5tFr9TjthebrWVX7DKrUdp3ypHMdM4WgtCFlOq909pk6sUfQG57qBmV0obdsCRZMbiBkNIxpCNUhP8xc400IVeSqv3j"
    );
    const elements = this.stripe.elements();
    this.card = elements.create("card", { hidePostalCode: true });
    this.card.mount("#card-element");
  },

  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"]),
    ordertotal() {
      return this.shippingPrice + this.getCartTotalPrice;
    },
  },
  methods: {
    async onSelectShipping() {
      console.log(this.shipping);
      try {
        let response = await this.$axios.$post("/api/shipment", {
          shipment: this.shipping,
        });

        this.shippingPrice = response.shipment.price;
        this.estimatedDelivery = response.shipment.estimated;
      } catch (err) {
        console.log(err);
      }
    },
    async makePayment() {
      this.loading = true;
      const data = {
        email: this.$auth.$state.user.email,
        amount: this.nairaToKobo(this.ordertotal),
      };
      console.log(data);
      this.$axios
        .post("/api/payment/integration", data)
        .then((response) => {
          console.log(response);
          window.location.href = response.data.authorization_url;
        })
        .then((res) => {
          const paystack = new window.PaystackPop();
          paystack.resumeTransaction(res.data.access_code);
          this.loading = false;
        })
        .catch((err) => {
          // handle error here
          console.log(err);
          this.loading = false;
        });
    },
    onpayment() {
      this.loading = true;
      this.loading = true;
      let handler = PaystackPop.setup({
        key: "pk_test_890f1e0d3abc876f5eeb00c0ff8f2211d3b553cd", // Replace with your public key
        email: "ay@gmail.com",
        channels: ["card"],
        amount: this.nairaToKobo(this.ordertotal),
        ref: "" + Math.floor(Math.random() * 1000000000 + 1),
        onClose: function () {
          alert("Window closed.");
          this.loading = false;
        },
        callback: (response) => this.verifyPayment(response.reference),
      });
      handler.openIframe();
    },
    async verifyPayment(reference) {
      try {
        let body = {
          reference: reference,
          cart: this.getCart,
          total: this.nairaToKobo(this.ordertotal),
          estimatedDelivery: this.estimatedDelivery,
        };
        let result = await this.$axios.$post("/api/paystack/verify", body);
        if (result.success) {
          this.$store.commit("clearCart");
          this.$bvToast.toast("Success", {
            varient: "Success",
            solid: true,
            noCloseButton: true,
          });
          this.$router.push("/account");
        }
      } catch (err) {
        console.log(err);
      }
    },
    nairaToKobo(amount) {
      return (amount * 100).toFixed(0);
    },
    stripePayment() {
      this.stripeloading = true;
      this.stripe.createToken(this.card).then((result) => {
        if (result.error) {
          this.stripeloading = false;
          this.$bvToast.toast(
            "Something went wrong with stripe, please try again",
            {
              varient: "danger",
              solid: true,
              noCloseButton: true,
            }
          );

          console.log(result.error.message);
        } else {
          this.stripeTokenHandler(result.token);
        }
      });
    },
    async stripeTokenHandler(token) {
      await this.$axios
        .$post("/api/stripe/payment", {
          token: token,
          totalPrice: this.ordertotal,
          cart: this.getCart,
          estimatedDelivery: this.estimatedDelivery,
        })
        .then((response) => {
          console.log(response);
          if (response.success) {
            this.$store.commit("clearCart");
            this.$bvToast.toast("Payment successful", {
              varient: "Success",
              solid: true,
              noCloseButton: true,
            });
            this.$router.push("/account");
          }
        })
        .catch((error) => {
          this.errors.push("Something went wrong. Please try again");

          console.log(error);
        });

      this.stripeloading = false;
    },
  },
};
</script>