<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>{{ todo.userId }}</td>
    <td>{{ todo.title }}</td>
    <td>{{ todo.completed }}</td>
    <td>
      <button @click="toggle">Done</button>
      <button @click="remove">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  emits: ["toggle", "remove"],
  methods: {
    toggle() {
      this.$emit("toggle", this.todo.id);
    },
    remove() {
      this.$emit("remove", this.todo.id);
    },
  },
};
</script>
