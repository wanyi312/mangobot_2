<template>
  <div class="homePage_frame">
    <video
      class="homePage_frame_video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source src="https://media.mangobot.org/Homepage.mp4" type="video/mp4" />
    </video>
    <div class="homePage_frame_overlay" />
    <div class="homePage_frame_content">
      <div class="homePage_frame_title">
        <div>{{ t("homeFrameTitleLine1") }}</div>     
        <div class="homePage_frame_title_desc" :class="locale === 'ar' ? 'homePage_frame_title_desc_ar' : 'homePage_frame_title_desc_en'">{{ t("homeFrameTitleLine2") }}</div>
      </div>
      <div class="homePage_frame_desc">
        {{ t("homeFrameDesc") }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>
<style lang="less" scoped>
.homePage_frame {
  width: 100%;
  height: 1030px;
  position: relative;
  font-family: Montserrat;
  overflow: hidden;
  // background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 5.77%, rgba(0, 0, 0, 0.76) 77.88%);
  .homePage_frame_video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    z-index: 0;
  }
  .homePage_frame_overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 5.77%, rgba(0, 0, 0, 0.76) 77.88%);
  }
  .homePage_frame_content {
    position: absolute;
    z-index: 2;
    width: 100%;
    bottom: 70px;
    inset-inline-start: 70px;
    flex-direction: column;
    flex-shrink: 0;
  }
  .homePage_frame_title {
    color:#F3F3F3;
    font-size: 104px;
    font-weight: 400;
    font-style: normal;
    line-height: 106px;
    letter-spacing: -2px;
    display: flex;
    flex-direction: column;
    &_desc {
      color: #FF7A1A;
      font-family: "Cormorant Garamond";
      font-size: 128px;
      font-style: italic;
      font-weight: 300;
      line-height: 106px;
      letter-spacing: -2px;
      &_ar {
        line-height: 126px;
      }
      &_en {
        line-height: 106px;
      }
    }
  }
  .homePage_frame_desc {
    width: 61%;
    color: #FFF;
    font-variant-numeric: ordinal;
    font-feature-settings: 'dlig' on;
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 47px;
    margin-top: 25px;
  }
}

@media (max-width: 767px) {
  .homePage_frame {
    height: 118.1818vw;
    .homePage_frame_content {
      bottom: 5.4545vw;
      inset-inline-start: 5.4545vw;
    }
    .homePage_frame_title {
      font-size: 7.2727vw;
      line-height: 9.0909vw;
      letter-spacing: -0.252vw;
      &_desc {
        font-size: 9.0909vw;
        line-height: 9.0909vw;
        letter-spacing: -0.252vw;
        &_ar {
          line-height: 10vw;
        }
        &_en {
          line-height: 9.0909vw;
        }
      }
    }
    .homePage_frame_desc {
      width: auto;
      max-width: 83.8636vw;
      font-size: 3.1818vw;
      line-height: 5.9215vw;
      margin-top: 2.3295vw;
    }
  }
}
</style>