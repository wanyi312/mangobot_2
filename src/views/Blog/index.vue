<template>
  <div class="mangobot-events">
    <!-- Hero 区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          {{ t("product.blog.blog.hero_title") }}
          <i class="mangobot-highlight">{{ t("product.blog.blog.hero_title_1") }}</i>
        </h1>
        <p class="hero-subtitle">
          {{ t("product.blog.blog.hero_subtitle") }}
        </p>
      </div>
      <div class="hero-search" ref="searchWrapRef">
        <div class="search-input-wrapper">
          <img class="search-icon" src="../../assets/imgs/search-icon.svg" alt="" />
          <input ref="searchInputRef" :placeholder="t('product.blog.blog.search_placeholder')" class="search-input"
            v-model="searchQuery" autocomplete="off" @focus="openSearchDropdown" @input="openSearchDropdown" />
        </div>

        <ul v-show="isSearchDropdownVisible" class="header-search-dropdown" role="listbox">
          <li v-for="s in searchSuggestions" :key="s.path || s.label" class="header-search-dropdown-li"
            @mousedown.prevent="goSearchSuggestion(s)" role="none">
            <SvgIcon class="header-search-dropdown-icon" src="search-item" aria-hidden="true" />
            <span class="header-search-dropdown-label" :title="s.label">{{
              s.label
            }}</span>
          </li>
        </ul>
      </div>
      <div class="divpp-hero-img"></div>
    </section>
    <div class="hero-content-br"></div>

    <div class="custom-divider"></div>

    <!-- 活动详情卡片 -->
    <section class="featured-event">
      <div class="event-featured">
        <img class="event-image" src="../../assets/imgs/About-img.jpg" alt="" />
        <div class="event-details">
          <div class="event-badge">
            <span class="badge-dot"></span>
            <span class="badge-text">2025 · 8 min read</span>
            <span class="badge-text_1">Global Partner Program</span>
          </div>
          <h2 class="event-title">
            {{ Pinned.title }}
            <span class="hero-br"></span>
            {{ Pinned.subtitle }}
          </h2>
          <p class="event-desc">{{ Pinned.description }}</p>
          <button type="button" class="read-btn" @click="handleReadArticle(Pinned)">
            {{ t("product.blog.blog.read_article") }}
          </button>
        </div>
      </div>
    </section>

    <div class="custom-divider_1"></div>

    <!-- 过滤器栏 -->
    <section class="filter-bar">
      <div class="filter-list">
        <button v-for="(filter, index) in filters" :key="index"
          :class="['filter-btn', { active: activeFilter === filter.value }]" @click="activeFilter = filter.value">
          {{ filter.label }}
        </button>
      </div>
      <div class="event-count">
        <span>{{ filteredEvents.length }}
          {{ t("product.blog.blog.event_count") }}</span>
      </div>
    </section>

    <!-- 活动卡片网格 -->
    <section class="events-grid">
      <div class="events-row" v-for="(row, rowIndex) in eventRows" :key="'row-' + rowIndex">
        <div v-for="(event, index) in row" :key="'row-' + rowIndex + '-card-' + index" class="event-card"
          @click="handleReadArticle(event)">
          <div class="card-vis" :style="{ backgroundImage: `url(${event.image})` }">
            <span class="card-badge">{{ event.headerTitle }}</span>
            <span class="card-product">{{ event.category }}</span>
          </div>
          <div class="card-content">
            <h3 class="card-title">
              <!-- {{ event.title + (event.subtitle || "") }} -->
              {{ event.titleTag }}
            </h3>
            <p class="card-desc">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 订阅区域 -->
    <section class="subscribe-section">
      <div class="subscribe-content">
        <span class="subscribe-label">{{
          t("product.blog.blog.stay_updated")
        }}</span>
        <h2 class="subscribe-title">
          {{ t("product.blog.blog.subscribe_title") }}
          <i>{{ t("product.blog.blog.subscribe_title_1") }}</i>
        </h2>
      </div>
      <div class="subscribe-form">
        <input class="email-input" type="email" :placeholder="t('product.blog.blog.email_placeholder')" v-model="Email" />
        <button class="subscribe-btn" :disabled="loading" @click="handleSubscribe">
          {{ loading ? t("product.blog.blog.subscribing") : t("product.blog.blog.subscribe_btn") }}
        </button>
      </div>
    </section>

    <!-- 原生 Toast 提示 -->
    <div v-if="toastVisible" class="custom-toast" :class="toastType">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SvgIcon from "@/components/SvgIcon.vue";

