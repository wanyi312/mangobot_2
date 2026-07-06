<template>
  <router-view />
</template>

<script setup>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { getTextDirection } from "@/i18n/index.js";

const { locale } = useI18n();

// 同步文档 lang / dir；RTL 语种见 i18n/index.js 的 RTL_LOCALES
watch(
  locale,
  (l) => {
    const code = String(l);
    document.documentElement.setAttribute("lang", code);
    document.documentElement.setAttribute("dir", getTextDirection(code));
  },
  { immediate: true }
);
</script>
<style lang="less">
:deep(.ant-message) {
  z-index: 9999 !important;
}

:deep(.ant-message-notice-content) {
  z-index: 9999 !important;
}
</style>
