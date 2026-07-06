<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-col footer-brand">
        <div class="footer-logo-wrap">
          <SvgIcon class="footer-logo" src="logo" />
        </div>
        <p class="footer-desc">
          {{ t("footerBrandDesc") }}
        </p>
      </div>
      <div class="footer-col">
        <h4 class="footer-title">{{ t("footerSectionCompany") }}</h4>
        <nav class="footer-links">
          <a
            v-for="item in companyLinks"
            :key="item.path || item.nameKey"
            :href="item.path"
            @click.prevent="handleClick(item.path)"
            class="footer-link"
          >
            {{ item.name ? item.name : t(item.nameKey) }}
          </a>
        </nav>
      </div>
      <div class="footer-col">
        <h4 class="footer-title">{{ t("footerSectionProducts") }}</h4>
        <nav class="footer-links">
          <a
            v-for="item in productLinks"
            :key="item.path"
            :href="item.path"
            @click.prevent="handleClick(item.path)"
            class="footer-link"
          >
            {{ item.name ? item.name : t(item.nameKey) }}
          </a>
        </nav>
      </div>
      <div class="footer-col">
        <h4 class="footer-title">{{ t("footerSectionSocial") }}</h4>
        <nav class="footer-links">
          <a
            v-for="item in socialLinks"
            :key="item.path"
            rel="noopener noreferrer"
            class="footer-link footer-link_unclickable"
            :href="item.path"
            @click.prevent="handleClick(item.path)"
          >
            {{ item.name ? item.name : t(item.nameKey) }}
        </a>
        </nav>
      </div>
      <div class="footer-col footer-contact">
        <h4 class="footer-title">{{ t("footerSectionContact") }}</h4>
        <a href="mailto:info@mangobot.com" class="footer-link">info@mangobot.com</a>
        <button
          type="button"
          class="footer-address"
          :title="t('footerAddress')"
          @click="openOfficeLocation"
        >
          {{ t("footerAddress") }}
        </button>
        <p class="footer-link" dir="ltr" style="margin-bottom: 0;">+971 56 199 1063</p>
        <p class="footer-link" dir="ltr" style="margin-top: 10px;">+971 43 359 706</p>
      </div>
    </div>
    <div class="footer-copyright">
      {{ t("footerCopyrightBefore", { year }) }}<span>{{ t("footerBrandName") }}</span>{{ t("footerCopyrightAfter") }}
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import SvgIcon from "@/components/SvgIcon.vue";

const router = useRouter();
const { t, locale } = useI18n();
const year = new Date().getFullYear();

const companyLinks = [
  { nameKey: "footerLinksAboutUs", path: "/aboutus" },
  { nameKey: "footerLinksPartnerships", path: "/partnerships" },
  { nameKey: "footerLinksEvents", path: "/events" },
  // { nameKey: "footerLinksCareers", path: "" },
  { nameKey: "footerLinksBlog", path: "/blog" },
  { nameKey: "footerLinksPrivacyPolicy", path: "/privacyPolicy" },
  { nameKey: "footerLinksTermsConditions", path: "/termsConditions" },
];

const productLinks = [
  { name: "A2 Ultra", path: "/product/a2" },
  { name: "X2 Ultra", path: "/product/x2" },
  { name: "D1 Ultra", path: "/product/d1" },
  { name: "D1 Max", path: "/product/d1max" },
  { name: "D1 Max Pro", path: "/product/d1promax" },
  { name: "G1 Ultra", path: "/product/g1" },
];

const socialLinks = [
  { nameKey: "footerSocialInstagram", path: "https://www.instagram.com/mangobotrobotics" },
  { nameKey: "footerSocialTiktok", path: "https://www.tiktok.com/@mangobotrobotics?_t=ZS-90EqAq0VY6G&_r=1" },
  { nameKey: "footerSocialYoutube", path: "https://www.youtube.com/@mangobotrobotics" },
  { nameKey: "footerSocialFacebook", path: "https://www.facebook.com/people/Mangobot-Robotics/61584760526950/" },
  { nameKey: "footerSocialLinkedin", path: "https://www.linkedin.com/company/mangobot/" },
  { nameKey: "footerSocialX", path: "https://x.com/mangobotrobot" },
];

function handleClick(path) {
  if (!path) return;
  if (path.startsWith("http")) {
    window.open(path, "_blank");
  } else {
    router.push(path);
  }
}

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function openOfficeLocation() {
const googleMapsUrl = "https://maps.app.goo.gl/bZbjY1cppuPtSLk49";
  
  if (isMobileDevice()) {
    // 移动端：直接在当前页跳转
    window.location.href = googleMapsUrl;
  } else {
    // PC 端：新标签页打开
    window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  }
}
</script>

<style lang="less" scoped>
.footer {
  font-family: Montserrat;
  width: 100%;
  background: #0A0A0A;
  color: #fff;
  box-sizing: border-box;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 60px 46px 100px;
  margin: 0 auto;
}

.footer-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;

  &.footer-brand {
    max-width: 280px;
  }

  &.footer-contact .footer-link,
  &.footer-contact .footer-address {
    margin-bottom: 12px;
  }
}

.footer-logo-wrap {

  .footer-logo {
    width: 75px;
    height: 23px;
    color: #fff;
  }
}

.footer-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  margin-top: 17px;
}

.footer-title {
  color:#E8E8E8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.footer-link {
  color: #FFF;
  font-size: 13.5px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s;
  &_unclickable {
    cursor: pointer;
  }
  &:hover {
    color: #FF7A1A;
  }
}

.footer-address {
  display: block;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  margin: 0;
  max-width: 298px;
  cursor: pointer;
  &:hover {
    color: #FF7A1A;
  }
}

.footer-copyright {
  font-size: 12px;
  color: #fff;
  border-top: 1px solid #5b5b5b;
  padding: 22px 60px;
  span {
    color: #FF7A1A;
  }
}

@media (max-width: 767px) {
  /* 设计稿宽度 440px：vw = px / 440 * 100 */

  .footer-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5.4545vw;
    row-gap: 10.0272vw;
    padding: 10.4545vw 5.4545vw 16.59vw 9.0909vw;
    align-items: start;
    justify-content: stretch;
  }

  .footer-col {
    min-width: 0;
  }

  .footer-col.footer-brand {
    grid-column: 1 / -1;
    max-width: none;
    margin-bottom: 0;
  }

  .footer-logo-wrap .footer-logo {
    width: 17.0454vw;
    height: 5.4vw;
  }

  .footer-desc {
    font-size: 2.9545vw;
    margin-top: 3.8977vw;
    margin-bottom: 0.1136vw;
    line-height: 4.875vw;
    max-width: 58.409vw;
  }

  .footer-title {
    font-size: 2.5vw;
    letter-spacing: 0.3409vw;
    margin-bottom: 4.5455vw;
    color: #e8e8e8;
  }

  .footer-links {
    gap: 2.9545vw;
  }

  .footer-link {
    font-size: 3.0682vw;
    line-height: 3.6363vw;
    &:hover {
      color: #fff;
    }
    &:active {
      color: #FF7A1A;
    }
  }

  .footer-col.footer-contact .footer-link,
  .footer-col.footer-contact .footer-address {
    margin-bottom: 2.9545vw;
    max-width: none;
  }

  .footer-address {
    font-size: 3.0682vw;
    text-align: start;
    max-width: none;
    &:hover {
      color: #fff;
    }
    &:active {
      color: #FF7A1A;
    }
  }

  .footer-copyright {
    font-size: 2.7273vw;
    padding: 5.9vw 5.4545vw;
    line-height: 3.409vw;
    text-align: center;
  }
}
</style>
