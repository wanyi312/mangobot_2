<template>
  <div class="layout">
    <SiteHeader />
    <!-- 横向溢出只在这一层裁剪，避免 html/body/.layout 的 overflow-x 影响 header 的 sticky/fixed -->
    <div class="layout-main">
      <router-view v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <div ref="routeContentRef" class="layout-route-content" :key="$route.fullPath">
            <component :is="Component" />
          </div>
        </Transition>
      </router-view>
      <div class="wechatApp" @click="handleWechatApp">
        <img class="wechatApp-icon" src="@/assets/imgs/phone.png" alt="">
      </div>
      <SiteFooter />
    </div>
  </div>
</template>
<script setup>
import SiteHeader from "../header/index.vue";
import SiteFooter from "../footer/index.vue";
import { computed, nextTick, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { SEARCH_HIGHLIGHT_QUERY_KEY } from "../header/config"

const route = useRoute();
const phoneNumber = "+971 56 199 1063";
const routeContentRef = ref(null);
let highlightTimerIds = [];
let lastAutoScrollKey = "";

function escapeRegex(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildHighlightRegex(rawKeyword) {
  const phrase = String(rawKeyword || "").trim();
  if (!phrase) return null;
  const tokens = phrase.split(/\s+/).filter((token) => token.length > 1).slice(0, 6);
  if (tokens.length === 0) tokens.push(phrase);
  return new RegExp(`(${tokens.map(escapeRegex).join("|")})`, "gi");
}

function findFirstMatchElement(root, keyword) {
  if (!root) return null;
  const regex = buildHighlightRegex(keyword);
  if (!regex) return null;
  const ignoredTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "MARK", "TEXTAREA", "INPUT", "BUTTON", "OPTION", "SELECT"]);
  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (ignoredTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      const value = node.nodeValue || "";
      if (!value.trim()) return NodeFilter.FILTER_REJECT;
      regex.lastIndex = 0;
      return regex.test(value) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  if (textWalker.nextNode()) {
    return textWalker.currentNode.parentElement;
  }
  return null;
}

function clearHighlightTimers() {
  highlightTimerIds.forEach((id) => window.clearTimeout(id));
  highlightTimerIds = [];
}

function scrollToFirstMatch(root, keyword, targetEl) {
  if (!targetEl) {
    targetEl = findFirstMatchElement(root, keyword);
  }
  if (!targetEl) return;
  const rect = targetEl.getBoundingClientRect();
  const headerOffset = isMobileViewport() ? window.innerWidth * 0.12 : window.innerWidth * 0.06;
  const viewportTop = headerOffset;
  const viewportBottom = window.innerHeight;
  // 如果元素已在视图范围内，不滚动
  if (rect.top >= viewportTop && rect.bottom <= viewportBottom) return;
  const top = rect.top + window.scrollY - headerOffset;
  nextTick(() => {
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  });
}

function syncRouteHighlight() {
  const root = routeContentRef.value;
  if (!root) return;
  const rawKeyword = route.query?.[SEARCH_HIGHLIGHT_QUERY_KEY];
  const keyword = typeof rawKeyword === "string" ? rawKeyword.trim() : "";
  if (!keyword) return;
  const currentScrollKey = `${route.fullPath}|${keyword}`;
  if (lastAutoScrollKey === currentScrollKey) return;
  const targetEl = findFirstMatchElement(root, keyword);
  if (!targetEl) return;
  // 找到元素后才更新 key，确保滚动成功
  lastAutoScrollKey = currentScrollKey;
  scrollToFirstMatch(root, keyword, targetEl);
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
}

/** 产品详情与文章详情在桌面端使用右滑入场，移动端统一淡入 */
const transitionName = computed(() => {
  if (isMobileViewport()) {
    return "fade";
  }
  const isProductDetail =
    (route.path.startsWith("/product/") &&
      typeof route.params?.id !== "undefined") ||
    route.path.startsWith("/blog/");
  return isProductDetail ? "slide-right" : "fade";
});

const normalizePhone = (rawPhone) => rawPhone.replace(/[^\d+]/g, "").replace(/^\+/, "");

/**
 * 悬浮 WhatsApp 按钮：优先唤起客户端协议 whatsapp://
 * 若约 1.2s 内页面未失焦/隐藏，则回退打开 web.whatsapp.com
 */
const handleWechatApp = () => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const normalizedPhone = normalizePhone(phoneNumber);
  if (!normalizedPhone) return;

  const appUrl = `whatsapp://send?phone=${normalizedPhone}`;
  const webUrl = `https://web.whatsapp.com/send?phone=${normalizedPhone}`;
  let hasSwitchedApp = false;
  let fallbackTimer = null;

  const cleanup = () => {
    window.removeEventListener("blur", onBlur);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = null;
    }
  };

  

  const onBlur = () => {
    hasSwitchedApp = true;
    cleanup();
  };

  const onVisibilityChange = () => {
    if (document.hidden) {
      hasSwitchedApp = true;
      cleanup();
    }
  };

  window.addEventListener("blur", onBlur);
  document.addEventListener("visibilitychange", onVisibilityChange);

  fallbackTimer = window.setTimeout(() => {
    cleanup();
    if (!hasSwitchedApp) {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }
  }, 1200);

  window.location.href = appUrl;
};

