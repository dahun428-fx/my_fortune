// i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ko from "../locales/ko.json";
import en from "../locales/en.json";

i18n.use(initReactI18next).init({
  lng: "ko", // 기본 언어
  fallbackLng: "en",
  resources: {
    ko: { translation: ko },
    en: { translation: en },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
