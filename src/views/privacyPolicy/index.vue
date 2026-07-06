<template>
<div class="privacyPolicy">
  <div class="privacyPolicy_top">
    <span>{{ t("privacyTitle") }}</span>
    <div class="lastUpdated">{{ t("privacyLastUpdated", { date: t("privacyLastUpdatedDate") }) }}</div>
  </div>

  <div class="privacyPolicy_mangobotWeOur">{{ t("privacyIntro") }}</div>
  <div class="privacyPolicy_frameParent">
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS1Title") }}</div>
      <div class="whenYouVisitContainer">
        <p class="whenYouVisit">{{ t("privacyS1Lead") }}</p>
        <ul class="personalInformationYouVolun">
          <li class="personalInformationYou">{{ t("privacyS1Li1") }}</li>
          <li class="personalInformationYou">{{ t("privacyS1Li2") }}</li>
          <li>{{ t("privacyS1Li3") }}</li>
        </ul>
      </div>
    </div>
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS2Title") }}</div>
      <div class="whenYouVisitContainer">
        <p class="whenYouVisit">{{ t("privacyS2Lead") }}</p>
        <ul class="personalInformationYouVolun">
          <li class="personalInformationYou">{{ t("privacyS2Li1") }}</li>
          <li class="personalInformationYou">{{ t("privacyS2Li2") }}</li>
          <li class="personalInformationYou">{{ t("privacyS2Li3") }}</li>
          <li>{{ t("privacyS2Li4") }}</li>
        </ul>
      </div>
    </div>
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS3Title") }}</div>
      <div class="whenYouVisitContainer whenYouVisitContainer--preline">{{ t("privacyS3Body") }}</div>
    </div>
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS4Title") }}</div>
      <div class="whenYouVisitContainer whenYouVisitContainer--preline">{{ t("privacyS4Body") }}</div>
    </div>
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS5Title") }}</div>
      <div class="whenYouVisitContainer whenYouVisitContainer--preline">{{ t("privacyS5Body") }}</div>
    </div>
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS6Title") }}</div>
      <div class="whenYouVisitContainer">
        <p class="whenYouVisit">{{ t("privacyS6Lead") }}</p>
        <ul class="personalInformationYouVolun">
          <li class="personalInformationYou">{{ t("privacyS6Li1") }}</li>
          <li class="personalInformationYou">{{ t("privacyS6Li2") }}</li>
          <li class="personalInformationYou">{{ t("privacyS6Li3") }}</li>
        </ul>
        <p class="whenYouVisit">{{ t("privacyS6Tail") }}</p>
      </div>
    </div>
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS7Title") }}</div>
      <div class="whenYouVisitContainer whenYouVisitContainer--preline">{{ t("privacyS7Body") }}</div>
    </div>
    <div class="informationWeCollectParent">
      <div class="informationWeCollect">{{ t("privacyS8Title") }}</div>
      <div class="forAnyPrivacyRelatedContainer">
        <span class="forAnyPrivacyRelated">{{ t("privacyS8Lead") }}</span>
        <b>info@mangobot.com</b>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style lang="less" scoped>
.privacyPolicy {
  width: 100%;
  padding: 198px 220px 91px;
  background-color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  color: #757D89;
  &_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #D5D5D5;
    padding-bottom: 49px;
    span {
      color: #0F0F0F;
      font-family: Geist;
      font-size: 58px;
      font-weight: 500;
      line-height: 76px;
    }
    .lastUpdated {
      font-family: Geist;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 44px;
      letter-spacing: -0.48px;
      background: var(--Linear, linear-gradient(270deg, #EF536B 0%, #F79355 100%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &_mangobotWeOur {
    margin-top: 49px;
    font-size: 20px;
    letter-spacing: -0.4px;
    line-height: 29px;
    font-weight: 500;
    opacity: 0.7;
  }
  
  &_frameParent {
    margin-top: 63px;
  }
  .informationWeCollectParent {
    margin-top: 28px;
    &:first-child {
      margin-top: 0;
    }
  }
  .informationWeCollect {
    margin-bottom: 16px;
    letter-spacing: -0.02em;
    line-height: 32px;
    background: linear-gradient(270deg, #ef536b, #f79355);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .whenYouVisitContainer {
    align-self: stretch;
    position: relative;
    font-size: 20px;
    letter-spacing: -0.4px;
    line-height: 29px;
    font-weight: 500;
    opacity: 0.7;
    &--preline {
      white-space: pre-line;
    }
  }
  .whenYouVisit {
    margin: 0;
  }
  .personalInformationYouVolun {
    margin: 0;
    padding-left: 27px;
  }
  .personalInformationYou {
    margin-bottom: 0px;
  }
  .forAnyPrivacyRelatedContainer {
    align-self: stretch;
    position: relative;
    font-size: 20px;
    letter-spacing: -0.4px;
    line-height: 29px;
  }
  .forAnyPrivacyRelated {
    font-weight: 500;
  }
}

@media (max-width: 767px) {
  .privacyPolicy {
    padding: 9.5455vw 5.4545vw 11.3636vw;
    font-size: 3.1818vw;
    &_top {
      align-items: center;
      border-bottom: 0.1148vw solid #D5D5D5;
      padding-bottom: 2.2727vw;
      span {
        font-size: 5.4545vw;
        line-height: 8.7245vw;
      }
      .lastUpdated {
        font-size: 2.755vw;
        line-height: 3.6734vw;
        letter-spacing: -0.055vw;
      }
    }
    &_mangobotWeOur {
      margin-top: 2.2727vw;
      font-size: 2.7273vw;
      line-height: 3.3291vw;
      letter-spacing: -0.0459vw;
    }
    
    &_frameParent {
      margin-top: 3.8636vw;
    }
    .informationWeCollectParent {
      margin-top: 6.3636vw;
      &:first-child {
        margin-top: 0;
      }
    }
    .informationWeCollect {
      margin-bottom: 3.6364vw;
      font-size: 5.4545vw;
      line-height: 7.2727vw;
      letter-spacing: -0.1091vw;
    }
    .whenYouVisitContainer {
      font-size: 3.1818vw;
      line-height: 6.5909vw;
      letter-spacing: -0.0909vw;
      &--preline {
        white-space: pre-line;
      }
    }
    .personalInformationYouVolun {
      padding-left: 5.4545vw;
    }
    .forAnyPrivacyRelatedContainer {
      font-size: 3.1818vw;
      letter-spacing: -0.0909vw;
      line-height: 6.5909vw;
    }
    .forAnyPrivacyRelated {
      font-weight: 500;
      b {
        font-weight: 700;
      }
    }
  }
}
</style>