watch(
  () => route.fullPath,
  async () => {
    const rawKeyword = route.query?.[SEARCH_HIGHLIGHT_QUERY_KEY];
    if (!rawKeyword) {
      lastAutoScrollKey = "";
    }
    clearHighlightTimers();
    await nextTick();
    [0, 200, 800].forEach((delayMs) => {
      const timerId = window.setTimeout(() => {
        syncRouteHighlight();
      }, delayMs);
      highlightTimerIds.push(timerId);
    });
  },
  { immediate: true }
);

onUnmounted(() => {
  clearHighlightTimers();
});
</script>
<style lang="less" scoped>
/* 不在 html/body 上使用 overflow-x: hidden，否则会破坏子元素 position: sticky 相对视口的粘滞行为 */
:global(body) {
  max-width: 100vw;
}

.layout {
  width: 100%;
  margin: 0 auto;
  height: 100%;
  position: relative;
}

.layout-main {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.layout-route-content {
  width: 100%;
}

.layout-main .wechatApp {
    position: fixed;
    bottom: 30.5px;
    inset-inline-end: 36px;
    display: flex;
    width: 90px;
    height: 90px;
    padding: 15px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    background: #25D366;
    z-index: 1000;
    cursor: pointer;
    &-icon {
      width: 56.534px;
      height: 56.818px;
    }

    &:hover {
      background: #78FBA9;
      filter: drop-shadow(0 0 10.9px rgba(151, 255, 190, 0.44));
    }
}

:global(.fade-enter-active),
:global(.fade-leave-active) {
  transition: opacity 0.25s ease;
}

:global(.fade-enter-from),
:global(.fade-leave-to) {
  opacity: 0;
}

:global(.slide-right-enter-active),
:global(.slide-right-leave-active) {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

/* 新页面从右侧滑入 */
:global(.slide-right-enter-from) {
  transform: translateX(100%);
  opacity: 0;
}

:global(.slide-right-enter-to) {
  transform: translateX(0);
  opacity: 1;
}

/* 离开的页面往左滑出 */
:global(.slide-right-leave-from) {
  transform: translateX(0);
  opacity: 1;
}

:global(.slide-right-leave-to) {
  transform: translateX(-20%);
  opacity: 0;
}

@media (max-width: 767px) {
  .layout-main .wechatApp {
    bottom: 6.8181vw;
    inset-inline-end: 7.2727vw;
    width: 12.0454vw;
    height: 12.0454vw;
    padding: 2.19vw 2.1977vw 2.25vw 2.2818vw;
    border-radius: 50%;
    &-icon {
      width: 7.5663vw;
      height: 7.6045vw;
    }
  }
}
</style>