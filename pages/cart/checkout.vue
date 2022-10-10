<template>
  <div class="page-checkout">
    <div class="page section-header text-center">
      <div class="page-title">
        <div class="wrapper"><h1 class="page-width">checkout</h1></div>
      </div>
    </div>
    <div class="container">
      <div class="row billing-field">
        <div class="col-xl-6 col-md-12 col-lg-6 col-sm-9 offset-md-3">
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
              <!-- <div class="order-button-payment my-4">
                <button
                  class="btn--checkout"
                  :disabled="loading"
                  @click="makePayment"
                >
                  Pay with Paystack 2
                  <b-spinner small v-if="loading"></b-spinner>
                </button>
              </div> -->
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
      errors: "",
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
          quantityBought: this.getCartLength,
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
          total: this.nairaToKobo(this.ordertotal),
          cart: this.getCart,
          estimatedDelivery: this.estimatedDelivery,
          quantityBought: this.getCartLength,
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
<style lang="scss" scoped>
</style>