<template>
  <div class="product-view">
    <div
      :class="['product-view-left', productInfo.className]"
      :style="{ backgroundImage: `url(${productInfo.imgUrl})` }"
    ></div>
    <div class="product-view-right">
      <div class="product-view-right-title-container">
        <div class="product-view-right-title">
          {{ productInfo.title }}
        </div>
        <div class="product-view-right-title1">
          {{ productInfo.title1 }}
        </div>
      </div>
      <div class="product-view-right-desc">
        {{ productInfo.desc }}
      </div>
      <div class="product-view-right-buttons">
        <div class="product-view-right-buttons-button" @click="handleGetAQuote">
          {{ t("product.common.getQuote") }}
        </div>
        <div
          class="product-view-right-buttons-button"
          @click="handleBecomeAPartner"
        >
          {{ t("product.common.becomePartner") }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const router = useRouter();
const { productInfo = {} } = defineProps(["productInfo"]);
const handleGetAQuote = () => {
  router.push("/contactus");
};
const PARTNERSHIPS_ANCHOR = "partner-the-arsenale";
const handleBecomeAPartner = () => {
  router.push({ path: "/partnerships", hash: `#${PARTNERSHIPS_ANCHOR}` });
};
</script>
<style lang="less" scoped>
.product-view {
  display: flex;
  height: 467px;
  width: calc(100% - 280px);
  padding: 120px 140px;
  align-items: center;
  gap: 161px;
  flex-shrink: 0;
  align-self: stretch;
  background: #0a0a0a;
  box-sizing: content-box;
  font-family: Montserrat;
  &-left {
    width: 873px;
    height: 467px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .a2 {
    background-position: -0.323px 0.079px;
    background-size: 100% 124.64%;
  }
  .x2 {
    background-position: 50% 50%;
    background-size: cover;
  }
  .d1 {
    background-position: -188.904px -1009.197px;
    background-size: 125.964% 353.169%;
  }
  .d1max {
    background-position: 50% 50%;
    background-size: cover;
  }
  .d1promax {
    background-position: 50% 50%;
    background-size: cover;
  }
  .g1 {
    background-position: -47.489px -26.042px;
    background-size: 115.999% 121.976%;
  }
  &-right {
    &-title {
      color: #fff;
      font-size: 88px;
      font-style: normal;
      font-weight: 400;
      line-height: 83.6px; /* 95% */
      letter-spacing: -2px;
    }
    &-title1 {
      color: #ff7a1a;
      font-family: Cormorant Garamond;
      font-size: 88px;
      font-style: italic;
      font-weight: 300;
      line-height: 83.6px; /* 95% */
      letter-spacing: -2px;
    }
    &-desc {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 19px 0;
      white-space: pre-line;
    }
    &-buttons {
      display: flex;
      align-items: center;
      gap: 13px;
      &-button {
        display: flex;
        height: 54px;
        padding: 3px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.3px;
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(0, 0, 0, 0);
        cursor: pointer;
        margin: 52px 0px;
        &:first-child {
          border-radius: 50px;
          background: #ff7a1a;
          border-width: 0px;
          &:hover {
            background: #ffb688;
            box-shadow: 0 0 20.1px 8px rgba(255, 122, 26, 0.34);
          }
        }
        &:last-child {
          &:hover {
            background: #ff7a1a;
          }
        }
      }
    }
  }
}

// 移动端（440 设计稿：vw = px ÷ 440 × 100；逆序：右栏在上）
@media (max-width: 767px) {
  .product-view {
    display: flex;
    width: 100%;
    height: auto;
    padding: 8.63636vw 5.45455vw;
    flex-direction: column-reverse;
    align-items: center;
    box-sizing: border-box;
    gap: 0;
    &-left {
      width: 89.09091vw;
      height: 47.65795vw;
    }
    &-right {
      &-title {
        display: inline-block;
        color: var(--White, var(--color-white-solid, #fff));
        text-align: center;
        font-family: "Cormorant Garamond";
        font-size: 13.06659vw;
        font-style: italic;
        font-weight: 300;
        line-height: 12.41341vw; /* 95% */
        letter-spacing: -0.29705vw;
        &-container {
          display: flex;
          justify-content: center;
        }
      }
      &-title1 {
        display: inline-block;
        color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
        font-family: var(--font-family-Font-2, "Cormorant Garamond");
        font-size: 13.06659vw;
        font-style: italic;
        font-weight: 300;
        line-height: 12.41341vw;
        letter-spacing: -0.29705vw;
      }
      &-desc {
        text-align: center;
        color: #fff;
        font-family: Montserrat;
        font-size: 2.37568vw;
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: normal;
        margin: 2.72727vw 0;
      }
      &-buttons {
        display: flex;
        align-items: center;
        gap: 1.93023vw;
        height: 8.01818vw;
        margin: 7.5vw 0;
        &-button {
          display: flex;
          height: 8.01818vw;
          padding: 0.44545vw 3.71205vw;
          justify-content: center;
          align-items: center;
          gap: 1.48477vw;
          color: #fff;
          text-align: center;
          font-family: Montserrat;
          font-size: 2.96977vw;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.04455vw;
          &:first-child {
            border-radius: 7.42432vw;
            background: #ff7a1a;
          }
          &:last-child {
            border-radius: 7.42432vw;
            border: 0.14841vw solid rgba(255, 255, 255, 0.5);
            background: rgba(0, 0, 0, 0);
          }
        }
      }
    }
  }
  .a2 {
    background-position: -0.03295vw 0.00795vw !important;
    background-size: 100% 124.64% !important;
  }
  .x2 {
    background-position: -7.55114vw -5.91477vw !important;
    background-size: 117.129% 124.64% !important;
  }
  .d1 {
    background-position: -19.27841vw -102.98909vw !important; 
    background-size: 125.964% 353.169% !important;
  }
  .d1max {
    background-position: 50% 50%;
    background-size: cover;
  }
  .d1promax {
    background-position: 50% 50%;
    background-size: cover;
  }
  .g1 {
    background-position: -4.84636vw -2.65773vw !important;
    background-size: 115.999% 121.976% !important;
  }
}
</style>