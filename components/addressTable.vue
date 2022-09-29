<template>
  <tr>
    <td class="trash">
      <font-awesome-icon
        icon="trash"
        transform="shrink-4"
        :style="{ color: 'red' }"
      />
    </td>
    <td class="state">{{ address.state }}</td>
    <td>{{ address.city }}</td>
    <td>{{ address.streetAddress }}</td>
    <td>{{ address.phoneNumber }}</td>
    <td class="trash" @click="edit()">
      <font-awesome-icon
        icon="pencil"
        transform="shrink-4"
        :style="{ color: 'yellow' }"
      />
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    address: Object,
  },
  methods: {
    edit() {
      this.$router.push(`/account/${this.address._id}`);
    },
  },
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