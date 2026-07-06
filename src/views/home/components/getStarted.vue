<template>
  <section class="homePage_getStarted">
    <div class="homePage_getStarted_inner">
      <div class="homePage_getStarted_kicker">{{ t("homeGetStartedKicker") }}</div>

      <h2 class="homePage_getStarted_title">
        <span class="homePage_getStarted_title_muted">{{ t("homeGetStartedTitleMuted1") }}</span><br />
        <span class="homePage_getStarted_title_muted">{{ t("homeGetStartedTitleMuted2") }}</span>
        <span class="homePage_getStarted_title_accent">{{ t("homeGetStartedTitleAccent1") }}<br />
          {{ t("homeGetStartedTitleAccent2") }}</span>
      </h2>

      <p class="homePage_getStarted_desc homePage_getStarted_desc--preline">
        {{ t("homeGetStartedDesc") }}
      </p>

      <button type="button" class="homePage_getStarted_btn" @click="handleContactSales">
        {{ t("homeGetStartedBtn") }}
      </button>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const router = useRouter();

const handleContactSales = () => {
  router.push('/contactus');
};
</script>
<style lang="less" scoped>
.homePage_getStarted {
  width: 100%;
  background: radial-gradient(55% 60% at 50% 50%, rgba(255, 122, 26, 0.04) 0%, rgba(255, 122, 26, 0.00) 70%);
  font-family: Montserrat;
}

.homePage_getStarted_inner {
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
  min-height: 742px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 110px 24px 110px;
  box-sizing: border-box;
  text-align: center;
}

.homePage_getStarted_kicker {
  color: #FF7A1A;
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}

.homePage_getStarted_title {
  margin-top: 42px;
  text-align: center;
}

.homePage_getStarted_title_muted {
  color: #0A0A0A;
  text-align: center;
  font-size: 72px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -1.5px;
}

.homePage_getStarted_title_accent {
  color: #FF7A1A;
  font-family: "Cormorant Garamond";
  font-size: 72px;
  font-style: italic;
  font-weight: 300;
  letter-spacing: -1.5px;
}

.homePage_getStarted_desc {
  color: #6B6B6B;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  &--preline {
    white-space: pre-line;
  }
}

.homePage_getStarted_btn {
  margin-top: 46px;
  height: 54px;
  line-height: 54px;
  padding: 0 25px;
  border-radius: 50px;
  background: #000;
  color: #FFFFFF;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #FF7A1A;
  }
}

@media (max-width: 767px) {
  .homePage_getStarted_inner {
    width: 100%;
    min-height: 69.7738vw;
    padding: 7.8954vw 5.4545vw 6.8090vw;
  }

  .homePage_getStarted_kicker {
    font-size: 3.1818vw;
    line-height: 3.8636vw;
    font-weight: 400;
    letter-spacing: 0.2136vw;
  }

  .homePage_getStarted_title {
    margin-top: 5.8613vw;
    margin-block: 5.1818vw;
  }

  .homePage_getStarted_title_muted {
    font-size: 6.8181vw;
    letter-spacing: -0.1281vw;
    line-height: 6.4636vw;
  }

  .homePage_getStarted_title_accent {
    font-size: 6.8181vw;
    letter-spacing: -0.1281vw;
    line-height: 6.4636vw;
  }

  .homePage_getStarted_desc {
    font-size: 2.1693vw;
    line-height: 3.7961vw;
  }

  .homePage_getStarted_btn {
    margin-top: 4.0909vw;
    height: 6.9793vw;
    line-height: 6.9793vw;
    padding: 0 3.2311vw;
    border-radius: 6.4625vw;
    font-size: 2.585vw;
    font-weight: 500;

    &:active {
      background-color: #FF7A1A;
    }
  }
}
</style>