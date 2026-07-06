<template>
  <Teleport to="body">
    <Transition name="nav-mobile-slide">
      <div
        v-if="modelValue"
        class="nav-mobile-dialog"
        role="dialog"
        aria-modal="true"
        :aria-label="t('navMobileMenu')"
      >
        <div class="nav-mobile-inner">
          <header class="nav-mobile-header">
            <div class="nav-mobile-logo-wrap" @click="goHomeAndClose">
              <SvgIcon class="nav-mobile-logo" src="logo" />
            </div>
            <button
              type="button"
              class="nav-mobile-close"
              :aria-label="t('navMobileClose')"
              @click="close"
            >
              <span class="nav-mobile-close-line" />
              <span class="nav-mobile-close-line" />
              <span class="nav-mobile-close-line" />
            </button>
          </header>
          <nav class="nav-mobile-nav" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
            <template v-for="(item, index) in menuItems" :key="item.path">
              <template v-if="item.children?.length">
                <div class="nav-mobile-row nav-mobile-row--accordion">
                    <div
                      type="button"
                      class="nav-mobile-link nav-mobile-link--main nav-mobile-link--parent"
                      @click="goAndClose(item)"
                    >
                      <div class="nav-mobile-link-content">
                        <span class="nav-mobile-link-content-text">{{ t(item.nameKey) }}</span>
                        <SvgIcon
                          class="nav-mobile-chevron"
                          :class="{ 'nav-mobile-chevron--open': navOpenMap[index] }"
                          src="drop-down"
                          @click.stop="handleNavOpen(index)"
                        />
                      </div>
                      <div
                        class="nav-mobile-accordion-grid"
                        :class="{ 'nav-mobile-accordion-grid--open': navOpenMap[index] }"
                      >
                        <div class="nav-mobile-accordion-grid-inner">
                          <ul class="nav-mobile-sublist">
                            <li v-for="child in item.children" :key="child.path">
                              <button
                                type="button"
                                class="nav-mobile-link nav-mobile-link--sub"
                                @click.stop="goProductAndClose(child)"
                              >
                                {{ child.name ? child.name : t(child.nameKey) }}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>
                  
                </div>
                
              </template>
              <template v-else>
                <div class="nav-mobile-row">
                  <button
                    type="button"
                    class="nav-mobile-link nav-mobile-link--main"
                    @click="goAndClose(item)"
                  >
                    {{ t(item.nameKey) }}
                  </button>
                </div>
              </template>
            </template>
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SvgIcon from "@/components/SvgIcon.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  menuItems: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const navOpenMap = ref({})

function close() {
  emit("update:modelValue", false);
  navOpenMap.value = {};
}

function handleNavOpen(index) {
  const next = !navOpenMap.value[index];
  navOpenMap.value = { ...navOpenMap.value, [index]: next };
}

function goAndClose(item) {
  if (item.path) {
    router.push(item.path);
    close();
  }
}

function goProductAndClose(child) {
  if (child.path) {
    router.push(child.path);
  }
  close();
}

function goHomeAndClose() {
  router.push("/");
  close();
}

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});
</script>

<style lang="less" scoped>
/* 设计稿宽度 440px：vw = px / 440 * 100 */

.nav-mobile-dialog {
  position: fixed;
  inset: 0;
  z-index: 1001;
  width: 100%;
  min-height: 100%;
  min-height: 100dvh;
  background: #fff;
  font-family: Montserrat;
  box-sizing: border-box;
  // overflow: auto;
  // -webkit-overflow-scrolling: touch;
}

.nav-mobile-inner {
  min-height: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // padding-bottom: 6.3636vw;
}

.nav-mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // height: 14.3182vw;
  margin: 0 5.4545vw;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 3.6363vw 0 10vw;
  border-bottom: 0.1147vw solid #D5D5D5;
}

.nav-mobile-logo-wrap {
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;
  .nav-mobile-logo {
    width: 22.36vw;
    height: 7.0752vw;
  }
}

.nav-mobile-close {
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
}

.nav-mobile-close-line {
  width: 5.9091vw;
  height: 0.6818vw;
  border-radius: 7.5vw;
  background: #000;
  display: block;
}

.nav-mobile-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 5.4545vw;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.nav-mobile-row {
  padding: 0 5.4545vw;
}

.nav-mobile-row-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.nav-mobile-link-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.nav-mobile-row--accordion {
  padding: 0 5.4545vw;
}

.nav-mobile-link {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  text-align: start;
  cursor: pointer;
  box-sizing: border-box;
  padding: 4.0909vw 0.6818vw;
}
.nav-mobile-link--main {
  line-height: 5.4545vw;
  font-size: 4.5454vw;
  font-weight: 500;
  color: #000;
  letter-spacing: -0.0854vw;
  justify-content: space-between;
  gap: 2.2727vw;
  border-bottom: 0.1147vw solid #D5D5D5;
  &:not(.nav-mobile-link--parent) {
    &:active {
      color: #FF7A1A;
    }
  }
}
.nav-mobile-link--parent {
  padding-right: 0;
  display: block;
  .nav-mobile-link-content {
    .nav-mobile-link-content-text {
      flex: 1;
      &:active {
        color: #FF7A1A;
      }
    }
  }
}

.nav-mobile-link--accordion .nav-mobile-link--main {
  justify-content: space-between;
}

.nav-mobile-chevron {
  width: 4.7747vw;
  height: 100%;
  flex-shrink: 0;
  color: #0a0a0a;
  transition: transform 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  :deep(svg) {
    width: 3.1338vw;
    height: 1.8129vw;
  }
}

.nav-mobile-chevron--open {
  transform: rotate(0deg);
}

/* 用 grid 行高 0fr→1fr 做过渡，高度随内容变化；纯 opacity/height:auto 无法顺滑 */
.nav-mobile-accordion-grid {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-mobile-accordion-grid--open {
  grid-template-rows: 1fr;
}

.nav-mobile-accordion-grid-inner {
  min-height: 0;
  overflow: hidden;
}

.nav-mobile-sublist {
  list-style: none;
  margin: 0;
  padding: 0;
  // padding: 2.2727vw 0 0;
  li {
    margin-bottom: 2.2727vw;
    &:last-of-type {
      margin-bottom: 0;
    }
    &:first-of-type {
      margin-top: 2.2727vw;
    }

  }
}

.nav-mobile-sublist .nav-mobile-link--sub {
  height: 5.909vw;
  padding: 0 4.0909vw;
  font-size: 4.0909vw;
  font-weight: 400;
  color: #8A8A8A;
  letter-spacing: -0.0307vw;
  justify-content: flex-start;
  &:active {
    background: #EAEAEA;
  }
}

.nav-mobile-slide-enter-active,
.nav-mobile-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-mobile-slide-enter-from,
.nav-mobile-slide-leave-to {
  transform: translateX(100%);
}

.nav-mobile-slide-enter-to,
.nav-mobile-slide-leave-from {
  transform: translateX(0);
}
</style>
