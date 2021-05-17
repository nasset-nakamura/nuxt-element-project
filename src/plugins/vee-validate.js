import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend, localize, validate } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";
import ja from "vee-validate/dist/locale/ja.json";
import en from "vee-validate/dist/locale/en.json";

// 必要なルールのみインポート
extend("email", email);
extend("required", required);

// メッセージ設定
const validationMessages = {
  ja,
  en,
};
const changeValidationLanguage = (lang) => {
  localize(`${lang}`, validationMessages[lang]);
  validate();
};
changeValidationLanguage("ja");

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

// コンポーネントから実行するメソッド
export { changeValidationLanguage };
