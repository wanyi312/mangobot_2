<template>
  <section class="productPage_frame">
    <img class="productPage_frame_tilde" src="@/assets/imgs/home/home_demands_tilde.svg" alt="">
    <div class="productPage_frame-inner">
      <div class="productPage_frame_kicker">{{ t("productsFrameKicker") }}</div>

      <h2 class="productPage_frame_title">
        <span class="productPage_frame_title_muted">{{ t("productsFrameTitleMuted") }}</span><br />
        <span class="productPage_frame_title_accent">{{ t("productsFrameTitleAccent") }}</span>
      </h2>

      <p class="productPage_frame_desc productPage_frame_desc--preline">
        {{ t("productsFrameDesc") }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="less" scoped>
.productPage_frame {
  width: 100%;
  height: 1008px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  padding-top: 288px;
  font-family: Montserrat;

  &::before {
    content: "";
    position: absolute;
    left: -93px;
    top: -523px;
    width: 1604px;
    height: 1604px;
    border-radius: 1604px;
    background: url('@/assets/imgs/home/home_demands_bg.png') center center / 1441px 1252px no-repeat;
    opacity: 0.6;
    pointer-events: none;
  }
  .productPage_frame_tilde {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15px;
    width: 1645px;
    height: 347px;
  }
  
  .productPage_frame-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    .productPage_frame_kicker {
      width: fit-content;
      display: flex;
      padding: 6px 16px 6px 8px;
      align-items: center;
      gap: 8px;
      border-radius: 100px;
      border: 1px solid rgba(255, 122, 26, 0.20);
      background: rgba(255, 122, 26, 0.07);
      color: #FF7A1A;
      text-align: center;
      font-size: 11px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      &::before {
        width: 7px;
        height: 7px;
        border-radius: 3.5px;
        background: #FF7A1A;
        content: "";
      }
    }
    .productPage_frame_title {
      margin-top: 39px;
      text-align: center;
    }

    .productPage_frame_title_muted {
      color: #0A0A0A;
      text-align: center;
      font-size: 106px;
      font-style: normal;
      font-weight: 400;
      line-height: 108.12px;
      letter-spacing: -2.5px;
    }

    .productPage_frame_title_accent {
      color: #FF7A1A;
      font-family: "Cormorant Garamond";
      font-size: 106px;
      font-style: italic;
      font-weight: 300;
      line-height: 108.12px;
      letter-spacing: -2.5px;
    }

    .productPage_frame_desc {
      margin-top: 21.38px;
      color: #6B6B6B;
      text-align: center;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 29.75px;
      max-width: 502px;
      &--preline {
        white-space: pre-line;
      }
    }
  }

  
}

@media (max-width: 767px) {
  .productPage_frame {
    height: 116.134vw;
    padding-top: 36vw;

    &::before {
      left: -20vw;
      top: -15vw;
      width: 136vw;
      height: 136vw;
      border-radius: 126.2165vw;
      opacity: 0.9;
      background: url('@/assets/imgs/products/products_frame_bg.png') center center / contain no-repeat;
    }
    .productPage_frame_tilde {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 13.6364vw;
      width: 125vw;
      height: auto;
    }
    
    .productPage_frame-inner {
      .productPage_frame_kicker {
        padding: 0.472vw 1.2591vw 0.472vw 0.6295vw;
        gap: 0.6295vw;
        border-radius: 7.8689vw;
        border: 0.0786vw solid rgba(255, 122, 26, 0.20);
        font-size: 2.2727vw;
        font-weight: 400;
        line-height: 2.7273vw;
        letter-spacing: 0.118vw;
        &::before {
          width: 0.5509vw;
          height: 0.5509vw;
          border-radius: 0.2755vw;
        }
      }
      .productPage_frame_title {
        margin-top: 2.5182vw;
      }

      .productPage_frame_title_muted {
        font-size: 7.2727vw;
        line-height: 8.5077vw;
        letter-spacing: -0.1968vw;
      }

      .productPage_frame_title_accent {
        font-size: 9.0909vw;
        line-height: 8.5077vw;
        letter-spacing: -0.1968vw;
      }

      .productPage_frame_desc {
        margin-top: 0.7727vw;
        font-size: 3.1818vw;
        font-weight: 300;
        line-height: 5.2273vw;
        max-width: 62.7273vw;
        &--preline {
          white-space: pre-line;
        }
      }
    }
  }
}

</style>