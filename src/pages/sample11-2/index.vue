<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample11-2</h1>
    <h2>Validation</h2>
    <ValidationObserver ref="obs" v-slot="observerSlot">
      <form @submit.prevent="observerSlot.handleSubmit(login)">
        <ValidationProvider v-slot="providerSlot" rules="required|email">
          <h2>{{ $t("メールアドレス") }}</h2>
          <div>
            <input v-model="email" name="email" type="text" />
          </div>
          <div class="error">{{ providerSlot.errors[0] }}</div>
          <h3>providerSlot</h3>
          <pre>{{ providerSlot }}</pre>
        </ValidationProvider>
        <ValidationProvider v-slot="providerSlot" rules="required">
          <h2>{{ $t("パスワード") }}</h2>
          <div>
            <input v-model="password" name="password" type="password" />
          </div>
          <div class="error">{{ providerSlot.errors[0] }}</div>
          <h3>providerSlot</h3>
          <pre>{{ providerSlot }}</pre>
        </ValidationProvider>
        <div>
          <button type="submit" :disabled="observerSlot.invalid">{{ $t("ログイン") }}</button>
        </div>
        <div>
          <button @click="validation">{{ $t("検証") }}</button>
        </div>
      </form>
      <h3>observerSlot</h3>
      <pre>{{ observerSlot }}</pre>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  head() {
    return {
      title: "Sample11-2",
    };
  },
  methods: {
    login() {
      console.log({ email: this.email, password: this.password });
      alert("Login!!");
    },
    async validation() {
      const obs = this.$refs.obs;
      await obs.validate();
      console.log({ obs });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
