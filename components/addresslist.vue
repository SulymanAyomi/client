<template>
  <tr class="cart__row border-bottom line1 cart-flex border-top">
    <td class="cart__image-wrapper cart-flex-item">name</td>
    <td class="cart__meta small--text-left cart-flex-item"></td>
    <td class="cart__price-wrapper cart-flex-item">
      <span class="money">$ item.price.M </span>
    </td>
    <td class="cart__update-wrapper cart-flex-item text-right">
      <div class="cart__qty text-center"></div>
    </td>
    <td class="text-center small--hide cart-price">
      <div>
        <span class="money"> </span>
      </div>
    </td>
    <td class="text-center small--hide">
      <a class="cart__remove btn btn--secondary" title="Remove address"
        ><i class="fa fa-times"></i
      ></a>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    address: Object,
  },
};
</script>