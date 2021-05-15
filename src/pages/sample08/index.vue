<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample08</h1>
    <h2>環境変数</h2>
    <h3>appUrl</h3>
    <p>{{ $config.appUrl }}</p>
    <h3>apiUrl</h3>
    <p>{{ $config.apiUrl }}</p>
    <h3>apiKey</h3>
    <p>{{ apiKey() }}</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log({ context });
  },
  head() {
    return {
      title: "Sample08",
    };
  },
  methods: {
    apiKey() {
      return this.$config.apiKey;
    },
  },
};
</script>
