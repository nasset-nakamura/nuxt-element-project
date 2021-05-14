<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample03-1</h1>
    <h2>Getters</h2>
    <p>{{ $store.getters["counter/count"] }}</p>
    <p>{{ $store.getters["counter/double"] }}</p>
    <h2>Mutations</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Sample03-1",
    };
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    decrement() {
      this.$store.commit("counter/decrement");
    },
  },
};
</script>
