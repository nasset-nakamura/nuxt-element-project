<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample02-2</h1>
    <h2>Getters</h2>
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <h2>Mutations</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  head() {
    return {
      title: "Sample02-2",
    };
  },
  computed: {
    ...mapGetters(["count", "double"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script>
