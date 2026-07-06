<template>
  <div class="homePage_partner">
    <div class="homePage_partner_trust">
      <div class="homePage_partner_trust_title">
        {{ t("homePartnerTrustTitle") }}
      </div>
      <div class="homePage_partner_trust_list">
        <div
          class="homePage_partner_trust_list_item"
          v-for="item in trustList"
          :key="item.name"
        >
          <router-link :to="item.to">{{ item.name }}</router-link>
        </div>
      </div>
    </div>
    <div class="homePage_partner_banner"></div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const trustList = [
  {
    name: "AgiBot",
    to: { path: "/partnerships", hash: "#partner-agibot" },
  },
  {
    name: "iFLYTEK",
    to: { path: "/partnerships", hash: "#partner-iflytek" },
  },
  {
    name: "HUAWEI",
    to: { path: "/partnerships", hash: "#partner-huawei" },
  },
  {
    name: "THE ARSENALE",
    to: { path: "/partnerships", hash: "#partner-the-arsenale" },
  },
  {
    name: "TODA",
    to: { path: "/partnerships" ,hash:"#partner-toda"},
  },
];
</script>
<style lang="less" scoped>
.homePage_partner {
  width: 100%;
  font-family: Montserrat;
  &_trust {
    width: 100%;
    display: flex;
    padding: 44px 60px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    background-color: #fafafa;
    &_title {
      color: #b0b0b0;
      text-align: center;
      font-size: 11px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    &_list {
      display: flex;
      gap: 52px;
      &_item {
        line-height: 18px;
        &:hover {
          a {
            color: #9a9a9a;
          }
        }
        a {
          color: #d0d0d0;
          text-align: center;
          font-family: Montserrat;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.3px;
          text-decoration: none;
        }
      }
    }
  }
  &_banner {
    width: 100%;
    aspect-ratio: 1920 / 880;
    background: url("@/assets/imgs/home/home_partner_banner.jpg") lightgray 50%
      center / cover no-repeat;
  }
}

@media (max-width: 767px) {
  .homePage_partner {
    &_trust {
      padding: 8.8318vw 4vw;
      gap: 2.7931vw;
      &_title {
        font-size: 2.7272vw;
        line-height: 3.409vw;
        letter-spacing: 0.1745vw;
        text-transform: uppercase;
      }
      &_list {
        display: flex;
        gap: 7.8886vw;
        &_item {
          line-height: 2.5vw;
          &:hover {
            a {
              color: #9a9a9a;
            }
          }
          a {
            font-size: 2.0815vw;
            letter-spacing: -0.0415vw;
          }
        }
      }
    }
    &_banner {
      aspect-ratio: 440 / 201.8;
    }
  }
}
</style>