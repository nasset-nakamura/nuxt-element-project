<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample06</h1>
    <h2>defaultLocale</h2>
    <p>{{ $common.defaultLocale }}</p>
    <h2>hoge</h2>
    <button @click="hoge">hoge</button>
    <h2>fuga</h2>
    {{ $common.fuga() }}
  </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log({ context });
  },
  head() {
    return {
      title: "Sample06",
    };
  },
  methods: {
    hoge() {
      alert(this.$common.hoge());
    },
  },
};
</script>
