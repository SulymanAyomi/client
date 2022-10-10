<template>
  <tr>
    <td class="trash" @click="onDelete(address._id, index)">
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
    <td class="trash" @click="onSetDefault(address._id)">
      <font-awesome-icon icon="check" :style="{ color: 'green' }" />
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    address: Object,
    index: Number,
  },
  methods: {
    edit() {
      this.$router.push(`/account/${this.address._id}`);
    },
    onSetDefault(id) {
      this.$emit("onSetDefault", id);
    },
    onDelete(id, index) {
      this.$emit("onDelete", id, index);
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