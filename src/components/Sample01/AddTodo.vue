<template>
  <div>
    <div>
      <span>userId: </span>
      <input v-model="addItem.userId" type="text" />
    </div>
    <div>
      <span>title: </span>
      <input v-model="addItem.title" type="text" />
    </div>
    <div><button @click="add">Add</button></div>
  </div>
</template>

<script>
export default {
  emits: ["add"],
  data() {
    return {
      addItem: {
        userId: null,
        title: "",
      },
    };
  },
  methods: {
    add() {
      this.$emit("add", this.addItem);
      this.addItem.userId = null;
      this.addItem.title = "";
    },
  },
};
</script>
