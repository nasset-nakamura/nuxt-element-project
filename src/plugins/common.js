const common = {
  defaultLocale: "ja",
  hoge: () => "hoge",
  fuga: () => "fuga",
};

export default (_, inject) => {
  inject("common", common);
};
