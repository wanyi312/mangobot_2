<template>
  <section class="homePage_demands">
    <img class="homePage_demands_tilde" src="@/assets/imgs/home/home_demands_tilde.svg" alt="">
    <div class="homePage_demands-inner">
      <div class="homePage_demands-left">
        <div class="homePage_demands-kicker">{{ t("homeDemandsKicker") }}</div>

        <h2 class="homePage_demands-title">
          <span class="homePage_demands-title-muted">{{ t("homeDemandsTitleMuted1") }}</span><br />
          <span class="homePage_demands-title-muted">{{ t("homeDemandsTitleMuted2") }}</span>
          <span class="homePage_demands-title-accent">{{ t("homeDemandsTitleAccent") }}</span>
        </h2>

        <div class="homePage_demands-body">
          <p class="homePage_demands-bodyLead">
            {{ t("homeDemandsBody1Before") }}<span class="homePage_demands-body-emph">{{ t("homeDemandsBody1Emph") }}</span>{{ t("homeDemandsBody1After") }}
          </p>
          <p class="homePage_demands-body-para homePage_demands-body-para--preline">
            {{ t("homeDemandsBody2") }}
          </p>
        </div>

        <div class="homePage_demands-stats">
          <div class="homePage_demands-stat">
            <div class="homePage_demands-stat-top">
              <div class="homePage_demands-stat-ai">
                <span class="homePage_demands-stat-ai-text">6</span>
                <span class="homePage_demands-stat-ai-mark">+</span>
              </div>
            </div>
            <div class="homePage_demands-stat-desc homePage_demands-stat-desc--preline">
              {{ t("homeDemandsStat1Desc") }}
            </div>
          </div>
          <div class="homePage_demands-stat">
            <div class="homePage_demands-stat-top">
              <div class="homePage_demands-stat-ai">
                <span class="homePage_demands-stat-ai-text">5</span>
                <span class="homePage_demands-stat-ai-mark">+</span>
              </div>
            </div>
            <div class="homePage_demands-stat-desc">
              {{ t("homeDemandsStat2Desc") }}
            </div>
          </div>
          <div class="homePage_demands-stat">
            <div class="homePage_demands-stat-top">
              <div class="homePage_demands-stat-label">{{ t("homeDemandsStat3Label") }}</div>
            </div>
            <div class="homePage_demands-stat-desc homePage_demands-stat-desc--preline">
              {{ t("homeDemandsStat3Desc") }}
            </div>
          </div>
          <div class="homePage_demands-stat">
            <div class="homePage_demands-stat-top">
              <div class="homePage_demands-stat-ai">
                <span class="homePage_demands-stat-ai-text">AI</span>
                <span class="homePage_demands-stat-ai-mark">∞</span>
              </div>
            </div>
            <div class="homePage_demands-stat-desc">
              {{ t("homeDemandsStat4Desc") }}
            </div>
          </div>
        </div>
      </div>

      <div class="homePage_demands-right" aria-hidden="true">
        <!-- <div class="homePage_demands-media" /> -->
         <img src="@/assets/imgs/home/home_demands_robot.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style lang="less" scoped>
