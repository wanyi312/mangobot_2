<template>
  <div class="ideal">
    <div class="ideal-title">{{ t("product.common.idealApplications") }}</div>
    <div class="ideal-content">
      <div class="ideal-content-item" v-for="item in ideal" :key="item.title">
        <img :src="item.imgUrl" />
        <div>
          <div class="ideal-content-item-title">
            {{ item.title }}
          </div>
          <div class="ideal-content-item-desc">
            {{ item.desc }}
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
const { ideal = [] } = defineProps(["ideal"]);
</script>
<style lang="less" scoped>
.ideal {
  height: 527px;
  display: flex;
  padding: 60px 140px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  font-family: Montserrat;
  &-title {
    color: #1a1e1d;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px; /* 116.667% */
    letter-spacing: -2px;
  }
  &-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    // margin-top: 20px;
    &-item {
      display: flex;
      width: 252px;
      height: 304px;
      padding: 28.903px 0 23.123px 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      flex-shrink: 0;
      border-radius: 0 0 0 0;
      border-top: 0.723px solid #c1c5bf;
      &:hover {
        border-top: 0.723px solid #ef536b;
      }
      img {
        width: 51px;
        height: 51px;
        flex-shrink: 0;
        aspect-ratio: 1/1;
      }
      &-title {
        width: 265px;
        height: 94px;
        color: #1a1e1d;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        font-family: Manrope;
        font-size: 34.684px;
        font-style: normal;
        font-weight: 600;
        line-height: 46.968px; /* 135.417% */
        letter-spacing: -1.445px;
        white-space: pre-wrap;
      }
      &-desc {
        margin-top: 9px;
        white-space: pre-wrap;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        align-self: stretch;
        overflow: hidden;
        color: #9a9a9a;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        text-overflow: ellipsis;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 161.111% */
      }
    }
  }
}

// 移动端（440 设计稿：vw = px ÷ 440 × 100）
@media (max-width: 767px) {
  .ideal {
    width: 100%;
    padding: 13.63636vw 8.18182vw 0;
    height: auto;
    box-sizing: border-box;
    &-title {
      width: 100%;
      text-align: center;
      color: var(--Color-4, #1a1e1d);
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;
      font-family: Montserrat;
      font-size: 7.72727vw;
      font-style: normal;
      font-weight: 700;
      line-height: 19.09091vw; /* 247.059% */
      letter-spacing: -0.45455vw;
    }
    &-content {
      width: 100%;
      flex-direction: column;
      align-items: center;
      &-item {
        display: flex;
        width: 83.63636vw;
        height: 68.86364vw;
        padding: 6.56886vw var(--inset-none, 0) 5.25523vw var(--inset-none, 0);
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 2.72727vw;
        flex-shrink: 0;
        box-sizing: border-box;
        img {
          width: 10.45455vw;
          height: 10.45455vw;
          flex-shrink: 0;
          aspect-ratio: 1/1;
        }
        &-title {
          margin: 2.72727vw auto 2.04545vw;
          width: 70vw;
          height: auto;
          color: var(--Color-4, #1a1e1d);
          text-align: center;
          font-variant-numeric: ordinal;
          font-feature-settings: "dlig" on;
          font-family: Geist;
          font-size: 7.88273vw;
          font-style: normal;
          font-weight: 600;
          line-height: 10.67455vw; /* 135.417% */
          letter-spacing: -0.32841vw;
        }
        &-desc {
          width: 70vw;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          align-self: stretch;
          overflow: hidden;
          color: var(--Color-5, #9a9a9a);
          text-align: center;
          font-variant-numeric: ordinal;
          font-feature-settings: "dlig" on;
          text-overflow: ellipsis;
          font-family: Geist;
          font-size: 2.95682vw;
          font-style: normal;
          font-weight: 400;
          line-height: 4.7625vw; /* 161.111% */
        }
      }
    }
  }
}
</style>