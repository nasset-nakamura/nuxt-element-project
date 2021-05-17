<template>
  <div>
    <div class="header" style="text-align: center; margin: 20px">
      <nuxt-link :to="localePath('/sample01')">sample01</nuxt-link> |
      <nuxt-link :to="localePath('/sample02')">sample02-1</nuxt-link> |
      <nuxt-link :to="localePath('/sample02-1')">sample02-2</nuxt-link> |
      <nuxt-link :to="localePath('/sample03-1')">sample03-1</nuxt-link> |
      <nuxt-link :to="localePath('/sample03-2')">sample03-2</nuxt-link> |
      <nuxt-link :to="localePath('/sample04-1')">sample04-1</nuxt-link> |
      <nuxt-link :to="localePath('/sample04-2')">sample04-2</nuxt-link> |
      <nuxt-link :to="localePath('/sample05')">sample05</nuxt-link>
    </div>
    <div class="header" style="text-align: center; margin: 20px">
      <nuxt-link :to="localePath('/sample06')">sample06</nuxt-link> |
      <nuxt-link :to="localePath('/sample07')">sample07</nuxt-link> |
      <nuxt-link :to="localePath('/sample08')">sample08</nuxt-link> |
      <nuxt-link :to="localePath('/sample09')">sample09</nuxt-link> |
      <nuxt-link :to="localePath('/sample10')">sample10</nuxt-link> |
      <nuxt-link :to="localePath('/sample11-1')">sample11-1</nuxt-link> |
      <nuxt-link :to="localePath('/sample11-2')">sample11-2</nuxt-link>
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
import { changeValidationLanguage } from "@/plugins/vee-validate";

export default {
  data() {
    return {
      currentLocaleCode: "ja",
    };
  },
  created() {
    if (this.$cookies.get("locale") === undefined) this.$cookies.set("locale", "ja", { path: "/" });
    this.currentLocaleCode = this.$cookies.get("locale");
    this.$root.$i18n.setLocale(this.currentLocaleCode);
  },
  methods: {
    handleChangeLanguage() {
      this.$cookies.set("locale", this.currentLocaleCode, { path: "/" });
      this.$root.$i18n.setLocale(this.currentLocaleCode);
      changeValidationLanguage(this.currentLocaleCode);
    },
  },
};
</script>
