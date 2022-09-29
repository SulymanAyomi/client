<template>
  <tr>
    <td>{{ date }}</td>
    <td>${{ (order.total / 100).toFixed(2) }}</td>
    <td>{{ product }}</td>
  </tr>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    order: Object,
  },
  mounted() {
    console.log(typeof this.order.estimateDelivery, "b");
    new Date(this.order.estimateDelivery, "c");
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.product.price;
    },
    length(item) {
      return item.length;
    },
    orderTotalLength(order) {
      return order.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
  },
  computed: {
    product() {
      let p = [];
      let products = this.order.products;
      products.forEach((element) => {
        p.push(` ${element.quantity} x ${element.productID.title}`);
      });
      return p.join(", ");
    },
    date() {
      return new Date(this.order.estimateDelivery).toDateString();
    },
  },
};
</script>