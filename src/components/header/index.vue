<template>
  <div class="header">
    <div class="header-logo-wrap" @click="goHome">
      <SvgIcon class="header-logo" src="logo" />
    </div>
    <nav class="header-menu">
      <div
        :class="[
          'header-menu-item',
          item.active ? 'header-menu-item-active' : '',
        ]"
        v-for="item in menuItems"
        :key="item.path"
        @click="go(item)"
      >
        {{ t(item.nameKey) }}
        <div
          v-if="item.children?.length > 0"
          class="header-menu-item_icon"
        >
          <SvgIcon
            class="header-menu-caret"
            src="drop-down"
          />
          <div
            class="header-dropdown"
          >
            <div
              v-for="child in item.children"
              :key="child.path"
              class="header-dropdown-item"
              @click.stop="goProduct(child)"
            >
              {{ child.name ? child.name : t(child.nameKey) }}
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="header-right"
      :class="{ 'header-right--mobile-search-open': mobileSearchExpanded }"
    >
      <div
        ref="searchWrapRef"
        class="header-search-wrap"
        :class="{ 'header-search-wrap--mobile-open': mobileSearchExpanded }"
      >
        <div class="header-search">
          <input
            ref="searchInputRef"
            v-model="searchQuery"
            type="text"
            class="header-search-input"
            :placeholder="isMobileViewport() ? t('headerSearchPlaceholderMobile') : t('headerSearchPlaceholder')"
            autocomplete="off"
            @focus="openSearchDropdown"
            @input="openSearchDropdown"
          />
        </div>
        <SvgIcon
          class="header-search-icon"
          src="search"
          @click.stop="handleSearchIconClick"
        />
        <ul
          v-show="isSearchDropdownVisible"
          class="header-search-dropdown"
          role="listbox"
          :aria-label="t('headerSearchAria')"
        >
          <li
            v-for="s in searchSuggestions"
            :key="s.path || s.label"
            class="header-search-dropdown-li"
            @mousedown.prevent="goSearchSuggestion(s)"
            role="none"
          >
            <SvgIcon
              class="header-search-dropdown-icon"
              src="search-item"
              aria-hidden="true"
            />
            <span class="header-search-dropdown-label" :title="s.label">{{ s.label }}</span>
          </li>
        </ul>
      </div>
      <!-- <div
        class="shift-lang-wrap"
        :class="locale === 'en' ? 'shift-lang-wrap--en' : 'shift-lang-wrap--ar'"
        role="group"
        aria-label="Language"
        dir="ltr"
        @click="handleShiftLangClick"
      >
        <div class="shift-lang-thumb" :class="locale === 'en' ? 'shift-lang-thumb--en' : 'shift-lang-thumb--ar'"></div>
        <span class="shift-lang-bg-label shift-lang-bg-label--ar" :class="locale !== 'ar' ? 'shift-lang-bg-label--nocheck' : ''">ع</span>
        <span class="shift-lang-bg-label shift-lang-bg-label--en" :class="locale !== 'en' ? 'shift-lang-bg-label--nocheck' : ''">E</span>
      </div> -->
      <button type="button" class="header-contact" @click="goContact">
        {{ t("headerContactUs") }}
      </button>
      <button
        type="button"
        class="header-hamburger"
        aria-label="Menu"
        @click="mobileNavOpen = true"
      >
        <span class="header-hamburger-line" />
        <span class="header-hamburger-line" />
        <span class="header-hamburger-line" />
      </button>
    </div>
  </div>
  <NavMobileDialog v-model="mobileNavOpen" :menu-items="menuItems" />
</template>
<script setup>
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SvgIcon from "@/components/SvgIcon.vue";
import NavMobileDialog from "./components/navMobileDialog.vue";
import i18n, { LANGUAGE_STORAGE_KEY } from "@/i18n/index.js";
import {
  ROUTE_LABEL_KEY_MAP,
  SEARCH_DROPDOWN_MAX,
  SEARCH_HIGHLIGHT_QUERY_KEY,
  mapTextKeyToRoute
} from "./config.js";

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();

