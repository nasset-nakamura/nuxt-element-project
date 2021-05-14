<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample02-1</h1>
    <h2>Getters</h2>
    <p>{{ $store.getters.count }}</p>
    <p>{{ $store.getters.double }}</p>
    <h2>Mutations</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Sample02-1",
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
