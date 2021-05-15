<template>
  <div class="container">
    <Logo />
    <h1 class="title">Sample05 userId</h1>
    <h2>path</h2>
    <p>{{ $route.path }}</p>
    <h2>name</h2>
    <p>{{ $route.name }}</p>
    <h2>params</h2>
    <p>{{ $route.params }}</p>
    <h2>query</h2>
    <p>{{ $route.query }}</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "userId | Sample05",
    };
  },
  mounted() {
    console.log({ $route: this.$route });
  },
};
</script>