const { t } = useI18n();
const activeFilter = ref(1);
const router = useRouter();
const route = useRoute();
const SEARCH_DROPDOWN_MAX = 14;

/** 桌面端每行 3 张卡片；移动端用大数使网格退化为单列纵向排列 */
const cardsPerRow = ref(3);
// Toast 相关
const toastVisible = ref(false);
const toastMessage = ref('');
const toastType = ref('success');
let toastTimer = null;

const showToast = (message, type = 'success') => {
  if (toastTimer) clearTimeout(toastTimer);
  toastMessage.value = message;
  toastType.value = type;
  toastVisible.value = true;
  toastTimer = setTimeout(() => {
    toastVisible.value = false;
  }, 3000);
};

const searchQuery = ref("");
const searchWrapRef = ref(null);
const searchInputRef = ref(null);
/** 为 false 时收缩下拉，直至再次聚焦/输入 */
const searchDropdownOpen = ref(false);

// 列表数据来自 public/config/blog.js → window.Blog（页面加载时已按语言选好分支）
const filters = ref(window.Blog.filters);

const Pinned = ref({});
Pinned.value = window.Blog.events.find((event) => event.isPinned);

const Email = ref("");
const loading = ref(false);

const events = ref(window.Blog.events.filter((event) => !event.isPinned));

/** activeFilter 为 1 表示「全部」；否则按 event.tags 是否包含该 value 筛选 */
const filteredEvents = computed(() => {
  if (activeFilter.value === 1) {
    return events.value;
  }
  return events.value.filter((event) => {
    if (!Array.isArray(event.tags)) return false;
    return event.tags.includes(activeFilter.value);
  });
});
const updateCardsPerRow = () => {
  if (window.innerWidth <= 767) {
    cardsPerRow.value = 100; // 移动端：设为一个大数，使所有数据在一行
  } else {
    cardsPerRow.value = 3;   // 桌面端：恢复为 3
  }
};

onMounted(() => {
  // 初始化
  updateCardsPerRow();

  // 监听窗口大小变化
  window.addEventListener('resize', updateCardsPerRow);
});

const eventRows = computed(() => {
  const rows = [];
  for (let i = 0; i < filteredEvents.value.length; i += cardsPerRow.value) {
    rows.push(filteredEvents.value.slice(i, i + cardsPerRow.value));
  }
  return rows;
});

/** 跳转 Markdown 详情，id 为配置中的 fileName */
const handleReadArticle = (item) => {
  router.push(`/blog/${item.fileName}`);
};

function normSearch(s) {
  return String(s ?? "")
    .trim()
    .toLowerCase();
}

function openSearchDropdown() {
  searchDropdownOpen.value = true;
}

