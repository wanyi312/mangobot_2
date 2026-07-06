<template>
  <div class="productVideo">
    <div ref="leftWrapRef" class="productVideo-left">
      <div
        class="productVideo-left-play"
        v-if="!isPlaying"
        role="button"
        tabindex="0"
        @click="handlePlay"
        @keydown.enter.prevent="handlePlay"
        @keydown.space.prevent="handlePlay"
      >
        <img
          class="productVideo-left-play-img"
          :src="playButtonIcon"
          alt=""
          draggable="false"
        />
      </div>
      <div class="productVideo-left-process" v-if="videoUrls.length > 1">
        <button
          v-for="(_, index) in videoUrls"
          :key="index"
          type="button"
          class="productVideo-left-process-pill"
          :class="{ 'is-active': index === currentIndex }"
          :aria-label="`Video ${index + 1}`"
          @click="currentIndex = index"
        >
          <span
            v-if="index === currentIndex"
            class="productVideo-left-process-fill"
            :style="{ width: `${progressPercent}%` }"
          />
        </button>
      </div>
      <div class="productVideo-left-list" :style="listTransformStyle">
        <div
          class="productVideo-left-item"
          v-for="(item, index) in videoUrls"
          :key="index"
          :style="slideItemStyle"
          @click="handlePlayVideo(index)"
        >
          <video
            :ref="(el) => bindVideoRef(el, index)"
            :src="item"
            muted
            loop
            playsinline
            @timeupdate="onTimeUpdate($event, index)"
          />
        </div>
      </div>
    </div>
    <div class="productVideo-right">
      <div class="productVideo-right-tip">
        <span></span>
        {{ t("product.common.linksoulIntegration") }}
      </div>
      <div class="productVideo-right-title">
        {{ videoInfo.title }}
      </div>
      <div class="productVideo-right-desc">
        {{ videoInfo.desc }}
      </div>
      <div class="productVideo-right-texts">
        <div
          class="productVideo-right-texts-text"
          v-for="item in videoInfo.texts"
          :key="item.label"
        >
          <span>{{ item.value }}</span>
          {{ item.label }}
        </div>
      </div>
      <div class="productVideo-right-button" @click="handleRequestDemo">
        {{ t("product.common.requestDemo") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  defineProps,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import playButtonIcon from "../assets/streamline-ultimate_button-play-bold.svg";
const { t } = useI18n();
const router = useRouter();
const { videoInfo = {} } = defineProps(["videoInfo"]);

const leftWrapRef = ref(null);
/** Fallback before first measure; overwritten by ResizeObserver */
const slideWidth = ref(873);
const currentIndex = ref(0);
const isPlaying = ref(false);
const progressPercent = ref(0);

/** @type {Record<number, HTMLVideoElement>} */
const videoEls = {};

const videoUrls = computed(() => videoInfo.videoUrls ?? []);

const listTransformStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * slideWidth.value}px)`,
}));

const slideItemStyle = computed(() =>
  slideWidth.value > 0 ? { width: `${slideWidth.value}px` } : undefined
);

function measureSlideWidth() {
  const el = leftWrapRef.value;
  if (!el) return;
  const w = el.getBoundingClientRect().width;
  if (w > 0) slideWidth.value = w;
}

let resizeObserver;

onMounted(() => {
  const bindResizeObserver = () => {
    measureSlideWidth();
    const el = leftWrapRef.value;
    if (!el || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measureSlideWidth);
      return;
    }
    resizeObserver = new ResizeObserver(() => measureSlideWidth());
    resizeObserver.observe(el);
    window.addEventListener("resize", measureSlideWidth);
  };
  nextTick(() => {
    bindResizeObserver();
    requestAnimationFrame(measureSlideWidth);
    applyPlaybackState();
  });
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  window.removeEventListener("resize", measureSlideWidth);
});

function bindVideoRef(el, index) {
  if (el) {
    videoEls[index] = el;
    nextTick(() => applyPlaybackState());
  } else {
    delete videoEls[index];
  }
}

function applyPlaybackState() {
  const n = videoUrls.value.length;
  const active = currentIndex.value;
  const playing = isPlaying.value;
  for (let i = 0; i < n; i++) {
    const el = videoEls[i];
    if (!el) continue;
    if (playing && i === active) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }
}

watch(currentIndex, () => {
  progressPercent.value = 0;
  nextTick(() => applyPlaybackState());
});

watch(isPlaying, () => {
  nextTick(() => applyPlaybackState());
});

function handlePlay() {
  isPlaying.value = true;
}

/** 点击当前这一条视频区域时暂停（大播放按钮会重新出现） */
function handlePlayVideo(index) {
  if (index !== currentIndex.value) return;
  if (isPlaying.value) {
    isPlaying.value = false;
  }
}

watch(
  () => videoUrls.value.length,
  (len) => {
    if (currentIndex.value >= len) currentIndex.value = Math.max(0, len - 1);
    nextTick(() => applyPlaybackState());
  }
);

function onTimeUpdate(event, index) {
  if (index !== currentIndex.value) return;
  const video = event.target;
  if (!video?.duration) return;
  progressPercent.value = (video.currentTime / video.duration) * 100;
}

function handleRequestDemo() {
  router.push("/contactus");
}
</script>
<style lang="less" scoped>
.productVideo {
  width: 100%;
  height: 699px;
  padding: 0 140px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .productVideo-left {
    display: flex;
    width: 100%;
    max-width: 873px;
    flex: 1 1 873px;
    min-width: 0;
    height: 467px;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    &-process {
      position: absolute;
      left: 50%;
      bottom: 20px;
      z-index: 2;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    &-process-pill {
      flex-shrink: 0;
      height: 5px;
      width: 15px;
      padding: 0;
      border: none;
      border-radius: 999px;
      background: rgba(55, 48, 42, 0.55);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: width 0.3s ease, background 0.25s ease;
      &.is-active {
        width: 48px;
        background: rgba(55, 48, 42, 0.55);
      }
    }
    &-process-fill {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      border-radius: 999px;
      background: #fff;
      pointer-events: none;
      min-width: 0;
    }
    &-list {
      height: 467px;
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      transition: transform 0.35s ease;
    }
    &-play {
      width: 122px;
      height: 122px;
      flex-shrink: 0;
      aspect-ratio: 1/1;
      position: absolute;
      top: 50%;
      left: 50%;
      cursor: pointer;
      z-index: 1;
      border-radius: 100%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      &-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
        user-select: none;
      }
    }
    &-item {
      height: 467px;
      flex-shrink: 0;
      border-radius: 20px;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    // background: url('@/assets/video/productVideo.mp4') lightgray 50% / cover no-repeat;
  }
  .productVideo-right {
    display: flex;
    width: 639px;
    height: 589px;
    padding: 68px;
    flex-direction: column;
    flex-shrink: 0;
    gap: 16px;
    &-texts {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 14px 0 18px 0;
      flex-direction: column;
      &-text {
        color: #f3f3f3;
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: normal;
        display: flex;
        span {
          color: #ff7a1a;
          font-family: Montserrat;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-right: 8px;
        }
      }
    }
    &-tip {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 28.188px;
        height: 1.922px;
        background: #ff7a1a;
        margin-right: 4px;
      }
      color: #ff7a1a;
      font-family: Montserrat;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 2.5px;
      text-transform: uppercase;
    }
    &-desc {
      color: #f3f3f3;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 25.2px; /* 180% */
      white-space: pre-line;
    }
    &-button {
      display: flex;
      padding: 13px 26px;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      background: #ff7a1a;
      color: #fff;
      text-align: center;
      font-family: Montserrat;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      cursor: pointer;
      height: 42px;
      transition: background-color 0.1s ease, width 0.1s ease, height 0.1s ease,
        font-size 0.1s ease;

      // ===== 添加这三行 =====
      width: fit-content; // 宽度由内容决定
      flex-shrink: 0; // 防止被父元素压缩
      // ===================

      &:hover {
        background: #ff9a35;
        width: fit-content; // hover 时也保持
        font-size: 13px;
      }
    }
    &-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      color: #fff;
      font-family: "Cormorant Garamond";
      font-size: 44px;
      font-style: normal;
      font-weight: 300;
      line-height: 48.4px; /* 110% */
      letter-spacing: -0.8px;
    }
  }
}

// 移动端（440 设计稿：vw = px ÷ 440 × 100）
@media (max-width: 767px) {
  .productVideo {
    flex-direction: column-reverse;
    width: 100vw;
    max-width: 100%;
    height: 136.81818vw;
    padding: 0 5.45455vw 6.81818vw 5.45455vw;
    box-sizing: border-box;
    .productVideo-left {
      display: flex;
      max-width: 86.56159vw !important;
      height: 46.30432vw !important;
      width: 86.56159vw !important;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 1.98318vw;
      &-play {
        width: 12.09682vw;
        height: 12.09682vw;
        flex-shrink: 0;
        aspect-ratio: 1/1;
        &-img {
          width: 100%;
          height: 100%;
        }
      }
      &-list {
        height: 46.30432vw !important;
        width: 86.56159vw !important;
      }
      &-item {
        height: 46.30432vw !important;
        width: 86.56159vw !important;
      }
    }
    .productVideo-right {
      display: flex;
      width: 86.36364vw;
      height: 79.60591vw;
      padding: 9.19045vw;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.1625vw;
      flex-shrink: 0;
      box-sizing: border-box;
      &-button {
        display: flex;
        width: 26vw;
        height: 5.68182vw;
        padding: 1.75705vw 3.51409vw;
        justify-content: center;
        align-items: center;
        border-radius: 13.51545vw;
        background: #ff7a1a;
        color: var(--White, var(--color-white-solid, #fff));
        text-align: center;
        font-family: Montserrat;
        font-size: 1.75705vw;
        font-style: normal;
        font-weight: var(--font-weight-700, 700);
        line-height: normal;
      }
      &-title {
        color: var(--White, var(--color-white-solid, #fff));
        font-family: var(--font-family-Font-2, "Cormorant Garamond");
        font-size: 5.94682vw;
        font-style: normal;
        font-weight: var(--font-weight-300, 300);
        line-height: 6.54136vw; /* 110% */
        letter-spacing: -0.10818vw;
      }
      &-desc {
        color: var(--Concrete, var(--color-grey-95, #f3f3f3));
        font-family: Montserrat;
        font-size: 1.89227vw;
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: 3.40591vw; /* 180% */
      }
      &-texts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.62182vw;
        align-self: stretch;
      }
      &-texts-text {
        color: var(--White, var(--color-white-solid, #fff));
        font-family: Montserrat;
        font-size: 1.89227vw;
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: 3.40591vw; /* 180% */
        display: flex;
        align-items: flex-start;
        gap: 1.21636vw;
        align-self: stretch;
        span {
          color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
          font-family: Montserrat;
          font-size: 1.75705vw;
          font-style: normal;
          font-weight: var(--font-weight-400, 400);
          line-height: normal;
        }
      }

      &-tip {
        display: flex;
        align-items: center;
        gap: 0.54068vw;
        align-self: stretch;
        color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
        font-family: Montserrat;
        font-size: 1.35159vw;
        font-style: normal;
        font-weight: var(--font-weight-700, 700);
        line-height: normal;
        letter-spacing: 0.33795vw;
        text-transform: uppercase;
        span {
          width: 3.80977vw;
          height: 0.25977vw;
        }
      }
    }
  }
}
</style>