function flattenMessageStrings(input, prefix = "", out = []) {
  if (typeof input === "string") {
    out.push({ key: prefix, text: input });
    return out;
  }
  if (Array.isArray(input)) {
    input.forEach((item, index) => {
      const nextKey = prefix ? `${prefix}.${index}` : String(index);
      flattenMessageStrings(item, nextKey, out);
    });
    return out;
  }
  if (input && typeof input === "object") {
    Object.entries(input).forEach(([k, v]) => {
      const nextKey = prefix ? `${prefix}.${k}` : k;
      flattenMessageStrings(v, nextKey, out);
    });
  }
  return out;
}

function normalizeText(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function fuzzyScore(text, query) {
  const base = normalizeText(text);
  const q = normalizeText(query);
  if (!base || !q) return 0;

  // 完全包含匹配 - 最高优先级
  if (base.includes(q)) return q.length * 2 + 20;

  // 忽略空格后的包含匹配
  const compactBase = base.replace(/\s+/g, "");
  const compactQuery = q.replace(/\s+/g, "");
  if (compactQuery && compactBase.includes(compactQuery)) return compactQuery.length * 2 + 15;

  // 子序列匹配 - 带评分优化
  let qIndex = 0;
  let consecutiveBonus = 0;
  let lastMatchIndex = -2;

  for (let i = 0; i < base.length && qIndex < q.length; i += 1) {
    if (base[i] === q[qIndex]) {
      // 连续匹配加分
      if (i === lastMatchIndex + 1) consecutiveBonus += 1;
      // 单词边界匹配加分（空格后或开头）
      if (i === 0 || base[i - 1] === " ") consecutiveBonus += 1;
      lastMatchIndex = i;
      qIndex += 1;
    }
  }

  if (qIndex === q.length) {
    return q.length + consecutiveBonus;
  }
  return 0;
}

function cleanSearchText(text) {
  return String(text ?? "").replace(/\s+/g, " ").replace(/\{[^}]+\}/g, "").trim();
}

const searchQuery = ref("");
const searchWrapRef = ref(null);
const searchInputRef = ref(null);
/** 为 false 时收缩下拉，直至再次聚焦/输入 */
const searchDropdownOpen = ref(false);
const mobileSearchExpanded = ref(false);
const mobileNavOpen = ref(false);

// 切换语言：写入 localStorage 后整页刷新，以便 public/config/*.js 重新按语言挂载全局数据
function handleShiftLangClick() {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale.value);
  }
  window.location.reload(); // 重新加载应用程序
}

function normSearch(s) {
  return String(s ?? "").trim().toLowerCase();
}

function openSearchDropdown() {
  searchDropdownOpen.value = true;
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
}

async function handleSearchIconClick() {
  if (isMobileViewport()) {
    mobileSearchExpanded.value = !mobileSearchExpanded.value;
    if (mobileSearchExpanded.value) {
      await nextTick();
      searchInputRef.value?.focus();
      openSearchDropdown();
    } else {
      searchDropdownOpen.value = false;
      searchInputRef.value?.blur();
      searchQuery.value = "";
    }
    return;
  }

  openSearchDropdown();
  searchInputRef.value?.focus();
}

function handleSearchOutsidePointerDown(event) {
  const wrap = searchWrapRef.value;
  if (!wrap) return;
  const target = event.target;
  if (target instanceof Node && !wrap.contains(target)) {
    if (isMobileViewport()) {
      searchDropdownOpen.value = false;
      searchInputRef.value?.blur();
      searchQuery.value = "";
      mobileSearchExpanded.value = false;
    } else {
      searchDropdownOpen.value = false;
      mobileSearchExpanded.value = false;
    }
  }
}

function safeFilters() {
  try {
    return window.Filters?.filters ?? [];
  } catch {
    return [];
  }
}

function safeMangobotEvents() {
  try {
    return window.MangobotEvents?.events ?? [];
  } catch {
    return [];
  }
}

function safeBlogEvents() {
  try {
    return window.Blog?.events ?? [];
  } catch {
    return [];
  }
}

/** 配置里字段名为 keysword */
function keyswordMatches(keysword, qLower) {
  if (!qLower) return false;
  if (!Array.isArray(keysword)) return false;
  return keysword.some((k) => {
    const s = normSearch(k ?? "");
    return s.length > 0 && s.includes(qLower);
  });
}

