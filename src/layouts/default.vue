<template>
  <div>
    <div class="header" style="text-align: center; margin: 20px">
      <nuxt-link to="/sample01">sample01</nuxt-link> | <nuxt-link to="/sample02-1">sample02-1</nuxt-link> |
      <nuxt-link to="/sample02-2">sample02-2</nuxt-link> | <nuxt-link to="/sample03-1">sample03-1</nuxt-link> |
      <nuxt-link to="/sample03-2">sample03-2</nuxt-link> | <nuxt-link to="/sample04-1">sample04-1</nuxt-link> |
      <nuxt-link to="/sample04-2">sample04-2</nuxt-link> | <nuxt-link to="/sample05">sample05</nuxt-link>
    </div>
    <div class="header" style="text-align: center; margin: 20px">
      <nuxt-link to="/sample06">sample06</nuxt-link> | <nuxt-link to="/sample07">sample07</nuxt-link> |
      <nuxt-link to="/sample08">sample08</nuxt-link> | <nuxt-link to="/sample09">sample09</nuxt-link> |
      <nuxt-link to="/sample10">sample10</nuxt-link>
    </div>
    <h2 style="text-align: center">Language</h2>
    <div class="header" style="text-align: center; margin: 20px">
      <select v-model="currentLocaleCode" @change="handleChangeLanguage">
        <option
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :value="locale.code"
          :title="`Switch to ${locale.description}`"
        >
          {{ locale.name }}
        </option>
      </select>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLocaleCode: this.$root.$i18n.locale,
    };
  },
  created() {
    if (this.$cookies.get("locale") === undefined) this.$cookies.set("locale", "ja", { path: "/" });
    this.$root.$i18n.setLocale(this.$cookies.get("locale"));
  },
  methods: {
    handleChangeLanguage() {
      this.$cookies.set("locale", this.currentLocaleCode, { path: "/" });
      this.$root.$i18n.setLocale(this.currentLocaleCode);
    },
  },
};
</script>
