<template>
  <section class="homePage_performs">
    <div class="homePage_performs-inner">
      <header class="homePage_performs-head">
        <div class="homePage_performs-headLeft">
          <div class="homePage_performs-kicker">
            <span class="homePage_performs-kickerLine" aria-hidden="true"></span>
            {{ t("homePerformsKicker") }}
          </div>
          <h2 class="homePage_performs-title">
            <span class="homePage_performs-titleMuted">{{ t("homePerformsTitleMuted1") }}</span>
            <span class="homePage_performs-titleAccent">{{ t("homePerformsTitleAccent") }}</span><br />
            <span class="homePage_performs-titleMuted">{{ t("homePerformsTitleMuted2") }}</span>
          </h2>
        </div>
        <div class="homePage_performs-headRight homePage_performs-headRight--preline">
          {{ t("homePerformsIntro") }}
        </div>
      </header>

      <div class="homePage_performs-cards">
        <article
          v-for="item in cards"
          :key="item.no"
          class="homePage_performs-card"
        >
          <div class="homePage_performs-cardMedia">
            <img :src="item.img" alt="" />
          </div>
          <div class="homePage_performs-cardOverlay">
            <div class="homePage_performs-cardText">
              <div class="homePage_performs-cardTitle">{{ item.title }}</div>
              <div class="homePage_performs-cardDesc">{{ item.desc }}</div>
            </div>
            <div class="homePage_performs-cardNo">{{ item.no }}</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import performs1 from "@/assets/imgs/home/home_partner_performs1.jpg";
import performs2 from "@/assets/imgs/home/home_partner_performs2.jpg";
import performs3 from "@/assets/imgs/home/home_partner_performs3.jpg";

const { t } = useI18n();

const cards = computed(() => [
  {
    no: "01",
    title: t("homePerformsCard1Title"),
    desc: t("homePerformsCard1Desc"),
    img: performs1,
  },
  {
    no: "02",
    title: t("homePerformsCard2Title"),
    desc: t("homePerformsCard2Desc"),
    img: performs2,
  },
  {
    no: "03",
    title: t("homePerformsCard3Title"),
    desc: t("homePerformsCard3Desc"),
    img: performs3,
  },
]);
</script>
<style lang="less" scoped>
.homePage_performs {
  width: 100%;
  background: #0A0A0A;
  position: relative;
  font-family: Montserrat;
}

.homePage_performs-inner {
  position: relative;
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
  padding: 120px 76px 150px;
  box-sizing: border-box;
}

.homePage_performs-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 69.65px;
  padding: 0 54px;
}

.homePage_performs-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #FF7A1A;
  font-family: Syne;
  font-size: 13.742px;
  font-weight: 600;
  letter-spacing: 3.123px;
  text-transform: uppercase;
  margin-bottom: 21.74px;

  .homePage_performs-kickerLine {
    width: 26px;
    height: 1px;
    background: rgba(255, 122, 26, 0.75);
  }
}

.homePage_performs-titleMuted {
  color: #FFF;
  font-size: 72.46px;
  font-weight: 300;
  line-height: 79.706px;
  letter-spacing: -1.249px;
}

.homePage_performs-titleAccent {
  color: #FF7A1A;
  font-family: "Cormorant Garamond";
  font-size: 107.441px;
  font-style: italic;
  font-weight: 300;
  line-height: 79.706px;
  letter-spacing: -1.249px;
}

.homePage_performs-headRight {
  color: #fff;
  text-align: end;
  font-size: 18.74px;
  font-weight: 400;
  line-height: 30.921px;
  &--preline {
    white-space: pre-line;
  }
}

.homePage_performs-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30.91px;
}

.homePage_performs-card {
  position: relative;
  background: #0F0F0F;
  overflow: hidden;
  cursor: default;
  transition: background-color 0.35s ease;
  &:first-of-type {
    border-top-left-radius: 25.754px;
  }
  &:last-of-type {
    border-bottom-right-radius: 25.754px;
  }
  &:nth-of-type(3) {
    border-top-right-radius: 25.754px;
  }
  &:nth-last-of-type(3) {
    border-bottom-left-radius: 25.754px;
  }
  &::after {
    content: "";
    display: none;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 81%;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 122, 26, 0.00) 0%, #FF7A1A 50%, rgba(255, 122, 26, 0.00) 100%);
  }

  &:hover {
    background-color: #383838;
    &::after {
      display: block;
    }

    .homePage_performs-cardMedia {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.homePage_performs-cardMedia {
  width: 100%;
  height: 232px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.55s ease;
  }
}

.homePage_performs-cardOverlay {
  position: relative;
  padding: 36px 18px 10px;
  min-height: 219px;
}

.homePage_performs-cardTitle {
  color: #FFF;
  font-size: 24.467px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: -0.258px;
  padding-left: 45px;
}

.homePage_performs-cardDesc {
  margin-top: 3px;
  color: #B3B3B3;
  font-size: 17.384px;
  font-weight: 400;
  line-height: 29.553px;
}

.homePage_performs-cardNo {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #B3B3B3;
  font-family: "Cormorant Garamond";
  font-size: 84.989px;
  font-weight: 300;
}

@media (max-width: 767px) {
  /* 设计稿宽度 440px：vw = px / 440 * 100 */
  .homePage_performs-inner {
    width: 100%;
    padding: 9.8159vw 4.545vw 9.7454vw;
  }

  .homePage_performs-head {
    display: block;
    margin-bottom: 7.5863vw;
    padding: 0;
    text-align: center;
  }

  .homePage_performs-kicker {
    justify-content: center;
    gap: 0;
    font-size: 3.1818vw;
    letter-spacing: 0.3325vw;
    margin-bottom: 4.3181vw;
    line-height: 4.0909vw;
    font-weight: 400;
    .homePage_performs-kickerLine {
      width: 0;
      height: 0;
      display: none;
    }
  }

  .homePage_performs-title {
    margin: 0;
  }

  .homePage_performs-titleMuted {
    font-size:7.2727vw;
    line-height: 7.8461vw;
    letter-spacing: -0.1229vw;
  }

  .homePage_performs-titleAccent {
    font-size: 9.0909vw;
    line-height: 7.8461vw;
    letter-spacing: -0.1229vw;
  }

  .homePage_performs-headRight {
    margin: 4.0909vw auto 0;
    text-align: center;
    font-size: 2.7272vw;
    line-height: 4.5vw;
    max-width: 58.6363vw;
    color: #dfdfdf;
  }

  .homePage_performs-cards {
    width: 75.324vw;
    margin: 0 auto;
    grid-template-columns: 1fr;
    gap: 4.5455vw;
  }

  .homePage_performs-card {
    border-radius: 3.6364vw !important;
    &::after {
      width: 81%;
      height: 0.3536vw;
    }
  }

  .homePage_performs-cardMedia {
    height: 31.827vw;
    aspect-ratio: auto;
  }

  .homePage_performs-cardOverlay {
    padding: 5.0272vw 0.8vw 8.3113vw;
    min-height: 30.0588vw;
    box-sizing: border-box;
  }

  .homePage_performs-cardTitle {
    padding-left: 4.775vw;
    font-size: 3.3595vw;
    line-height: 4.0909vw;
    letter-spacing: -0.0354vw;
  }

  .homePage_performs-cardDesc {
    margin-top: 0.4295vw;
    font-size: 2.387vw;
    line-height: 4.0579vw;
  }

  .homePage_performs-cardNo {
    right: 3.7159vw;
    bottom: 2.5045vw;
    font-size: 11.67vw;
    line-height: 11.67vw;
  }
}
</style>