<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample09</h1>
    <h2>Chatwork（Axiosプロキシ）</h2>
    <h3>Me</h3>
    <button @click="getChatworkMe">get</button>
    <h3>Message</h3>
    <div>
      <textarea v-model="message" />
    </div>
    <button @click="postChatworkMessage">post</button>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log({ context });
  },
  data() {
    return {
      message: "",
    };
  },
  head() {
    return {
      title: "Sample09",
    };
  },
  methods: {
    async getChatworkMe() {
      this.$axios.setHeader("X-ChatWorkToken", this.$config.apiKey);
      const response = await this.$axios.get("/chatwork/me").catch((error) => console.log({ error }));
      console.log({ response });
    },
    async postChatworkMessage() {
      this.$axios.setHeader("Content-Type", "application/x-www-form-urlencoded");
      this.$axios.setHeader("X-ChatWorkToken", this.$config.apiKey);
      const response = await this.$axios
        .post("/chatwork/rooms/165151593/messages", `body=${this.message}`)
        .catch((error) => console.log({ error }));
      console.log({ response });
    },
  },
};
</script>