const globalSearchPageEntries = computed(() => {
  const localeCode = locale.value === "ar" ? "ar" : "en";
  const localeMessages = i18n.global.getLocaleMessage(localeCode);
  const flattened = flattenMessageStrings(localeMessages);
  const perRouteTextPool = new Map();

  flattened.forEach(({ key, text }) => {
    const routePath = mapTextKeyToRoute(key);
    if (!routePath) return;
    const normalizedText = cleanSearchText(text);
    if (normalizedText.length < 2) return;
    const routePathList = Array.isArray(routePath) ? routePath : [routePath];
    routePathList.forEach((path) => {
      if (!perRouteTextPool.has(path)) {
        perRouteTextPool.set(path, []);
      }
      perRouteTextPool.get(path).push(normalizedText);
    });
  });

  return Array.from(perRouteTextPool.entries()).map(([path, textList]) => {
    const labelKey = ROUTE_LABEL_KEY_MAP[path];
    const pageLabel = labelKey ? t(labelKey) : path;
    // const descKey = ROUTE_DESC_KEY_MAP[path];
    // const pageDesc = descKey ? t(descKey) : "";
    const mergedText = Array.from(new Set(textList)).join(" ");
    return {
      path,
      label: pageLabel,
      text: mergedText,
    };
  });
});

const searchSuggestions = computed(() => {
  const q = normSearch(searchQuery.value);
  if (!q) return [];

  const out = [];
  const seen = new Set();

  const push = (label, path, extra = {}) => {
    if (!path || seen.has(path)) return;
    seen.add(path);
    out.push({ label: String(label), path, ...extra });
  };

  // 1) filters.js：页面名称与 keysword 匹配
  for (const f of safeFilters()) {
    const label = f?.label;
    const url = f?.url;
    const keysword = f.keysword;
    // 页面名称匹配
    if (label != null && url && normSearch(label).replace(/\s+/g, '').includes(q.replace(/\s+/g, ''))) {
      push(label, url, { highlightTerm: searchQuery.value.trim()});
    }
    // 关键词匹配
    if (keyswordMatches(keysword, q)) {
      push(label, url, { highlightTerm: searchQuery.value.trim()});
    }
  }

  // 2) event.js：活动关键词匹配，统一跳到活动列表页
  for (const e of safeMangobotEvents()) {
    if (!keyswordMatches(e?.keysword, q)) continue;
    const name = e?.name;
    if (!name) continue;
    push(name, `/events`, { highlightTerm: searchQuery.value.trim()});
  }

  // 3) blog.js：博客关键词匹配，跳到对应 Markdown 详情
  for (const e of safeBlogEvents()) {
    if (!keyswordMatches(e?.keysword, q)) continue;
    const fileName = e?.fileName;
    if (!fileName) continue;
    const label =
      [e.title, e.subtitle].filter(Boolean).join(" ").trim() || String(fileName);
    push(label, `/blog/${encodeURIComponent(fileName)}`, { highlightTerm: searchQuery.value.trim()});
  }

  const globalMatches = [];
  globalSearchPageEntries.value.forEach((entry) => {
    const score = fuzzyScore(entry.label, q) + fuzzyScore(entry.text, q);
    if (score <= 0) return;
    globalMatches.push({
      label: entry.label,
      path: entry.path,
      score,
      highlightTerm: searchQuery.value.trim(),
    });
  });

  globalMatches
    .sort((a, b) => b.score - a.score)
    .forEach((item) => {
      push(item.label, item.path, { highlightTerm: item.highlightTerm });
    });

  return out.slice(0, SEARCH_DROPDOWN_MAX);
});

const isSearchDropdownVisible = computed(
  () =>
    searchDropdownOpen.value &&
    normSearch(searchQuery.value).length > 0 &&
    searchSuggestions.value.length > 0
);

const menuItems = ref([
  { nameKey: "headerMenuHome", path: "/", active: false },
  {
    nameKey: "headerMenuProducts",
    path: "/products",
    active: false,
    children: [
      { name: "A2 ultra", path: "/product/a2" },
      { name: "X2 ultra", path: "/product/x2" },
      { name: "D1 ultra", path: "/product/d1" },
      { name: "D1 max", path: "/product/d1max" },
      { name: "D1 max pro", path: "/product/d1promax" },
      { name: "G1 ultra", path: "/product/g1" },
    ],
  },
  { nameKey: "headerMenuEvents", path: "/events", active: false },
  { nameKey: "headerMenuPartnerships", path: "/partnerships", active: false },
  { nameKey: "headerMenuAbout", path: "/aboutus", active: false },
  { nameKey: "headerMenuBlog", path: "/blog", active: false },
]);
// 检查路径是否匹配菜单项
function isPathMatch(item, path) {
  if (item.path === path) return true;
  if (item.children?.some((child) => child.path === path)) return true;
  return false;
}

