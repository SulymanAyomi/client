<template>
  <div class="box mb-4">
    <h6 class="mb-6">Order #{{ order._id }}</h6>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Order product(s)</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{{ order.estimateDelivery }}</td>
          <td>${{ order.total / 100 }}</td>
          <td>{{ length(order.products) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    order: Object,
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
};
</script>