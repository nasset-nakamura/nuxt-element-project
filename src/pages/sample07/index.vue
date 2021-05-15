<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample07</h1>
    <h2>Set Cookie</h2>
    <div>UserId：<input v-model="userId" type="text" /></div>
    <button @click="setCookie">setCookie</button>
    <h2>Get Cookie</h2>
    <button @click="getCookie">getCookie</button>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log({ context });
  },
  data() {
    return {
      userId: null,
    };
  },
  head() {
    return {
      title: "Sample07",
    };
  },
  methods: {
    setCookie() {
      this.$cookies.set("userId", this.userId, { path: "/" });
    },
    getCookie() {
      const userId = this.$cookies.get("userId");
      console.log({ userId });
    },
  },
};
</script>
