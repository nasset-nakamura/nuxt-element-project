const dateTimeFormatsCommon = {
  dateTime: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  },
  date: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  dateWithoutYear: {
    month: 'long',
    day: 'numeric',
  },
  dateWithoutDay: {
    year: 'numeric',
    month: 'short',
  },
  dateWithDayOfWeek: {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  },
}

const options = {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: false,
  defaultLocale: 'ja',

  vueI18n: {
    fallbackLocale: 'ja',
    formatFallbackMessages: true,
    dateTimeFormats: {
      ja: dateTimeFormatsCommon,
      en: dateTimeFormatsCommon,
    },
  },
  lazy: true,
  langDir: 'locales/',
  locales: [
    {
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json',
      description: 'Japanese',
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
      description: 'English',
    },
  ],
  seo: false,
}

export default options;
