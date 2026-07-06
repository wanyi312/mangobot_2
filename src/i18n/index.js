import { createI18n } from "vue-i18n";

import ar from "./lang/ar.js";
import en from "./lang/en.js";

/** 与 header 语言切换、public/config/*.js 读取逻辑共用的本地存储键 */
const LANGUAGE_STORAGE_KEY = "language";

/** 站点已接入的语言代码；新增语种时在此登记并补充 messages */
export const SUPPORTED_LOCALES = ["en", "ar"];

/** 使用 RTL 书写方向的语言（如 ar、he、fa 等，按 ISO 639-1 代码维护） */
export const RTL_LOCALES = ["ar"];

/** 根据语言代码返回 html[dir] 取值：rtl | ltr */
export function getTextDirection(locale) {
  return RTL_LOCALES.includes(String(locale)) ? "rtl" : "ltr";
}

function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(String(locale));
}

/** 启动时从 localStorage 恢复语言，非法值回退 en */
function readStoredLocale() {
  if (typeof localStorage === "undefined") return "en";
  const raw = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isSupportedLocale(raw) ? raw : "en";
}

const i18n = createI18n({
  locale: readStoredLocale(),
  fallbackLocale: "en",
  messages: {
    ar,
    en,
  },
});

export default i18n;
export { LANGUAGE_STORAGE_KEY };