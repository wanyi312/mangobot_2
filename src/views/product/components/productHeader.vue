<template>
  <div class="product-header">
    <div class="product-header-left">
      <div class="product-header-left-title">
        <span v-for="item in productInfo.title" :key="item">{{ item }}</span>
      </div>
      <div class="product-header-left-desc">
        {{ productInfo.desc?.toUpperCase() }}
      </div>
      <div class="product-header-left-desc-text" style="white-space: pre-line">
        {{ productInfo.descText }}
      </div>
      <div class="product-header-left-desc-button">
        <span></span>
        {{ productInfo.buttonText }}
      </div>
      <div class="product-header-left-desc-buttons">
        <div
          class="product-header-left-desc-buttons-button"
          @click="handleOrderNow"
        >
          {{ productInfo.buttons?.[0] }}
        </div>
        <div
          class="product-header-left-desc-buttons-button"
          @click="handleViewSpecs"
        >
          {{ productInfo.buttons?.[1] }}
        </div>
      </div>
    </div>
    <div
      :class="['product-header-right', productInfo.className]"
      :style="{ backgroundImage: `url(${productInfo.bgImgUrl})` }"
    ></div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { productInfo = {} } = defineProps(["productInfo"]);
const handleOrderNow = () => {
  router.push("/contactus");
};
const handleViewSpecs = () => {
  const el = document.getElementById("product-tech-specs");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
};
</script>
<style lang="less" scoped>
.product-header {
  display: flex;
  width: calc(100% - 280px);
  box-sizing: content-box;
  height: 651px;
  padding: 121px 140px;
  justify-content: space-between;
  align-items: center;
  background: #0a0a0a;
  font-family: Montserrat;
  &-left {
    display: flex;
    width: 654px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    &-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 40px;
      font-weight: 700;
      color: #fff;
      span:first-child {
        color: #fff;
        font-size: 96px;
        font-style: normal;
        font-weight: 500;
        line-height: 79.706px; /* 83.027% */
        letter-spacing: -1.249px;
      }
      span:last-child {
        color: #ff7a1a;
        font-family: Cormorant Garamond;
        font-size: 96px;
        font-style: italic;
        font-weight: 300;
        line-height: 79.706px;
        letter-spacing: -1.249px;
      }
    }
    &-desc {
      color: #ff7a1a;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    &-desc-text {
      color: #6b6b6b;
      font-size: 21.241px;
      font-style: normal;
      font-weight: 400;
      line-height: 38.234px; /* 180% */
    }
    &-desc-button {
      display: flex;
      padding: 8.641px 22.219px 8.641px 12.344px;
      align-items: center;
      gap: 9.875px;
      border-radius: 123.438px;
      border: 1.234px solid rgba(255, 122, 26, 0.25);
      background: rgba(255, 122, 26, 0.1);
      color: #ff7a1a;
      font-family: Syne;
      font-size: 16.047px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.617px;
      span {
        display: inline-block;
        width: 9.875px;
        height: 9.875px;
        border-radius: 4.938px;
        background: #ff7a1a;
      }
    }
    &-desc-buttons {
      display: flex;
      align-items: center;
      gap: 23px;
      &-button {
        display: flex;
        align-items: center;
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.3px;
        display: flex;
        height: 54px;
        padding: 3px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(0, 0, 0, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
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
  &-right {
    display: flex;
    width: 900px;
    height: 651px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 40px;
    background-repeat: no-repeat;
    background-color: lightgray;
  }
  .a2 {
    background-position: -0.169px -33.361px;
    background-size: 135.574% 124.969%;
  }
  .x2 {
    background-position: 50% 50%;
    background-size: cover;
  }
  .d1 {
    background-position: 50% 50%;
    background-size: cover;
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
    background-position: 50% 50%;
    background-size: cover;
  }
}
// 移动端尺寸（按 440px 设计稿：vw = px ÷ 440 × 100）
@media (max-width: 767px) {
  .product-header {
    width: calc(100% - 10.90909vw);
    display: flex;
    height: 121.43455vw;
    padding: 20vw 5.45455vw 7.88364vw 5.45455vw;
    flex-direction: column;
    align-items: center;
    gap: 7.27273vw;
    &-left {
      width: 100%;
      display: flex;
      height: 61.36364vw;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      align-self: stretch;
      &-title {
        color: #fff;
        text-align: center;
        font-family: Montserrat;
        font-size: 7.27273vw;
        font-style: normal;
        font-weight: 500;
        line-height: 5.19318vw; /* 71.405% */
        letter-spacing: -0.08136vw;
        span:first-child {
          color: #fff;
          text-align: center;
          font-family: Montserrat;
          font-size: 7.27273vw;
          font-style: normal;
          font-weight: 500;
          line-height: 5.19318vw; /* 71.405% */
          letter-spacing: -0.08136vw;
        }
        span:last-child {
          color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
          font-family: var(--font-family-Font-2, "Cormorant Garamond");
          font-size: 6.25477vw;
          font-style: italic;
          font-weight: 300;
          line-height: 5.19318vw;
          letter-spacing: -0.08136vw;
        }
      }

      &-desc {
        color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
        text-align: center;
        font-family: Montserrat;
        font-size: 2.085vw;
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: normal;
        letter-spacing: 0.13023vw;
        text-transform: uppercase;
      }

      &-desc-text {
        width: 77.72727vw;
        color: #fff;
        text-align: center;
        font-family: Montserrat;
        font-size: 2.5vw;
        font-style: normal;
        font-weight: 300;
        line-height: 5.22727vw; /* 209.091% */
      }

      &-desc-button {
        display: flex;
        padding: 0.90455vw 2.32591vw 0.90455vw 1.29205vw;
        align-items: center;
        gap: 1.03364vw;
        border-radius: 12.92136vw;
        border: 0.12932vw solid
          var(--color-orange-5525, rgba(255, 122, 26, 0.25));
        background: var(--color-orange-5510, rgba(255, 122, 26, 0.1));
        color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
        font-family: Geist;
        font-size: 1.67977vw;
        font-style: normal;
        font-weight: var(--font-weight-700, 700);
        line-height: normal;
        letter-spacing: 0.06455vw;
        span {
          border-radius: 0.51682vw;
          background: var(--color-orange-55, #ff7a1a);
          width: 1.03364vw;
          height: 1.03364vw;
        }
      }

      &-desc-buttons {
        display: flex;
        gap: 2.31727vw;
        &-button {
          display: flex;
          height: 5.44045vw;
          padding: 0.30227vw 2.51864vw;
          justify-content: center;
          align-items: center;
          gap: 1.0075vw;
          color: #fff;
          text-align: center;
          font-family: Montserrat;
          font-size: 2.015vw;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.03023vw;
          &:first-child {
            border-radius: 11.36364vw;
            background: #ff7a1a;
            border-width: 0;
          }
          &:last-child {
            color: #fff;
            text-align: center;
            font-family: Montserrat;
            font-size: 2.015vw;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.03023vw;
          }
        }
      }
    }
    &-right {
      display: flex;
      width: 69.54545vw;
      height: 50.22727vw;
      padding: 0.65159vw;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.65159vw;
      flex-shrink: 0;
      border-radius: 2.60614vw;
      background-repeat: no-repeat;
    }
    .a2 {
      background-size: 135.574% 124.969%;
      background-position: -0.03841vw -7.58205vw;
    }
    .x2 {
      background-position: -4.97977vw -0.0075vw;
      background-size: 120.373% 110.956%;
    }
    .d1 {
      background-position: -0.03455vw -1.45477vw;
      background-size: 100.05% 103.593%;
    }
    .d1max {
      background-position: -0.03455vw -1.45477vw;
      background-size: 100.05% 103.593%;
    }
    .d1promax {
      background-position: -0.03455vw -1.45477vw;
      background-size: 100.05% 103.593%;
    }
    .g1 {
      background-position: -0.03455vw -1.45477vw;
      background-size: 100.05% 103.593%;
    }
  }
}
</style>