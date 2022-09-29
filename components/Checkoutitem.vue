<template>
  <tr>
    <td class="text-left">
      {{ Item.title }}
    </td>
    <td>${{ Item.orderPrice }}</td>
    <td>
      <span class="money">{{ Item.orderSize }}</span>
    </td>
    <td>
      {{ Item.quantity }}
    </td>
    <td>
      <div>
        <span class="money">$ {{ getItemTotal(Item).toFixed(2) }} </span>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    Item: Object,
  },
  data() {
    return {
      itemp: "",
    };
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.orderPrice;
    },
  },
};
</script>