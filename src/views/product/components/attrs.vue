<template>
  <div :class="['attrs', `attrs-${attrs.children?.length}`]">
    <div
      :class="[
        'attrs-left',
        `attrs-left-${attrs.children?.length}`,
        `attrs-left-${productName}`,
      ]"
    >
      <div id="product-tech-specs" class="attrs-left-top">
        <span></span>
        {{ t("product.common.techSpecs") }}
      </div>
      <div class="attrs-left-title">{{ attrs.title }}</div>
      <div class="attrs-left-title1">{{ attrs.title1 }}</div>
      <div class="attrs-left-desc">
        {{ attrs.desc }}
      </div>
      <div
        :class="['attrs-left-bg', { ar: isAr && attrs.children?.length == 1 } , { [`${attrs.className}-bg`]: attrs.className }]"
      >
        <div
          :class="['attrs-left-bg-top', attrs.className]"
          :style="{ backgroundImage: `url(${attrs.imgUrl})` }"
        ></div>
        <div class="attrs-left-bg-bottom"></div>
      </div>
    </div>
    <div :class="['attrs-right', `attrs-right-${attrs.children?.length}`]">
      <div
        class="attrs-right-list"
        v-for="item in attrs.children"
        :key="item.label"
      >
        <div class="attrs-right-list-item" v-for="a in item" :key="a.label">
          <div class="attrs-right-list-item-title">
            {{ a.label }}
          </div>
          <div
            class="attrs-right-list-item-value"
            v-for="b in a.children"
            :key="b.label"
          >
            <span>{{ b.label }}</span>
            <span>{{ b.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { attrs = [], productName } = defineProps(["attrs", "productName"]);

const language = localStorage.getItem("language") || "en";
const isAr = language === "ar";
</script>
<style lang="less" scoped>
.attrs {
  display: flex;
  height: 1194px;
  padding: 60px 140px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  &-2 {
    padding: 60px 88px;
  }
  &-left {
    align-self: flex-start;
    width: 599px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16.656px;
    flex: 1 0 0;
    padding-top: 40px;
    &-X2 {
      padding-top: 180px;
      .attrs-left-bg {
        position: relative;
        top: -70px;
      }
    }
    .ar {
      .attrs-left-bg-top {
        right: 40px;
      }
      .attrs-left-bg-bottom {
        right: 0;
      }
    }
    &-1 {
      .attrs-left-bg {
        display: flex;
        width: 951.963px;
        height: 621px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 6.521px;
        align-self: stretch;
        &-top {
          display: flex;
          width: 613.241px;
          height: 610.235px;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          gap: 6.521px;
          position: absolute;
          left: 40px;
          align-self: stretch;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
        }
        &-bottom {
          width: 692px;
          height: 235.076px;
          border-radius: 17.389px;
          background: #1a1e1d;
          left: 0;
          transform: translateX(0);
        }
      }
    }
    &-bg {
      width: 555.635px;
      height: 445.427px;
      flex-shrink: 0;
      position: relative;
      .x2Img1 {
        background-position: 0px 138.8px;
        background-size: 100% 159.538%;
      }
      .d1MaxImg1 {
        background-position: -220.697px 0px;
        background-size: 177.778% 114.713%;
      }
      .d1ProMaxImg1 {
        background-position: -238.482px 0px;
        background-size: 177.778% 100.493%;
      }
      .g1Img1 {
        background-position: 50% -123%;
        background-size: 100% 120%;
      }
      &-top {
        width: 531.337px;
        height: 531.337px;
        aspect-ratio: 1/1;
        bottom: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        position: absolute;
        z-index: 1;
      }
      &-bottom {
        position: absolute;
        bottom: 0;
        width: 531.145px;
        height: 189.038px;
        border-radius: 17.389px;
        background: #1a1e1d;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &-title {
      color: #0a0a0a;
      font-family: Cormorant Garamond;
      font-size: 87.125px;
      font-style: normal;
      font-weight: 300;
      line-height: 92.25px; /* 105.882% */
      letter-spacing: -1.922px;
    }
    &-title1 {
      color: #ff7a1a;
      font-family: Cormorant Garamond;
      font-size: 87.125px;
      font-style: italic;
      font-weight: 300;
      line-height: 92.25px;
      letter-spacing: -1.922px;
    }
    &-desc {
      color: #6b6b6b;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 36.9px; /* 205% */
      white-space: pre-line;
    }
    &-top {
      scroll-margin-top: 100px;
      display: flex;
      align-items: center;
      color: #ff7a1a;
      font-family: Syne;
      font-size: 14.094px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 3.203px;
      text-transform: uppercase;
      span {
        width: 28.188px;
        height: 1.922px;
        display: inline-block;
        background: #ff7a1a;
        margin-right: 13px;
      }
    }
  }
  &-right {
    display: flex;
    gap: 23px;
    align-items: flex-start;
    &-1 {
      .attrs-right-list-item-title {
        display: flex;
        padding: 16.656px 28.188px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        height: 50px;
        color: #ff7a1a;
        font-family: Syne;
        font-size: 12.813px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.563px;
        text-transform: uppercase;
        border-bottom: 1.281px solid rgba(0, 0, 0, 0.07);
        background: #fafafa;
      }
      .attrs-right-list-item-value {
        display: flex;
        width: 766.187px;
        padding: 23.063px 28.175px 23.063px 28.188px;
        justify-content: space-between;
        align-items: center;
        height: 68px;
        span {
          &:first-child {
            color: #6b6b6b;
            font-family: Montserrat;
            font-size: 16.656px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
          &:last-child {
            color: #0a0a0a;
            text-align: right;
            font-family: Montserrat;
            font-size: 17.938px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
      }
    }
    &-list {
      border-radius: 13.594px;
      border: 0.85px solid var(--color-black-7, rgba(0, 0, 0, 0.07));
      &-item {
        border-radius: 8.496px 8.496px 0px 0px;
        &-title {
          height: 32px;
          display: flex;
          padding: 11.045px 18.692px;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          color: #ff7a1a;
          font-family: Syne;
          font-size: 8.496px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.699px;
          text-transform: uppercase;
          border-radius: 8.496px 8.496px 0px 0px;
          border-bottom: 0.85px solid rgba(0, 0, 0, 0.07);
          background: #fafafa;
        }
        &-value {
          display: flex;
          width: 508.071px;
          padding: 15.293px 18.683px 15.293px 18.692px;
          height: 44.6px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 0.85px solid rgba(0, 0, 0, 0.07);
          &:last-child {
            border-bottom: none;
          }
          span {
            &:first-child {
              color: #6b6b6b;
              font-family: Montserrat;
              font-size: 11.045px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }

            &:last-child {
              color: #0a0a0a;
              text-align: right;
              font-family: Montserrat;
              font-size: 11.895px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
        }
      }
    }
  }
}

// 移动端（440 设计稿：vw = px ÷ 440 × 100）
@media (max-width: 767px) {
  .attrs {
    padding: 7.72727vw 0 13.63636vw;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    box-sizing: border-box;
    &-left {
      align-self: center;
      width: 89.09182vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: space-between;
      gap: 2.04545vw;
      &-top {
        margin: 0 auto;
        width: 71.81818vw;
        color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
        font-family: Geist;
        font-size: 1.90841vw;
        font-style: normal;
        font-weight: var(--font-weight-600, 600);
        line-height: normal;
        letter-spacing: 0.43364vw;
        text-transform: uppercase;
        gap: 1.72727vw;
        span {
          width: 3.81682vw;
          height: 0.26023vw;
        }
      }
      &-title {
        margin: 0 auto;
        width: 71.81818vw;
        color: var(--Cod-Gray, var(--color-grey-4, #0a0a0a));
        font-family: var(--font-family-Font-2, "Cormorant Garamond");
        font-size: 11.79727vw;
        font-style: normal;
        font-weight: var(--font-weight-300, 300);
        line-height: 12.49114vw; /* 105.882% */
        letter-spacing: -0.26023vw;
      }
      &-title1 {
        margin: 0 auto;
        width: 71.81818vw;
        color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
        font-family: var(--font-family-Font-2, "Cormorant Garamond");
        font-size: 11.79727vw;
        font-style: italic;
        font-weight: 300;
        line-height: 12.49114vw;
        letter-spacing: -0.26023vw;
      }
      &-desc {
        align-self: center;
        display: flex;
        width: 68.51523vw;
        padding-bottom: 0.11977vw;
        flex-direction: column;
        align-items: flex-start;
        color: var(--Dove-Gray, var(--color-grey-42, #6b6b6b));
        font-family: Montserrat;
        font-size: 2.43727vw;
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: 4.99636vw; /* 205% */
      }
    }
    .attrs-right {
      gap: 2.95455vw;
      flex-direction: column;
    }
    .attrs-right-list {
      display: flex;
      width: 63.18182vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .x2Img1 {
      background-position: 0 18.36364vw;
    }
    .d1Img1 {
      background-position: 0 -9.09091vw;
    }
    .d1MaxImg1 {
      background-position: -29.18182vw 6.81818vw;
      background-size: 177.778% 105.713%;
    }
    .d1ProMaxImg1 {
      background-position: -24.75045vw 0;
      background-size: 177.778% 100.493%;
    }
    .attrs-left-1 .attrs-left-bg-bottom {
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
    .g1Img1 {
      width: 94.89591vw !important;
      height: 94.89591vw !important;
      // background-position: -2.29182vw 19.19182vw;
      background-size: 109.627% 116.7%;
    }
    .d1ProMaxImg1-bg {
      width: 63.64432vw !important;
      height: 63.33227vw !important;
    }
    .g1Img1-bg {
      width: 71.81818vw !important;
      height: 64.54545vw !important;
    }
    .attrs-right-list-item {
      width: 100%;
    }
    .attrs-left-bg-top {
      left: 50%;
      width: 69.18523vw;
      height: 69.18523vw;
      transform: translateX(-50%);
    }
    .attrs-left-bg {
      margin: 0 auto;
      width: 71.94545vw;
      height: 54.6675vw;
    }
    .attrs-left-bg-bottom {
      width: 71.94545vw;
      height: 24.44023vw;
      border-radius: 2.26432vw;
    }
    .attrs-right-list-item-title {
      color: var(--Pumpkin, var(--color-orange-55, #ff7a1a));
      font-family: Geist;
      font-size: 1.05136vw;
      font-style: normal;
      font-weight: var(--font-weight-700, 700);
      line-height: normal;
      letter-spacing: 0.21023vw;
      text-transform: uppercase;
      padding: 1.36682vw 2.31295vw;
      border-bottom: 0.10523vw solid var(--color-black-7, rgba(0, 0, 0, 0.07));
      background: var(--color-grey-98, #fafafa);
      height: 4.09091vw;
    }

    .attrs-right-list-item-value {
      width: 100%;
      padding: 1.89227vw 2.31182vw 1.89227vw 2.31295vw;
      border-bottom: var(--stroke-weight-1, 0.10523vw) solid rgba(0, 0, 0, 0.07);
      span {
        &:first-child {
          color: var(--Dove-Gray, var(--color-grey-42, #6b6b6b));
          font-family: Montserrat;
          font-size: 1.36682vw;
          font-style: normal;
          font-weight: var(--font-weight-500, 500);
          line-height: normal;
        }
        &:last-child {
          color: var(--Cod-Gray, var(--color-grey-4, #0a0a0a));
          text-align: right;
          font-family: Montserrat;
          font-size: 1.47182vw;
          font-style: normal;
          font-weight: var(--font-weight-700, 700);
          line-height: normal;
        }
      }
    }
  }
}
</style>