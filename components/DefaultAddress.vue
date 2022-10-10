<template>
  <tr>
    <td class="state">{{ address.state }}</td>
    <td>{{ address.city }}</td>
    <td>{{ address.streetAddress }}</td>
    <td>{{ address.phoneNumber }}</td>
  </tr>
</template>
<script>
export default {
  props: {
    address: Object,
  },
  methods: {},
};
</script>
<style scoped>
.state {
  text-transform: capitalize;
}
.trash {
  cursor: pointer;
}
</style>