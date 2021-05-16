<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample10</h1>
    <h2>i18n</h2>
    <h3>defaultLocale</h3>
    <p>{{ $i18n.defaultLocale }}</p>
    <h3>localeCodes</h3>
    <p>{{ $i18n.localeCodes }}</p>
    <h3>localeProperties</h3>
    <p>{{ $i18n.localeProperties }}</p>
    <h3>locales</h3>
    <p>{{ $i18n.locales }}</p>
    <h3>Label</h3>
    <div>{{ $t("削除しますか？") }}</div>
    <div>{{ $t("{window}画面を開きます", { window: $t("物件登録") }) }}</div>
    <div>{{ $t("{min}〜{max}文字で入力してください", { min: 3, max: 10 }) }}</div>
    <h3>Button</h3>
    <button @click="showI18n">showI18n</button>
    <button @click="showMessage">showMessage</button>
    <h3>Switch</h3>
    <div v-for="locale in $i18n.locales" :key="`button-${locale.code}`">
      <button @click="$i18n.setLocale(locale.code)">{{ locale.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Sample10",
    };
  },
  methods: {
    showI18n() {
      console.log({ $i18n: this.$root.$i18n });
    },
    showMessage() {
      console.log(this.$t("削除しますか？"));
      console.log(this.$t("{window}画面を開きます", { window: this.$t("物件登録") }));
      console.log(this.$t("{min}〜{max}文字で入力してください", { min: 3, max: 10 }));
    },
  },
};
</script>