function handleSearchOutsidePointerDown(event) {
  const wrap = searchWrapRef.value;
  if (!wrap || !searchDropdownOpen.value) return;
  const target = event.target;
  if (target instanceof Node && !wrap.contains(target)) {
    searchDropdownOpen.value = false;
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

const searchSuggestions = computed(() => {
  const q = normSearch(searchQuery.value);
  if (!q) return [];

  const out = [];
  const seen = new Set();

  const push = (label, path) => {
    if (!path || seen.has(path)) return;
    seen.add(path);
    out.push({ label: String(label), path });
  };

  for (const e of safeBlogEvents()) {
    if (!keyswordMatches(e?.keysword, q)) continue;
    const fileName = e?.fileName;
    if (!fileName) continue;
    const label =
      [e.title, e.subtitle].filter(Boolean).join(" ").trim() ||
      String(fileName);
    push(label, `/blog/${encodeURIComponent(fileName)}`);
  }

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
      { name: "A2", path: "/product/a2" },
      { name: "X2", path: "/product/x2" },
      { name: "D1 ultra", path: "/product/d1" },
      { name: "D1 max", path: "/product/d1max" },
      { name: "D1 max pro", path: "/product/d1promax" },
      { name: "G1", path: "/product/g1" },
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

function goSearchSuggestion(item) {
  searchDropdownOpen.value = false;
  searchInputRef.value?.blur();
  if (item.path) {
    router.push(item.path);
  }
  searchQuery.value = "";
}

const handleSubscribe = async () => {
  if (!Email.value) {
    showToast(t("product.blog.blog.subscribe_error_email"), 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(Email.value)) {
    showToast(t("product.blog.blog.subscribe_error_email_exists"), 'error');
    return;
  }

  if (loading.value) {
    return;
  }

  try {
    loading.value = true;

    const response = await fetch("https://email.mangobot.org/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email.value,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      showToast(t("product.blog.blog.subscribe_success"), 'success');
      Email.value = "";
    } else {
      showToast(result.message || t("product.blog.blog.subscribe_error"), 'error');
    }
  } catch (error) {
    console.error(error);
    showToast(t("product.blog.blog.subscribe_error_network"), 'error');
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleSearchOutsidePointerDown, true);
  document.addEventListener("touchstart", handleSearchOutsidePointerDown, true);
});

onUnmounted(() => {
  document.removeEventListener(
    "mousedown",
    handleSearchOutsidePointerDown,
    true
  );
  document.removeEventListener(
    "touchstart",
    handleSearchOutsidePointerDown,
    true
  );
});
</script>

<style scoped lang="less">
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 全局 */
.mangobot-events {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  overflow-x: hidden;
}

/* Toast 样式 */
.custom-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-family: Montserrat;
  z-index: 9999;
  animation: slideDown 0.3s ease;
  white-space: nowrap;

  &.success {
    background-color: #52c41a;
    color: white;
  }

  &.error {
    background-color: #ff4d4f;
    color: white;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.search-box {
  height: 36px;
  width: 380px;
  border-radius: 55px;
  background-color: rgba(217, 217, 217, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 12px;
  color: #757d89;
  font-size: 20px;
  font-weight: 500;
}

.contact-btn {
  height: 54px;
  border-radius: 50px;
  background-color: #979797;
  color: #fff;
  border: none;
  padding: 3px 25px;
  font-size: 20px;
  font-weight: 500;
}

/* Hero 区域 */
.hero-section {
  background: url("../../assets/imgs/About-bg1.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 1920px;
  height: 888px;
  margin: 0 auto;
  padding: 300px 0px 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.hero-content {
  text-align: center;
}

.hero-title {
  color: #0a0a0a;
  text-align: center;
  font-family: Montserrat;
  font-size: 112px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -2.5px;
  margin-bottom: 0;
}

.mangobot-highlight {
  color: #ff7a1a;
  font-family: Cormorant Garamond;
  font-style: italic;
  font-weight: 300;
  font-size: 128px;
}

.hero-subtitle {
  color: #6b6b6b;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 31.5px;
}

.hero-search {
  position: relative;
  width: 603.6px;
  height: 57.2px;
  border-radius: 87.37px;
}

.hero-subtitle {
  color: #6b6b6b;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 31.5px;
}

.hero-search {
  position: relative;
  width: 603.6px;
  height: 57.2px;
  border-radius: 87.37px;
  background-color: rgba(217, 217, 217, 0.25);
  border: 1.6px solid rgba(0, 0, 0, 0.1);
  padding: 0 4px;
  z-index: 999;
}

.search-input-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 12px;
}

.search-input {
  width: 603.6px;
  height: 57.2px;
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #757d89;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
}

.search-input::placeholder {
  color: #757d89;
  font-weight: 500;
  font-family: Montserrat;
  font-size: 20px;
}

.hero-search:hover,
.hero-search:focus-within {
  border: 1.6px solid #ff7a1a;
  border-radius: 87.37px;
}

.header-search-dropdown {
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  z-index: 10000 !important;
  padding: 12px 10px;
  margin: 0;
  width: 100%;
  max-width: 603.6px;
  list-style: none;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow: hidden;
}

.header-search-dropdown-li {
  list-style: none;
  margin: 0;
  padding: 0 14px;
  height: 48px;
  line-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  color: #7b7b7b;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;
}

.header-search-dropdown-li:hover {
  background-color: #f6f6f6;
}

.header-search-dropdown-icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  color: #7b7b7b;
}

.header-search-dropdown-label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Montserrat;
  font-size: 16px;
}

.search-icon {
  width: 37px;
  height: 37px;
  flex-shrink: 0;
}

/* 分隔线 */
.custom-divider,
.custom-divider_1 {
  margin: 0;
  height: 2px;
  background-color: #d0d0d0;
}

/* 活动详情 */
.featured-event {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 58px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.event-featured {
  display: flex;
  gap: 80px;
  max-width: 1302px;
  margin: 0 auto;
}

.event-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 360px;
  border-radius: 20px;
  width: 611px;
  background: linear-gradient(124.56deg, #f3f3f3, #e8e8e8);
  background-size: cover;
  background-position: center;
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.05), 0px 4px 32px rgba(0, 0, 0, 0.04);
  position: relative;
  object-fit: cover;
}

.event-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.event-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 13px 5px 7px;
  border-radius: 100px;
  background-color: rgba(255, 122, 26, 0.07);
  border: 1px solid rgba(255, 122, 26, 0.2);
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ff7a1a;
}

.badge-text {
  font-size: 10px;
  color: #ff7a1a;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.badge-text_1 {
  display: none;
}

.event-title {
  font-size: 36px;
  color: #0a0a0a;
  letter-spacing: -1.5px;
  line-height: 1.33;
  margin: 0;
  width: fit-content;
}

.event-desc {
  font-size: 15px;
  color: #6b6b6b;
  line-height: 1.8;
  margin: 0;
}

.read-btn {
  min-width: 352px;
  height: auto;
  border-radius: 11px;
  background-color: #000;
  border: none;
  padding: 12px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-btn:hover {
  background-color: #ff7a1a;
}

/* 过滤器栏 */
.filter-bar {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 17px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.filter-list {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
}

.filter-btn {
  border-radius: 100px;
  padding: 7px 18px;
  font-size: 11.5px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  color: #6b6b6b;
  background: transparent;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: #fff;
}

.event-count {
  font-size: 11px;
  color: #9a9a9a;
  letter-spacing: 1px;
  width: fit-content;
  white-space: nowrap;
}

/* 活动卡片网格 */
.events-grid {
  max-width: 1920px;
  margin: 0 auto;
  padding: 13px 0px 83px;
}

.events-row {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  padding-left: 16.1%;
  padding-right: 15.5%;
}

.event-card {
  width: 418px;
  height: auto;
  min-height: 279.993px;
  flex-shrink: 0;
  border-radius: 14.7px;
  border: 0.8px solid rgba(0, 0, 0, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.09);
}

.card-vis {
  height: 170px;
  width: 100%;
  background: linear-gradient(124.56deg, #f3f3f3, #e8e8e8);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background-size: cover;
  background-position: center;
  object-fit: cover;
}

.card-badge {
  color: #0a0a0a;
  border-radius: 18px;
  background-color: #fff;
  border: none;
  font-weight: 700;
  font-size: 7.737px;
  font-family: Montserrat;
  margin-left: 19px;
  margin-top: 14.7px;
  padding: 4px 10px;
  display: inline-block;
}

.card-product {
  position: absolute;
  top: 14.7px;
  right: 19.34px;
  font-size: 6.96px;
  font-weight: 700;
  color: #888;
}

.card-content {
  padding: 26px 17px 24px;
  min-height: 109px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-title {
  font-size: 13.93px;
  font-weight: 800;
  letter-spacing: -0.23px;
  line-height: 1.2;
  margin-bottom: 10px;
  min-height: 34px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-desc {
  font-size: 9.67px;
  font-weight: 300;
  color: #6b6b6b;
  line-height: 1.6;
  margin: 0;
  display: block;
  -webkit-line-clamp: unset;
  -webkit-box-orient: unset;
  overflow: visible;
}

/* 订阅区域 */
.subscribe-section {
  background-color: #0a0a0a;
  padding: 130px 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
}

.subscribe-label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #ff7a1a;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.subscribe-title {
  margin-top: 16px !important;
  font-size: 54px;
  color: #fff;
  font-family: Cormorant Garamond;
  font-weight: 300;
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.06;
}

.subscribe-title i {
  color: #ff7a1a;
  font-style: italic;
}

.subscribe-form {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}

.email-input {
  width: 604px;
  height: 57.2px;
  border-radius: 87.37px;
  background-color: rgba(217, 217, 217, 0.25);
  border: 1.6px solid rgba(0, 0, 0, 0.1);
  padding-left: 28px;
  color: #757d89;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  outline: none;
  transition: all 0.2s ease;
}

.email-input::placeholder {
  color: #757d89;
  font-weight: 500;
  font-family: Montserrat;
  font-size: 20px;
}

.email-input:hover {
  border-color: #ff7a1a;
}

.email-input:focus {
  outline: none;
  border-color: #ff7a1a;
  background-color: rgba(217, 217, 217, 0.35);
  box-shadow: 0 0 0 2px rgba(255, 122, 26, 0.2);
}

.subscribe-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  border-radius: 100px;
  background-color: #0a0a0a;
  border: none;
  padding: 15px 32px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.2px;
  min-width: 139px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  background-color: #ff7a1a;
  color: #fff;
}

.subscribe-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.hero-br {
  display: block;
  content: "";
  height: 0;
}

/* 响应式 */
@media (max-width: 767px) {
  .hero-section {
    display: flex;
    height: 104.545vw; // 460 / 440 * 100
    min-height: 79.318vw; // 349 / 440 * 100
    padding: 17.075vw 3.147vw 9.091vw 3.147vw; // 75.132, 13.849, 40, 13.849
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background-image: url(../../assets/imgs/Frame-bg.png);
    background-size: cover;
    background-position: center;

    .hero-title {
      font-size: 7.273vw; // 32 / 440 * 100
      font-style: normal;
      font-weight: 400;
      line-height: 8.508vw; // 37.434 / 440 * 100
      letter-spacing: -0.197vw; // -0.866 / 440 * 100

      .mangobot-highlight {
        font-size: 9.091vw; // 40 / 440 * 100
      }
    }

    .hero-subtitle {
      margin-top: 3.5vw; // 15.4 / 440 * 100
      margin-bottom: 0px;
      width: 80vw; // 352 / 440 * 100
      font-size: 3.182vw; // 14 / 440 * 100
      font-style: normal;
      font-weight: 300;
      line-height: 5.227vw; // 23 / 440 * 100
    }

    .hero-search {
      width: 65.455vw; // 288 / 440 * 100
      height: 6.201vw; // 27.284 / 440 * 100
      flex-shrink: 0;
      z-index: 4;

      .search-input-wrapper {
        gap: 2.5vw; // 11 / 440 * 100
      }

      .search-icon {
        margin-left: 1.591vw; // 7 / 440 * 100
        width: 4.012vw; // 17.653 / 440 * 100
        height: 4.012vw;
        aspect-ratio: 1/1;
      }

      .search-input,
      .search-input::placeholder {
        color: #757D89;
        font-family: Montserrat;
        font-size: 2.168vw; // 9.542 / 440 * 100
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.032vw; // -0.143 / 440 * 100
      }
    }

    .divpp-hero-img {
      position: absolute;
      top: 79.545vw; // 350 / 440 * 100
      left: 0;
      width: 100%;
      height: 5%;
      flex-shrink: 0;
      background-image: url("../../assets/imgs/Frame-bg1.png");
      background-repeat: no-repeat;
    }
  }

  .hero-content-br {
    height: 14.773vw; // 65 / 440 * 100
  }

  .featured-event {
    display: flex;
    height: 115.455vw; // 508 / 440 * 100
    min-height: 79.318vw; // 349 / 440 * 100
    padding: 14.091vw 5.455vw 10.227vw; // 62, 24, 45
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;

    .event-featured {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: flex-start;
      align-self: stretch;
      max-width: none;
      gap: 5.909vw; // 26 / 440 * 100

      .event-image {
        display: flex;
        width: 89.091vw; // 392 / 440 * 100
        height: 49.091vw; // 216 / 440 * 100
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 4.545vw; // 20 / 440 * 100
      }

      .event-details {
        flex: none;
        gap: 0px;

        .event-badge {
          height: 3.818vw; // 16.8 / 440 * 100
          display: flex;
          padding: 0.472vw 1.259vw 0.472vw 0.63vw; // 2.077, 5.54, 2.077, 2.77
          align-items: center;
          gap: 0.63vw; // 2.77 / 440 * 100
          border-radius: 7.869vw; // 34.623 / 440 * 100
          border: 0.079vw solid var(--color-orange-5520, rgba(255, 122, 26, 0.20)); // 0.346
          background: var(--color-orange-557, rgba(255, 122, 26, 0.07));

          .badge-dot {
            width: 0.551vw; // 2.424 / 440 * 100
            height: 0.551vw;
            border-radius: 0.275vw; // 1.212 / 440 * 100
            background: var(--color-orange-55, #FF7A1A);
          }

          .badge-text {
            display: none;
          }

          .badge-text_1 {
            display: block;
            color: var(--Pumpkin, var(--color-orange-55, #FF7A1A));
            text-align: center;
            font-family: Montserrat;
            font-size: 2.273vw; // 10 / 440 * 100
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.118vw; // 0.519 / 440 * 100
            text-transform: uppercase;
          }
        }

        .event-title {
          width: 80.455vw; // 354 / 440 * 100
          margin-top: 2.5vw; // 11 / 440 * 100
          color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
          font-family: Montserrat;
          font-size: 4.091vw; // 18 / 440 * 100
          font-style: normal;
          font-weight: 400;
          line-height: 5.909vw; // 26 / 440 * 100
          letter-spacing: -0.341vw; // -1.5 / 440 * 100
          white-space: pre-line;
        }

        .hero-br {
          display: none !important;
        }

        .event-desc {
          width: 89.091vw; // 392 / 440 * 100
          color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B));
          font-family: Montserrat;
          font-size: 3.182vw; // 14 / 440 * 100
          font-style: normal;
          font-weight: 300;
          line-height: 5.227vw; // 23 / 440 * 100
        }

        .read-btn {
          margin-top: 3.477vw; // 15.3 / 440 * 100
          height: 7.864vw; // 34.6 / 440 * 100
          display: flex;
          width: 75.455vw; // 332 / 440 * 100
          padding: 2.004vw; // 8.816 / 440 * 100
          flex-direction: column;
          align-items: center;
          border-radius: 1.837vw; // 8.081 / 440 * 100
          background: #000;
          font-size: 3.182vw; // 14 / 440 * 100
          font-style: normal;
          font-weight: var(--font-weight-600, 600);
          line-height: normal;
        }
      }
    }
  }

  .custom-divider {
    display: block;
  }

  .custom-divider_1 {
    display: none;
  }

  .filter-bar {
    display: flex;
    width: 100%;
    padding: 3.182vw 5.455vw; // 14, 24
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    box-sizing: border-box;
    border-bottom: 0px;

    .filter-list {
      display: flex;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      flex-wrap: nowrap;
      gap: 2.045vw; // 9 / 440 * 100
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .filter-btn {
        height: 6.818vw; // 30 / 440 * 100
        display: flex;
        padding: 1.591vw 4.091vw; // 7, 18
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        border-radius: 22.727vw; // 100 / 440 * 100
        font-size: 2.614vw; // 11.5 / 440 * 100
        font-style: normal;
        font-weight: var(--font-weight-600, 600);
        line-height: normal;
        letter-spacing: 0.068vw; // 0.3 / 440 * 100
      }
    }

    .event-count {
      display: none;
    }
  }

  .events-grid {
    width: 100%;
    max-width: 100vw;
    padding: 2.273vw 5.455vw 9.091vw; // 10, 24, 40

    .events-row {
      width: 100%;
      max-width: 100vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      gap: 4.545vw; // 20 / 440 * 100
      margin: 0 auto;
      padding: 0;

      .event-card {
        display: flex;
        width: calc((100% - 4.545vw) / 2);
        height: 46.244vw; // 203.472 / 440 * 100
        padding-bottom: 4.383vw; // 19.285 / 440 * 100
        flex-direction: column;
        align-items: flex-start;
        border-radius: 1.928vw; // 8.482 / 440 * 100
        border: 0.101vw solid var(--color-black-7, rgba(0, 0, 0, 0.07)); // 0.446
        background: var(--color-white-solid, #FFF);
        flex-shrink: 0;
        flex-grow: 0;
        box-sizing: border-box;
        overflow: hidden;

        .card-vis {
          display: flex;
          height: 27.5vw; // 121 / 440 * 100
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          align-self: stretch;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          .card-badge {
            display: flex;
            padding: 0.406vw 1.015vw; // 1.786, 4.464
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            left: 1.42vw; // 6.25 / 440 * 100
            top: 1.42vw;
            border-radius: 10.146vw; // 44.641 / 440 * 100
            font-size: 1.364vw; // 6 / 440 * 100
            font-style: normal;
            font-weight: var(--font-weight-700, 700);
            line-height: normal;
          }

          .card-product {
            position: absolute;
            right: 2.853vw; // 12.552 / 440 * 100
            top: 2.051vw; // 9.025 / 440 * 100
            color: #888;
            font-family: Montserrat;
            font-size: 1.364vw; // 6 / 440 * 100
            font-style: normal;
            font-weight: var(--font-weight-700, 700);
            line-height: normal;
          }
        }

        .card-content {
          padding: 2.273vw; // 10 / 440 * 100
          gap: 0.909vw; // 4 / 440 * 100

          .card-title {
            color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
            font-family: Montserrat;
            font-size: 1.826vw; // 8.035 / 440 * 100
            font-style: normal;
            font-weight: var(--font-weight-800, 800);
            line-height: normal;
            letter-spacing: -0.03vw; // -0.134 / 440 * 100
          }

          .card-desc {
            color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B));
            font-family: Montserrat;
            font-size: 1.818vw; // 8 / 440 * 100
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }
        }
      }
    }
  }

  .subscribe-section {
    display: flex;
    width: 100vw;
    height: 63.636vw; // 280 / 440 * 100
    padding: 0 5.455vw; // 0, 24
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4.545vw; // 20 / 440 * 100

    .subscribe-content {
      width: 100%;

      .subscribe-label {
        text-align: center;
        font-family: Montserrat;
        font-size: 3.182vw; // 14 / 440 * 100
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.568vw; // 2.5 / 440 * 100
        text-transform: uppercase;
      }

      .subscribe-title {
        text-align: center;
        font-size: 9.091vw; // 40 / 440 * 100
        font-style: italic;
        font-weight: 300;
        line-height: 12.413vw; // 54.619 / 440 * 100
        letter-spacing: -0.297vw; // -1.307 / 440 * 100
      }
    }

    .subscribe-form {
      width: 100%;
      gap: 1.136vw; // 5 / 440 * 100

      .email-input {
        width: 46.602vw; // 205.051 / 440 * 100
        height: 4.415vw; // 19.426 / 440 * 100
        flex-shrink: 0;
        border-radius: 6.745vw; // 29.678 / 440 * 100
        font-size: 1.818vw; // 8 / 440 * 100
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.015vw; // 0.068 / 440 * 100
      }

      .email-input::placeholder {
        display: none;
        font-size: 1.818vw; // 8 / 440 * 100
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.015vw; // 0.068 / 440 * 100
      }

      .subscribe-btn {
        display: flex;
        height: 3.783vw; // 16.645 / 440 * 100
        padding: 1.158vw 2.47vw; // 5.096, 10.87
        flex-direction: column;
        align-items: center;
        border-radius: 7.72vw; // 33.97 / 440 * 100
        background: var(--color-orange-55, #FF7A1A);
        color: var(--White, var(--color-white-solid, #FFF));
        text-align: center;
        font-family: Montserrat;
        font-size: 1.081vw; // 4.756 / 440 * 100
        font-style: normal;
        font-weight: var(--font-weight-700, 700);
        line-height: normal;
        letter-spacing: 0.015vw; // 0.068 / 440 * 100
      }
    }
  }
}
</style>