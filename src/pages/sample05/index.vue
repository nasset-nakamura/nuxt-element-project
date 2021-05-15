<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample05</h1>
    <h2>URL①</h2>
    <nuxt-link to="sample05/2">http://localhost:3000/sample05/2</nuxt-link>
    <div><button @click="$router.push({ path: 'sample05/2' })">nuxt-link</button></div>
    <div><button @click="$router.push({ name: 'sample05-userId', params: { userId: 2 } })">nuxt-link</button></div>
    <h2>URL②</h2>
    <div>userId：<input v-model="userId" type="text" /></div>
    <nuxt-link :to="url1">http://localhost:3000{{ url1 }}</nuxt-link>
    <div><button @click="$router.push({ path: url1 })">nuxt-link</button></div>
    <div>
      <button @click="$router.push({ name: 'sample05-userId', params: { userId: userId } })">nuxt-link</button>
    </div>
    <h2>URL③</h2>
    <div>userId：<input v-model="userId" type="text" /></div>
    <div>page：<input v-model="page" type="text" /></div>
    <div>disabled：<input v-model="disabled" type="text" /></div>
    <nuxt-link :to="url2">http://localhost:3000{{ url2 }}</nuxt-link>
    <div><button @click="$router.push({ path: url2 })">nuxt-link</button></div>
    <div>
      <button
        @click="
          $router.push({
            name: 'sample05-userId',
            params: { userId: userId },
            query: { page: page, disabled: disabled },
          })
        "
      >
        nuxt-link
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 1,
      page: 1,
      disabled: "false",
      url1: "/sample05/1",
      url2: "/sample05/1?page=1&disabled=false",
    };
  },
  head() {
    return {
      title: "Sample05",
    };
  },
  mounted() {
    console.log({ $route: this.$route });
  },
  created() {
    this.$watch(
      () => [this.userId, this.page, this.disabled],
      () => {
        this.url1 = `/sample05/${this.userId}`;
        this.url2 = `/sample05/${this.userId}?page=${this.page}&disabled=${this.disabled}`;
      }
    );
  },
};
</script>