// 更新菜单显示状态
function updateMenuState() {
  const currentPath = route.path;

  menuItems.value.forEach((item) => {
    const isMatch = isPathMatch(item, currentPath);
    // active 控制激活状态（高亮显示）
    item.active = isMatch;
  });
}

watch(
  () => route.path,
  () => {
    updateMenuState();
  },
  {
    immediate: true,
  }
);

function goHome() {
  router.push('/');
}

function goProduct(item) {
  // 跳转到产品页面
  if (item.path) {
    // 使用 vue-router 跳转，才能触发页面过渡动画
    router.push(item.path);
  }
}

// 跳转
function go(item) {
  // 处理跳转
  if (item.path) {
    router.push(item.path);
  }
}

function goContact() {
  router.push('/contactus');
}

function goSearchSuggestion(item) {
  searchDropdownOpen.value = false;
  searchInputRef.value?.blur();
  if (item.path) {
    if (item.highlightTerm) {
      router.push({
        path: item.path,
        query: {
          [SEARCH_HIGHLIGHT_QUERY_KEY]: item.highlightTerm,
        },
      });
    } else {
      router.push(item.path);
    }
  }
  searchQuery.value = "";
  mobileSearchExpanded.value = false;
}

onMounted(() => {
  document.addEventListener("mousedown", handleSearchOutsidePointerDown, true);
  document.addEventListener("touchstart", handleSearchOutsidePointerDown, true);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleSearchOutsidePointerDown, true);
  document.removeEventListener("touchstart", handleSearchOutsidePointerDown, true);
});
</script>
<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  min-width: 100vw;
  height: 92px;
  padding: 0 38px;
  box-sizing: border-box;
  justify-content: space-between;
  position: fixed;
  font-family: Montserrat;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.10);
  transition: background-color 0.3s ease, color 0.3s ease, backdrop-filter 0.3s ease;
  color: #979797;
  backdrop-filter: blur(10px);
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #0A0A0A;
    backdrop-filter: blur(0px);
    .header-logo-wrap {
      color: #010101;
    }
    .header-search-icon {
      color: #000;
    }
    .header-contact {
      background: #000;
    }
    .header-search-input {
      color: #0A0A0A;
    }
    .shift-lang-wrap {
      background: #fff;
    }

    .shift-lang-thumb {
      background-color: #000;
    }
    .shift-lang-bg-label--nocheck {
      color: #000;
    }
  }

  .header-logo-wrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #979797;
    transition: color 0.3s ease;
    .header-logo {
      height: 56px;
      width: 173px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 18px;
    height: 100%;
  }

  .shift-lang-wrap {
    position: relative;
    width: 97px;
    height: 54px;
    flex-shrink: 0;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    cursor: pointer;
  }

  .shift-lang-bg-label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 49px;
    border-radius: 50%;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.3px;
    top: 50%;
    transform: translateY(-50%);
    &--ar {
      left: 3%;
      transform: translateY(-50%) translateY(-2px);
    }
    &--en {
      left: 46%;
    }
  }

  .shift-lang-thumb {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #979797;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &--en {
      left: 46%;
    }
    &--ar {
      left: 3%;
    }
  }

  .header-search-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: 18px;
    height: 100%;
    /* 针对 WebKit 浏览器（Chrome, Safari, Edge） */
    // ::-webkit-scrollbar {
    //   width: 6px;           /* 垂直滚动条宽度 */
    //   height: 6px;          /* 水平滚动条高度 */
    // }

    // ::-webkit-scrollbar-track {
    //   background: transparent;  /* 轨道背景色（浅灰色） */
    //   border-radius: 3px;
    // }

    // ::-webkit-scrollbar-thumb {
    //   background: #c0c0c0;  /* 滑块颜色（更浅的灰色） */
    //   border-radius: 3px;
    // }

    // ::-webkit-scrollbar-thumb:hover {
    //   background: #a0a0a0;  /* 鼠标悬停时的颜色（略深一点） */
    // }
  }
  .header-search {
    display: flex;
    align-items: center;
    width: 380px;
    height: 36px;
    padding: 6px 0;
    border-radius: 55px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: rgba(217, 217, 217, 0.25);
  }
  .header-search-input {
    width: 100%;
    height:24px;
    padding: 0 14px;
    outline: none;
    border: none;
    box-sizing: border-box;
    background-color: transparent;
    color: #979797;
    font-size: 18px;
  }
  // .header-search-input::placeholder {
  //   color: rgba(154, 154, 154, 0.8);
  // }
  .header-search-icon {
    width: 36px;
    height: 36px;
  }

  .header-search-dropdown {
    position: absolute;
    top: calc(100% - 10px);
    z-index: 10001;
    display: flex;
    padding: 0;
    flex-direction: column;
    width: 374px;
    list-style: none;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    gap: 10px;
    // max-height: 300px;
    // overflow-y: auto;
  }

  .header-search-dropdown-li {
    list-style: none;
    margin: 0;
    padding: 0 14px;
    height: 42px;
    line-height: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 19px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 37px;
    letter-spacing: -0.02em;
    color: #7B7B7B;
    font-size: 25.143px;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #f6f6f6;
    }
  }

  .header-search-dropdown-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: #7b7b7b;
  }

  .header-search-dropdown-label {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .header-contact {
    height: 54px;
    line-height: 54px;
    padding: 0 25px;
    text-align: center;
    border-radius: 50px;
    background: #979797;
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.3px;
    white-space: nowrap;
    &:hover {
      background-color: #FF7A1A;
    }
  }

  .header-hamburger {
    display: none;
  }
  .header-dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -6px);
    z-index: 10000;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    min-width: 211px;
    transition: all 0.3s ease-out;
    // transition: display 0.3s ease;
  }

  .header-dropdown-item {
    font-size: 20px;
    line-height: 35px;
    padding: 0 40px;
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    color: #7B7B7B;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    &:last-of-type {
      border-bottom: none;
    }
    &:hover {
      background-color: #f6f6f6;
      color: #7B7B7B !important;
    }
  }

  .header-dropdown-item:hover {
    background: rgba(0, 0, 0, 0.04);
    color: #1a1a1a;
  }

  &-menu {
    display: flex;
    align-items: center;
    gap: 54px;
    flex: 1;
    margin: 0 24px 0 58px;
    height: 100%;
    &-item {
      height: 100%;
      font-size: 20px;
      font-weight: 400;
      display: flex;
      position: relative;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      letter-spacing: -0.3px;
      &:hover {
        color: #FF7A1A;
      }
      &.header-menu-item-active {
        color: #FF7A1A;
      }
      .header-menu-item_icon {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 6px;
        width: 19px;
        height: 100%;
        &:hover {
          .header-dropdown {
            visibility: visible;
            transform: translate(-50%, -10px);
            opacity: 1;
          }
          .header-menu-caret {
            transform: rotate(180deg);
          }
        }
      }
      .header-menu-caret {
        width: 8px;
        transition: transform 0.3s ease;
      }
    }
  }
  &-contact {
    display: flex;
    min-width: 120px;
    height: 44px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    background: #4a4a4a;
    color: #fff;
    font-family: Manrope, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
    cursor: pointer;
  }
  &-contact:hover {
    background: #3a3a3a;
  }
}

