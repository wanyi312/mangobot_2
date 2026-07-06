<template>
  <div class="termsConditions">
    <div class="termsConditions_top">
      <span>{{ t("termsTitle") }}</span>
      <div class="lastUpdated">{{ t("termsLastUpdated", { date: t("termsLastUpdatedDate") }) }}</div>
    </div>
  
    <div class="termsConditions_mangobotWeOur">{{ t("termsIntro") }}</div>
    <div class="termsConditions_frameParent">
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS1Title") }}</div>
        <div class="whenYouVisitContainer">{{ t("termsS1Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS2Title") }}</div>
        <div class="whenYouVisitContainer">{{ t("termsS2Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS3Title") }}</div>
        <div class="whenYouVisitContainer">{{ t("termsS3Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS4Title") }}</div>
        <div class="whenYouVisitContainer">{{ t("termsS4Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS5Title") }}</div>
        <div class="whenYouVisitContainer">{{ t("termsS5Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS6Title") }}</div>
        <div class="whenYouVisitContainer">{{ t("termsS6Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS7Title") }}</div>
        <div class="whenYouVisitContainer">{{ t("termsS7Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS8Title") }}</div>
        <div class="whenYouVisitContainer whenYouVisitContainerChange">{{ t("termsS8Body") }}</div>
      </div>
      <div class="informationWeCollectParent">
        <div class="informationWeCollect">{{ t("termsS9Title") }}</div>
        <div class="forAnyPrivacyRelatedContainer">
          <span class="forAnyPrivacyRelated">{{ t("termsS9Lead") }}</span>
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
  .termsConditions {
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
      font-family: inherit;
      font-size: inherit;
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
      opacity: 0.7;
    }
    .forAnyPrivacyRelated {
      font-weight: 500;
    }
  }

  @media (max-width: 767px) {
  .termsConditions {
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
      &.whenYouVisitContainerChange {
        opacity: 1;
      }
    }
    .personalInformationYouVolun {
      padding-left: 5.4545vw;
    }
    .forAnyPrivacyRelatedContainer {
      font-size: 3.1818vw;
      letter-spacing: -0.0909vw;
      line-height: 6.5909vw;
      opacity: 1;
      b {
        font-weight: 500;
      }
    }
  }
}
  </style>