.homePage_demands {
  width: 100%;
  min-height: 992px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  padding-top: 60px;
  font-family: Montserrat;

  &::before {
    content: "";
    position: absolute;
    left: -93px;
    top: -463px;
    width: 1604px;
    height: 1604px;
    border-radius: 1604px;
    background: url('@/assets/imgs/home/home_demands_bg.png') center center / 1441px 1252px no-repeat;
    opacity: 0.6;
    pointer-events: none;
  }
  .homePage_demands_tilde {
    position: absolute;
    left: 220px;
    top: 280px;
    width: 1645px;
    // height: 347px;
  }
  &-left {
    padding-top: 99.22px;
  }
  .homePage_demands-inner {
    position: relative;
    margin: 0 auto;
    padding: 26px 80px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 72px;
    align-items: start;
    box-sizing: border-box;
  }

  .homePage_demands-kicker {
    color: #FF7A1A;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
      margin-right: 8.7px;
      width: 22px;
      height: 1.5px;
      background: #FF7A1A;
    }
  }

  .homePage_demands-title {
    margin-top: 17px;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 10px;
  }

  .homePage_demands-title-muted {
    color: #0A0A0A;
    font-size: 58px;
    font-weight: 300;
    line-height: 63.8px;
    letter-spacing: -1px;
  }

  .homePage_demands-title-accent {
    font-family: Cormorant;
    color: #FF7A1A;
    font-size: 96px;
    font-style: italic;
    font-weight: 300;
    line-height: 63.8px;
    letter-spacing: -1px;
  } 

  .homePage_demands-body {
    margin-top: 27px;
    color: #6B6B6B;
    font-size: 17px;
    font-weight: 400;
    line-height: 30.6px;
    max-width: 605px;

    p {
      margin-bottom: 30.38px;
    }
    .homePage_demands-bodyLead {
      white-space: pre-line;
    }
    .homePage_demands-body-emph {
      color: #0A0A0A;
      font-size: 17px;
      font-weight: 600;
      line-height: 30.6px;
      white-space: pre-line;
    }
  }

  .homePage_demands-body-para--preline {
    white-space: pre-line;
  }

  .homePage_demands-stat-desc--preline {
    white-space: pre-line;
  }

  .homePage_demands-stats {
    margin-top: 52px;
    display: grid;
    width: 562px;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #EDEDED;
    background: #FAFAFA;
    border-radius: 20px;
    cursor: default;
    overflow: hidden;
    .homePage_demands-stat {
      display: flex;
      width: 281px;
      min-height: 117px;
      padding: 26px 28px 22px 28px;
      flex-direction: column;
      gap: 6px;
      box-sizing: border-box;
      min-height: 117px;
      border-right: 1px solid #EDEDED;
      border-bottom: 1px solid #EDEDED;

      &:nth-child(2n) {
        border-right: none;
      }
      &:nth-last-child(-n + 2) {
        border-bottom: none;
      }
      &:hover {
        background: #f3f3f3;
      }
    }
  }



  .homePage_demands-stat-top {
    display: flex;
    align-items: center;
    min-height: 36px;
    margin-bottom: 6px;
  }

  .homePage_demands-stat-label {
    color: #0A0A0A;
    font-size: 32px;
    font-weight: 400;
    line-height: 46px;
  }

  .homePage_demands-stat-ai {
    display: inline-flex;
    align-items: baseline;
    gap: 1px;
  }

  .homePage_demands-stat-ai-text {
    color: #0A0A0A;
    font-size: 46px;
    font-weight: 300;
    line-height: 46px;
  }

  .homePage_demands-stat-ai-mark {
    color: #FF7A1A;
    font-size: 46px;
    font-weight: 300;
    line-height: 46px;
  }

  .homePage_demands-stat-desc {
    color: #9A9A9A;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }

  .homePage_demands-right {
    width: 929px;
    height: 880px;
    flex-shrink: 0;
    // background: url('@/assets/imgs/home/home_demands_robot.png') lightgray 50% / cover no-repeat;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 767px) {
  .homePage_demands {
    min-height: 0;
    padding-top: 5.659vw;

    &::before {
      left: 50%;
      transform: translateX(-50%);
      top: -5.8vw;
      width: 168.7272vw;
      height: 168.7272vw;
      border-radius: 50%;
      background: url('@/assets/imgs/home/home_demands_bg_mobile.png') center center / contain no-repeat;
      opacity: 0.9;
    }

    .homePage_demands_tilde {
      left: 50%;
      transform: translateX(-50%);
      top: 33vw;
      width: 96vw;
      // height: 7.5272vw;
    }

    &-left {
      padding-top: 0;
    }

    .homePage_demands-inner {
      padding: 0 5.4545vw 5.6818vw;
      grid-template-columns: 1fr;
      gap: 6.9363vw;
    }

    .homePage_demands-kicker {
      justify-content: center;
      font-size: 3.1818vw;
      line-height: 3.8636vw;
      font-weight: 400;
      letter-spacing: 0.3013vw;
      &::before {
        display: none;
      }
    }

    .homePage_demands-title {
      margin-top: 4.0909vw;
      justify-content: center;
      text-align: center;
      gap: 0;
    }

    .homePage_demands-title-muted {
      font-size: 7.2727vw;
      line-height: 7.69vw;
      letter-spacing: -0.1204vw;
    }

    .homePage_demands-title-accent {
      font-size: 9.0909vw;
      line-height: 7.69vw;
      letter-spacing: -0.1204vw;
    }

    .homePage_demands-body {
      margin-top: 5.259vw;
      font-size: 2.049vw;
      line-height: 3.6886vw;
      text-align: center;
      max-width: 89.90vw;
      .homePage_demands-bodyLead {
        max-width: 80vw;
        margin: 0 auto 3.6613vw;
      }

      p {
        margin-bottom: 0;
      }

      .homePage_demands-body-emph {
        font-size: 2.049vw;
        line-height: 3.6886vw;
      }
    }

    .homePage_demands-stats {
      margin: 8.5522vw auto 0;
      width: 67.7403vw;
      border: 0.2068vw solid #ededed;
      grid-template-columns: 1fr 1fr;
      background: #fafafa;
      border-radius: 2.2727vw;
      .homePage_demands-stat {
        width: auto;
        min-height: 14.1025vw;
        padding: 3.134vw 2.275vw 2.6523vw;
        gap: 0.7227vw;
        border-right: 0.2068vw solid #ededed;
        border-bottom: 0.2068vw solid #ededed;
        &:hover {
          background: transparent;
        }
      }
    }

    .homePage_demands-stat-top {
      min-height: 5.6818vw;
      margin-bottom: 0;
    }

    .homePage_demands-stat-label {
      font-size: 3.8568vw;
      line-height: 5.5445vw;
    }

    .homePage_demands-stat-ai-text,
    .homePage_demands-stat-ai-mark {
      font-size: 5.5445vw;
      line-height: 5.6818vw;
    }

    .homePage_demands-stat-desc {
      font-size: 1.4463vw;
      line-height: 2.1695vw;
      color: #8f8f8f;
    }

    .homePage_demands-right {
      width: 100%;
      margin: 0 auto;
      height: auto;
      padding-left: 0.6818vw;
      img {
        width: 81.3636vw;
        aspect-ratio: 358 / 339;
      }
    }
  }
}

</style>