@media (max-width: 767px) {
  .header {
    position: sticky;
    top: 0;
    left: 0;
    height: 11.5909vw;
    padding: 0 5.4545vw;
    background: #FFF;
    box-shadow: 0 0.6598vw 0.6598vw 0 rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(0vw);
    &:hover {
      background: #FFF;
      .shift-lang-wrap {
        background: rgba(0, 0, 0, 0.25);
      }
      .shift-lang-bg-label--nocheck {
        color: #fff;
      }
    }
    .header-logo-wrap {
      color: #000000;
      .header-logo {
        width: 22.36vw;
        height: 7.0752vw;
        flex-shrink: 0;
      }
    }
    .header-menu {
      display: none;
    }
    .header-right {
      gap: 3.1818vw;
    }
    .header-right--mobile-search-open {
      gap: 0;
    }
    .header-search-wrap {
      width: 6.2039vw;
      gap: 0;
      justify-content: flex-end;
      transition: width 0.3s ease;
      flex-shrink: 0;
    }
    .header-search-wrap--mobile-open {
      width: 55.9091vw;
      gap: 2.0455vw;
    }
    .header-search {
      width: 0;
      height: 6.1364vw;
      padding: 0.2273vw 0;
      border-radius: 1.3636vw;
      border: 0.2273vw solid #E5E5E5;
      background: #FCFCFC;
      opacity: 0;
      overflow: hidden;
      transition: width 0.3s ease, opacity 0.2s ease, border-color 0.2s ease;
    }
    .header-search-wrap--mobile-open .header-search {
      width: 54.5455vw;
      opacity: 1;
      border-color: #cecece;
    }
    .header-search-icon {
      width: 4.653vw;
      height: 4.653vw;
      color: #000000;
      cursor: pointer;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }
    .header-search-wrap--mobile-open .header-search-icon {
      transform: translateX(0);
    }
    .header-search-input {
      height: 100%;
      padding: 0 1.8182vw;
      font-size: 2.585vw;
      font-weight: 500;
      letter-spacing: -0.0389vw;
      color: #0A0A0A;
    }
    .header-search-input::placeholder {
      color: #A6A6A6;
    }

    .header-search-dropdown {
      width: 50.9091vw;
      top: calc(100% - 1.8182vw);
      border-radius: 2.4186vw;
      gap: 1.2091vw;
      left: 0;
    }
    .header-search-dropdown-li {
      height: 5.2273vw;
      line-height: 5.2273vw;
      padding: 0 1.6932vw;
      gap: 2.2977vw;
      font-size: 3.0405vw;
    }
    .header-search-dropdown-icon {
      flex-shrink: 0;
      width: 2.9023vw;
      height: 2.9023vw;
    }

    .shift-lang-wrap {
      width: 13.6364vw;
      height: 7.0682vw;
      flex-shrink: 0;
      border-radius: 3.5341vw;
      background: rgba(0, 0, 0, 0.25);
      color: #ffffff;
      cursor: pointer;
    }

    .shift-lang-bg-label {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6.5248vw;
      height: 6.5248vw;
      border-radius: 50%;
      text-align: center;
      font-weight: 500;
      font-size: 2.585vw;
      letter-spacing: -0.0389vw;
      top: 50%;
      transform: translateY(-50%);
      &--ar {
        left: 0.4091vw;
        transform: translateY(-50%) translateY(-0.4545vw);
      }
      &--en {
        left: 6.6727vw;
      }
    }

    .shift-lang-thumb {
      position: absolute;
      top: 50%;
      left: 0.4091vw;
      transform: translateY(-50%);
      width: 6.5248vw;
      height: 6.5248vw;
      border-radius: 50%;
      background-color: #000;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      &--en {
        transform: translate(6.0727vw, -50%);
      }
      &--ar {
        transform: translate(0, -50%);
      }
    }

    .header-contact {
      height: 6.9793vw;
      line-height: 6.9793vw;
      padding: 0 3.2311vw;
      justify-content: center;
      align-items: center;
      border-radius: 6.4625vw;
      background: #000;
      color: #FFF;
      font-size: 2.585vw;
      font-weight: 500;
      letter-spacing: -0.0389vw;
      min-width: 0;
      &:hover {
        background: #000;
      }
      &:active {
        background-color: #FF7A1A;
      }
    }

    .header-search-wrap--mobile-open ~ .shift-lang-wrap,
    .header-search-wrap--mobile-open ~ .header-contact,
    .header-search-wrap--mobile-open ~ .header-hamburger {
      width: 0;
      padding: 0;
      opacity: 0;
      margin: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .header-hamburger {
      width: 5.9091vw;
      height: 6.8182vw;
      padding: 0;
      border: none;
      background: transparent;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.1364vw;
      cursor: pointer;
      transition: opacity 0.2s ease, width 0.2s ease;
    }
    .header-hamburger-line {
      width: 5.9091vw;
      height: 0.6818vw;
      border-radius: 7.5vw;
      background: #000;
      display: block;
    }
  } 
}
</style>