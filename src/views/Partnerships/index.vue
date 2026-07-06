<template>
  <div class="frame">
    <!-- Hero Section -->
    <div class="sectionpp-hero">
      <div class="diveyebrowmargin">
        <div class="diveyebrow">
          <div class="diveyebrow-d" />
          <div class="global-partner-program">
            {{ t("product.partnerships.global_partner_program") }}
          </div>
        </div>
      </div>
      <div class="h1">
        <div class="low-cost-entry-high-impact-container">
          <span class="low-cost-entry-text">{{ t("product.partnerships.hero_title_1") }}<br /></span>
          <span class="high-impact-results">
            <i class="high">{{
              t("product.partnerships.hero_title_2").split("-")[0]
            }}</i>
            <span class="span">-</span>
            <i class="impact-results_1">{{ t("product.partnerships.hero_title_2").split("-")[1] }}
              {{ t("product.partnerships.hero_title_2").split("-")[2] }}</i>
          </span>
        </div>
      </div>
      <div class="pmargin">
        <div class="p">
          <div class="mangobot-channel-partners">
            {{ t("product.partnerships.hero_desc") }}
            <span class="hero-br"></span>
            {{ t("product.partnerships.hero_desc_2") }}
            <span class="hero-br"></span>
            {{ t("product.partnerships.hero_desc_3") }}
          </div>
        </div>
      </div>
      <div class="divpp-hero-btnsmargin">
        <div class="divpp-hero-btns">
          <button type="button" class="hero-btn" @click="handleClickPartner">
            {{ t("product.partnerships.btn_become_partner") }}
          </button>
          <button type="button" class="hero-btn-outline" @click="handleClickPartners">
            {{ t("product.partnerships.btn_see_partners") }}
          </button>
        </div>
      </div>
      <div class="divpp-hero-img"></div>
    </div>
    <div class="divpp-hero-imgmargin"></div>
    <!-- Impact Bar -->
    <div class="divimpact-bar">
      <div class="divimpact-in">
        <div class="divistat">
          <div class="divistat-n">
            <div class="days">
              <span>{{
                t("product.partnerships.stat_1_days").split(" ")[0]
              }}</span>
              <span class="days2">{{
                t("product.partnerships.stat_1_days").split(" ")[1]
              }}</span>
            </div>
          </div>
          <div class="divistat-l">
            <div class="aed-net-profitday" v-html="t('product.partnerships.stat_1_label')"></div>
          </div>
        </div>
        <div class="divistat">
          <div class="divistat-n">
            <div class="days">
              <span>{{
                t("product.partnerships.stat_2_value").replace("k", "")
              }}</span>
              <span class="days2">k</span>
            </div>
          </div>
          <div class="divistat-l">
            <div class="aed-net-profitday" v-html="t('product.partnerships.stat_2_label')"></div>
          </div>
        </div>
        <div class="divistat">
          <div class="divistat-n">
            <div class="days">
              <span>{{
                t("product.partnerships.stat_3_value").replace("%", "")
              }}</span>
              <span class="days2">%</span>
            </div>
          </div>
          <div class="divistat-l">
            <div class="aed-net-profitday" v-html="t('product.partnerships.stat_3_label')"></div>
          </div>
        </div>
        <div class="divistat">
          <div class="divistat-n">
            <div class="days">
              <span>{{
                t("product.partnerships.stat_4_value").replace("x", "")
              }}</span>
              <span class="days2">x</span>
            </div>
          </div>
          <div class="divistat-l">
            <div class="aed-net-profitday" v-html="t('product.partnerships.stat_4_label')"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider_1" id="divider_1"></div>
    <!-- Partnership Models Section -->
    <div class="divtiers-hdr-parent">
      <div class="divistat-n">
        <div class="divsection-lbl">
          <div class="partnership-models">
            {{ t("product.partnerships.partnership_models") }}
          </div>
        </div>
        <div class="h2tiers-ttl">
          <div class="choose-how-you-container">
            <span class="impact-results">{{ t("product.partnerships.models_title") }}
            </span>
            <i class="grow-with-us">{{ t("product.partnerships.models_title_1") }}
            </i>
          </div>
        </div>
        <div class="ptiers-sub">
          <div class="from-profit-sharing">
            {{ t("product.partnerships.models_desc") }}
            <br />
            {{ t("product.partnerships.models_desc_1") }}
          </div>
        </div>
      </div>
      <div class="tier-cards">
        <div class="tier-card">
          <div class="divtier-num">
            <div class="option-01">
              {{ t("product.partnerships.option_01") }}
            </div>
          </div>
          <div class="divtier-name">
            <div class="profit-sharing">
              {{ t("product.partnerships.tier_1_name") }}
            </div>
          </div>
          <div class="divtier-tag">
            {{ t("product.partnerships.tier_1_tag") }}
          </div>
          <div class="div-divider-line">
            <div class="custom-divider-line"></div>
          </div>
          <ul class="ultier-feats">
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_1_feat_1") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_1_feat_2") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_1_feat_3") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_1_feat_4") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_1_feat_5") }}
            </li>
          </ul>
          <button class="tier-btn" @click="handleTierClick('50/50 Profit Sharing')">{{
            t("product.partnerships.tier_1_btn") }}</button>
        </div>
        <div class="tier-card tier-card-popular">
          <div class="most-popular_1">
            {{ t("product.partnerships.most_popular") }}
          </div>
          <div class="divtier-num2">
            <div class="option-01">
              {{ t("product.partnerships.option_02") }}
            </div>
          </div>
          <div class="divtier-name2">
            <div class="profit-sharing">
              {{ t("product.partnerships.tier_3_name") }}
            </div>
          </div>
          <div class="divtier-tag2">
            {{ t("product.partnerships.tier_3_tag") }}
          </div>
          <div class="div-divider-line">
            <div class="custom-divider-line"></div>
          </div>
          <ul class="ultier-feats">
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_3_feat_1") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_3_feat_2") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_3_feat_3") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_3_feat_4") }}
            </li>
          </ul>
          <button class="tier-btn_1" @click="handleTierClick('Direct Asset Ownership')">{{
            t("product.partnerships.tier_3_btn") }}</button>
        </div>
        <div class="tier-card">
          <div class="divtier-num">
            <div class="option-01">
              {{ t("product.partnerships.option_03") }}
            </div>
          </div>
          <div class="divtier-name">
            <div class="profit-sharing">
              {{ t("product.partnerships.tier_2_name") }}
            </div>
          </div>
          <div class="divtier-tag">
            {{ t("product.partnerships.tier_2_tag") }}
          </div>
          <div class="div-divider-line">
            <div class="custom-divider-line"></div>
          </div>
          <ul class="ultier-feats">
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_2_feat_1") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_2_feat_2") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_2_feat_3") }}
            </li>
            <li>
              <span class="arrow">→</span>
              {{ t("product.partnerships.tier_2_feat_4") }}
            </li>
          </ul>
          <button class="tier-btn" @click="handleTierClick('Monthly Rental')">{{
            t("product.partnerships.tier_2_btn") }}</button>
        </div>
      </div>
    </div>

    <!-- Why Partner Section -->
    <div class="divwhy-hdr-parent">
      <div class="divwhy-hdr">
        <div class="divsection-lbl">
          <div class="partnership-models">
            {{ t("product.partnerships.why_partner_title") }}
          </div>
        </div>
        <div class="h2why-ttl">
          <div class="your-brand-our-container">
            <span>{{ t("product.partnerships.why_title") }}<br /></span>
            <i class="everyone-notices">{{
              t("product.partnerships.why_title_1")
            }}</i>
          </div>
        </div>
        <div class="pwhy-sub">
          <div class="humanoid-robots-naturally">
            {{ t("product.partnerships.why_desc") }}
          </div>
        </div>
      </div>
      <div class="frame-parent">
        <div class="why-cards-row">
          <div class="why-card_1" v-for="(item, index) in whyFeatures.slice(0, 3)" :key="index">
            <div class="divwhy-icon">
              <div class="most-popular">{{ item.icon }}</div>
            </div>
            <img class="overlayshadow-icon" alt="" :src="item.icon" />
            <h3 class="divwhy-ttl-c">{{ item.title }}</h3>
            <p class="divwhy-desc_1">{{ item.desc }}</p>
            <span class="spanwhy-metric">{{ item.metric }}</span>
          </div>
        </div>
        <div class="why-cards-row">
          <div class="why-card" v-for="(item, index) in whyFeatures.slice(3, 6)" :key="index + 3">
            <div class="divwhy-icon4">
              <div class="most-popular">{{ item.icon }}</div>
            </div>
            <img class="overlayshadow-icon4" alt="" :src="item.icon" />
            <h3 class="divwhy-ttl-c4">{{ item.title }}</h3>
            <p class="divwhy-desc4">{{ item.desc }}</p>
            <span class="spanwhy-metric4">{{ item.metric }}</span>
          </div>
        </div>
      </div>
      <div class="custom-divider"></div>
    </div>

    <!-- Partners Section -->
    <div class="partners-section" id="partners-section">
      <div class="partner-block" v-for="(partner, pIndex) in partners" :key="partner.anchorId" :id="partner.anchorId">
        <div class="divpartner-hdr">
          <div class="div21">
            <div class="divp-badge">
              <div class="divp-badge-dot" />
              <div class="global-partner-program">{{ partner.badge }}</div>
            </div>
            <h2 class="h2p-name">
              <div class="theater-of-digital-container" v-html="partner.name"></div>
            </h2>
            <div class="pp-desc">
              <div class="agibot-is-the" v-html="partner.desc"></div>
            </div>
            <div class="divp-tags">
              <span v-for="(tag, tIndex) in partner.tags" :key="tIndex" class="spanp-tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <img :src="partner.background" alt="" class="background-image" />
        </div>

        <div class="event-cards">
          <div class="event-card_1"><img :src="partner.background" alt="" class="background-image_1" /></div>
          <div class="event-card" v-for="(event, eIndex) in partner.events" :key="eIndex">
            <div class="event-card-inner">
              <div class="divev-vis-parent">
                <div class="divev-vis" :style="{ background: `url(${event.background})` }">
                  <div class="in-store-wrapper">
                    <b class="most-popular">{{ event.badge }}</b>
                  </div>
                </div>
                <div class="in-store-showcase">{{ event.title }}</div>
                <div class="the-x2-ultra" >{{ event.desc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pIndex !== partners.length - 1" class="partner-divider_2"></div>
      </div>
      
      <div id="contact-form" class="contact-section-anchor"></div>
    </div>
    <!-- <div class="contact-section" id="contact-form"></div> -->

    <!-- Contact Section -->
    <div class="divider_2" id="divider_2"></div>
    <div class="divcontact-in">
      <div class="div26">
        <div class="divsection-lbl3">
          <div class="before" />
          <div class="partnership-models">
            {{ t("product.partnerships.become_partner") }}
          </div>
        </div>
        <div class="h2contact-ttl">
          <div class="this-isnt-a-container">
            <span class="impact-results">{{
              t("product.partnerships.contact_title")
            }}
            </span>
            <i class="grow-with-us">{{
              t("product.partnerships.contact_title_1")
            }}</i>
          </div>
        </div>
        <div class="pcontact-desc">
          <div class="mangobot-offers-partnership">
            {{ t("product.partnerships.contact_desc") }}
            <br />
            <br />
            {{ t("product.partnerships.contact_desc_1") }}
          </div>
        </div>
        <button type="button" class="whatsapp-btn" @click="openWhatsApp">
          <div class="component-7">
            <svg class="vector-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <b class="text">{{ t("product.partnerships.btn_whatsapp") }}</b>
        </button>
      </div>
      <div class="divform-card" >
        <form class="contact-form" @submit.prevent="handleSubmit" ref="formRef">
          <div class="form-row">
            <div class="form-col">
              <div class="form-item">
                <label class="form-label">{{ t("product.partnerships.form_first_name") }}</label>
                <input v-model="formState.firstName" :placeholder="t('product.partnerships.placeholder_first_name')"
                  class="custom-input" :class="{ 'input-error': errors.firstName }" />
                <div v-if="errors.firstName" class="error-message">{{ errors.firstName }}</div>
              </div>
            </div>
            <div class="form-col">
              <div class="form-item">
                <label class="form-label">{{ t("product.partnerships.form_last_name") }}</label>
                <input v-model="formState.lastName" :placeholder="t('product.partnerships.placeholder_last_name')"
                  class="custom-input" :class="{ 'input-error': errors.lastName }" />
                <div v-if="errors.lastName" class="error-message">{{ errors.lastName }}</div>
              </div>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label">{{ t("product.partnerships.form_company") }}</label>
            <input v-model="formState.company" :placeholder="t('product.partnerships.placeholder_company')"
              class="custom-input" :class="{ 'input-error': errors.company }" />
            <div v-if="errors.company" class="error-message">{{ errors.company }}</div>
          </div>
          <div class="form-item">
            <label class="form-label">{{ t("product.partnerships.form_email") }}</label>
            <input v-model="formState.email" placeholder="you@company.com" class="custom-input"
              :class="{ 'input-error': errors.email }" />
            <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
          </div>
          <div class="form-item">
            <label class="form-label">{{ t("product.partnerships.form_interest") }}</label>
            <div class="custom-select-wrapper" :class="{ 'open': isDropdownOpen, 'input-error': errors.interest }">
              <div class="custom-select-trigger" @click="toggleDropdown">
                <span :class="{ 'placeholder': !formState.interest }">
                  {{ selectedInterestLabel || t('product.partnerships.form_select_placeholder') }}
                </span>
                <svg class="dropdown-arrow" :class="{ 'open': isDropdownOpen }" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="custom-select-dropdown" v-show="isDropdownOpen">
                <div v-for="item in interestOptions" :key="item.value" class="custom-select-option"
                  :class="{ 'selected': formState.interest === item.value }" @click="selectOption(item.value)">
                  {{ item.label }}
                </div>
              </div>
            </div>
            <div v-if="errors.interest" class="error-message">{{ errors.interest }}</div>
          </div>
          <div class="form-item">
            <label class="form-label">{{ t("product.partnerships.form_message") }}</label>
            <textarea v-model="formState.message" rows="4" :placeholder="t('product.partnerships.placeholder_message')"
              class="custom-textarea" :class="{ 'input-error': errors.message }"></textarea>
            <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
          </div>
          <button type="submit" class="submit-btn" :disabled="submitting">
            {{
              submitting
              ? t("product.partnerships.form_submit")
              : t("product.partnerships.form_submit")
            }}
          </button>
        </form>
      </div>
    </div>

    <!-- Toast 提示 -->
    <div v-if="toastVisible" class="custom-toast" :class="toastType">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { message } from "ant-design-vue";
import { ref, computed, nextTick, onMounted, watch, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import Partnerships_icon1 from "../../assets/imgs/Partnerships-icon1.svg";
import Partnerships_icon2 from "../../assets/imgs/Partnerships-icon2.png";
import Partnerships_icon3 from "../../assets/imgs/Partnerships-icon3.svg";
import Partnerships_icon4 from "../../assets/imgs/Partnerships-icon4.svg";
import Partnerships_icon5 from "../../assets/imgs/Partnerships-icon5.png";
import Partnerships_icon6 from "../../assets/imgs/Partnerships-icon6.svg";
import Partnerships_img1 from "../../assets/imgs/partner-01.jpg";
import Partnerships_img2 from "../../assets/imgs/Partnerships-img2.png";
import Partnerships_img3 from "../../assets/imgs/Partnerships-img5.jpeg";
import Partnerships_img4 from "../../assets/imgs/Partnerships-img4.png";
import Partnerships_iflytek_1 from "../../assets/imgs/partner-04.jpg";
import Partnerships_DigitalArt_1 from "../../assets/imgs/partner-02.jpg";
import Partnerships_DigitalArt_2 from "../../assets/imgs/Partnerships-DigitalArt-2.png";
import Partnerships_DigitalArt_3 from "../../assets/imgs/Partnerships-DigitalArt-5.jpg";
import Partnerships_DigitalArt_4 from "../../assets/imgs/Partnerships-DigitalArt-4.png";
import Partnerships_TheArsenale_1 from "../../assets/imgs/partner-03.jpg";
import Partnerships_TheArsenale_2 from "../../assets/imgs/Partnerships-TheArsenale-2.png";
import Partnerships_TheArsenale_3 from "../../assets/imgs/Partnerships-TheArsenale-3.png";
import Partnerships_TheArsenale_4 from "../../assets/imgs/Partnerships-TheArsenale-4.png";
import Partnerships_Huawei_1 from "../../assets/imgs/partner-05.jpg";

import Rectangle_bg1 from "../../assets/imgs/Rectangle_bg1.jpg";
import Rectangle_bg2 from "../../assets/imgs/Rectangle_bg2.jpg";
import Rectangle_bg3 from "../../assets/imgs/Rectangle_bg3.jpg";
import Rectangle_bg4 from "../../assets/imgs/Rectangle_bg4.jpg";
import Rectangle_bg5 from "../../assets/imgs/Rectangle_bg5.jpg";
// Toast 相关
const toastVisible = ref(false);
const toastMessage = ref('');
const toastType = ref('success');
let toastTimer = null;
const isDropdownOpen = ref(false);
const showToast = (message, type = 'success') => {
  if (toastTimer) clearTimeout(toastTimer);
  toastMessage.value = message;
  toastType.value = type;
  toastVisible.value = true;
  toastTimer = setTimeout(() => {
    toastVisible.value = false;
  }, 3000);
};
const isMobile = ref(window.innerWidth <= 767)

// Form state
const formState = ref({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  interest: "",
  message: "",
});
const errors = ref({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  interest: "",
  message: "",
});
const formRef = ref(null);
const submitting = ref(false);
const router = useRouter();
const route = useRoute();
const handleResize = () => {
  isMobile.value = window.innerWidth <= 767;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleClickOutside);
});
/** 顶栏留白由 .partner-block 的 scroll-margin-top 配合 scrollIntoView 处理 */
function scrollPartnerSectionIntoView() {
  const id = route.hash?.replace(/^#/, "") ?? "";
  if (!id || !id.startsWith("partner-")) return;

  const scrollToEl = (behavior) => {
    const el = document.getElementById(id);
    if (!el) return false;
    el.scrollIntoView({ block: "start", behavior });
    return true;
  };

  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!scrollToEl("auto")) {
          let attempts = 0;
          const timer = setInterval(() => {
            attempts += 1;
            if (scrollToEl("auto") || attempts > 80) {
              clearInterval(timer);
            }
          }, 50);
        }
        const refine = () => scrollToEl("smooth");
        setTimeout(refine, 400);
        setTimeout(refine, 900);
        setTimeout(refine, 2000);
        window.addEventListener("load", () => scrollToEl("auto"), { once: true });
      });
    });
  });
}

watch(
  () => route.fullPath,
  () => {
    scrollPartnerSectionIntoView();
  },
  { flush: "post" }
);

onMounted(() => {
  scrollPartnerSectionIntoView();

  nextTick(() => {
    if (route.hash) {
      const element = document.querySelector(route.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// 验证函数
const validateForm = () => {
  let isValid = true;
  const newErrors = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  };

  if (!formState.value.firstName.trim()) {
    newErrors.firstName = t("product.partnerships.validate_first_name");
    isValid = false;
  }

  if (!formState.value.lastName.trim()) {
    newErrors.lastName = t("product.partnerships.validate_last_name");
    isValid = false;
  }

  if (!formState.value.company.trim()) {
    newErrors.company = t("product.partnerships.validate_company");
    isValid = false;
  }

  if (!formState.value.email.trim()) {
    newErrors.email = t("product.partnerships.validate_email");
    isValid = false;
  } else {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(formState.value.email)) {
      newErrors.email = t("product.partnerships.validate_email_valid");
      isValid = false;
    }
  }

  if (!formState.value.interest) {
    newErrors.interest = t("product.partnerships.validate_interest");
    isValid = false;
  }

  if (!formState.value.message.trim()) {
    newErrors.message = t("product.partnerships.validate_message");
    isValid = false;
  }

  errors.value = newErrors;
  return isValid;
};

// 重置表单
const resetFields = () => {
  formState.value = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  };
  errors.value = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  };
};

const interestOptions = ref([
  {
    value: "50/50 Profit Sharing",
    label: t("product.partnerships.tier_1_name"),
  },
  { value: "Monthly Rental", label: t("product.partnerships.tier_2_name") },
  {
    value: "Direct Asset Ownership",
    label: t("product.partnerships.tier_3_name"),
  },
  {
    value: "Others",
    label: t("product.partnerships.tier_4_name"),
  }
]);

// Why partner features
const whyFeatures = ref([
  {
    icon: Partnerships_icon1,
    title: t("product.partnerships.why_1_title"),
    desc: t("product.partnerships.why_1_desc"),
    metric: t("product.partnerships.why_1_metric"),
  },
  {
    icon: Partnerships_icon2,
    title: t("product.partnerships.why_2_title"),
    desc: t("product.partnerships.why_2_desc"),
    metric: t("product.partnerships.why_2_metric"),
  },
  {
    icon: Partnerships_icon3,
    title: t("product.partnerships.why_3_title"),
    desc: t("product.partnerships.why_3_desc"),
    metric: t("product.partnerships.why_3_metric"),
  },
  {
    icon: Partnerships_icon4,
    title: t("product.partnerships.why_4_title"),
    desc: t("product.partnerships.why_4_desc"),
    metric: t("product.partnerships.why_4_metric"),
  },
  {
    icon: Partnerships_icon5,
    title: t("product.partnerships.why_5_title"),
    desc: t("product.partnerships.why_5_desc"),
    metric: t("product.partnerships.why_5_metric"),
  },
  {
    icon: Partnerships_icon6,
    title: t("product.partnerships.why_6_title"),
    desc: t("product.partnerships.why_6_desc"),
    metric: t("product.partnerships.why_6_metric"),
  },
]);

// Partners data
const partners = ref([
  {
    anchorId: "partner-agibot",
    badge: t("product.partnerships.p1_badge"),
    name: t("product.partnerships.p1_name"),
    desc: t("product.partnerships.p1_desc"),
    tags: [
      t("product.partnerships.p1_tag1"),
      t("product.partnerships.p1_tag2"),
      t("product.partnerships.p1_tag3"),
      t("product.partnerships.p1_tag4"),
    ],
    background: isMobile ? Rectangle_bg1 : Partnerships_img1,

    events: [
      {
        badge: t("product.partnerships.p1_e1_badge"),
        title: t("product.partnerships.p1_e1_title"),
        desc: t("product.partnerships.p1_e1_desc"),
        background: Partnerships_img2,
      },
      {
        badge: t("product.partnerships.p1_e2_badge"),
        title: t("product.partnerships.p1_e2_title"),
        desc: t("product.partnerships.p1_e2_desc"),
        background: Partnerships_img3,
      },
      {
        badge: t("product.partnerships.p1_e3_badge"),
        title: t("product.partnerships.p1_e3_title"),
        desc: t("product.partnerships.p1_e3_desc"),
        background: Partnerships_img4,
      },
    ],
  },
  {
    anchorId: "partner-iflytek",
    badge: t("product.partnerships.p2_badge"),
    name: t("product.partnerships.p2_name"),
    desc: t("product.partnerships.p2_desc"),
    tags: [
      t("product.partnerships.p2_tag1"),
      t("product.partnerships.p2_tag2"),
      t("product.partnerships.p2_tag3"),
      t("product.partnerships.p2_tag4"),
    ],
    background: isMobile ? Rectangle_bg2 : Partnerships_iflytek_1,
    events: [
      {
        badge: t("product.partnerships.p2_e1_badge"),
        title: t("product.partnerships.p2_e1_title"),
        desc: t("product.partnerships.p2_e1_desc"),
        background: Partnerships_iflytek_1,
      },
      {
        badge: t("product.partnerships.p2_e2_badge"),
        title: t("product.partnerships.p2_e2_title"),
        desc: t("product.partnerships.p2_e2_desc"),
        background: Partnerships_iflytek_1,
      },
      {
        badge: t("product.partnerships.p2_e3_badge"),
        title: t("product.partnerships.p2_e3_title"),
        desc: t("product.partnerships.p2_e3_desc"),
        background: Partnerships_iflytek_1,
      },
    ],
  },
  {
    anchorId: "partner-huawei",
    badge: t("product.partnerships.p3_badge"),
    name: t("product.partnerships.p3_name"),
    desc: t("product.partnerships.p3_desc"),
    tags: [
      t("product.partnerships.p3_tag1"),
      t("product.partnerships.p3_tag2"),
      t("product.partnerships.p3_tag3"),
      t("product.partnerships.p3_tag4"),
    ],
    background: isMobile ? Rectangle_bg3 : Partnerships_Huawei_1,
    events: [
      {
        badge: t("product.partnerships.p3_e1_badge"),
        title: t("product.partnerships.p3_e1_title"),
        desc: t("product.partnerships.p3_e1_desc"),
        background: Partnerships_Huawei_1,
      },
      {
        badge: t("product.partnerships.p3_e2_badge"),
        title: t("product.partnerships.p3_e2_title"),
        desc: t("product.partnerships.p3_e2_desc"),
        background: Partnerships_Huawei_1,
      },
      {
        badge: t("product.partnerships.p3_e3_badge"),
        title: t("product.partnerships.p3_e3_title"),
        desc: t("product.partnerships.p3_e3_desc"),
        background: Partnerships_Huawei_1,
      },
    ],
  },
  {
    anchorId: "partner-toda",
    badge: t("product.partnerships.p4_badge"),
    name: `<span class="impact-results">${t(
      "product.partnerships.p4_name_pre"
    )}</span><i class="grow-with-us" style="color: #FF7A1A">${t(
      "product.partnerships.p4_name_suf"
    )}</i>`,
    desc: t("product.partnerships.p4_desc"),
    tags: [
      t("product.partnerships.p4_tag1"),
      t("product.partnerships.p4_tag2"),
      t("product.partnerships.p4_tag3"),
      t("product.partnerships.p4_tag4"),
    ],
    background: isMobile ? Rectangle_bg4 : Partnerships_DigitalArt_1,
    events: [
      {
        badge: t("product.partnerships.p4_e1_badge"),
        title: t("product.partnerships.p4_e1_title"),
        desc: t("product.partnerships.p4_e1_desc"),
        background: Partnerships_DigitalArt_2,
      },
      {
        badge: t("product.partnerships.p4_e2_badge"),
        title: t("product.partnerships.p4_e2_title"),
        desc: t("product.partnerships.p4_e2_desc"),
        background: Partnerships_DigitalArt_3,
      },
      {
        badge: t("product.partnerships.p4_e3_badge"),
        title: t("product.partnerships.p4_e3_title"),
        desc: t("product.partnerships.p4_e3_desc"),
        background: Partnerships_DigitalArt_4,
      },
    ],
  },
  {
    anchorId: "partner-the-arsenale",
    badge: t("product.partnerships.p5_badge"),
    name: `<span class="impact-results">${t(
      "product.partnerships.p5_name_pre"
    )}</span><i class="grow-with-us" style="color: #FF7A1A">${t(
      "product.partnerships.p5_name_suf"
    )}</i>`,
    desc: t("product.partnerships.p5_desc"),
    tags: [
      t("product.partnerships.p5_tag1"),
      t("product.partnerships.p5_tag2"),
      t("product.partnerships.p5_tag3"),
      t("product.partnerships.p5_tag4"),
    ],
    background: isMobile ? Rectangle_bg5 : Partnerships_TheArsenale_1,
    events: [
      {
        badge: t("product.partnerships.p5_e1_badge"),
        title: t("product.partnerships.p5_e1_title"),
        desc: t("product.partnerships.p5_e1_desc"),
        background: Partnerships_TheArsenale_2,
      },
      {
        badge: t("product.partnerships.p5_e2_badge"),
        title: t("product.partnerships.p5_e2_title"),
        desc: t("product.partnerships.p5_e2_desc"),
        background: Partnerships_TheArsenale_3,
      },
      {
        badge: t("product.partnerships.p5_e3_badge"),
        title: t("product.partnerships.p5_e3_title"),
        desc: t("product.partnerships.p5_e3_desc"),
        background: Partnerships_TheArsenale_4,
      },
    ],
  },
]);

const selectedInterestLabel = computed(() => {
  const selected = interestOptions.value.find(item => item.value === formState.value.interest);
  return selected ? selected.label : '';
});

// 切换下拉框
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// 选择选项
const selectOption = (value) => {
  formState.value.interest = value;
  isDropdownOpen.value = false;
  // 清除错误
  if (errors.value.interest) {
    errors.value.interest = '';
  }
};

// 点击外部关闭下拉框
const handleClickOutside = (event) => {
  const wrapper = document.querySelector('.custom-select-wrapper');
  if (wrapper && !wrapper.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};
const handleInterestChange = (event) => {
  // 清除错误
  if (errors.value.interest) {
    errors.value.interest = '';
  }
};
const handleSubmit = async () => {
  if (submitting.value) return;

  if (!validateForm()) return;

  submitting.value = true;
  try {
    const payload = {
      to: "changekuan@gmail.com",
      subject: `${t("product.partnerships.become_partner")} - ${formState.value.company}`,
      text: `
          ${t("product.partnerships.form_first_name")}: ${formState.value.firstName} ${formState.value.lastName}
          ${t("product.partnerships.form_company")}: ${formState.value.company}
          ${t("product.partnerships.form_email")}: ${formState.value.email}
          ${t("product.partnerships.form_interest")}: ${formState.value.interest}
          ${t("product.partnerships.form_message")}: ${formState.value.message}
        `.trim(),
    };
    const response = await fetch("https://email.mangobot.org/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Failed to send enquiry");
    }
    showToast(t("product.contact.contact.messages.success"), 'success');
    resetFields();
  } catch (error) {
    console.error("Submit error:", error);
    showToast(t("product.partnerships.failed_submit"), 'error');
  } finally {
    submitting.value = false;
  }
};

const handleClickPartner = () => {
  const divider_1 = document.getElementById("divider_1");
  if (divider_1) {
    divider_1.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
const handleClickPartners = () => {
  const partnerssection = document.getElementById("partners-section");
  if (partnerssection) {
    partnerssection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const handleTierClick = (interestValue) => {
  router.push({
    path: "/contactus",
    query: { interest: interestValue, name: "Partnerships" },
  });
};

const openWhatsApp = () => { };
</script>

<style scoped lang="less">
/* 保持原有样式，添加原生表单样式和 Toast 样式 */

/* Toast 样式 */
.custom-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-family: Montserrat;
  z-index: 9999;
  animation: slideDown 0.3s ease;
  white-space: nowrap;
}

.custom-toast.success {
  background-color: #52c41a;
  color: white;
}

.custom-toast.error {
  background-color: #ff4d4f;
  color: white;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 原生表单样式 */
.contact-form {
  width: 100%;
}

.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 0;
}

.form-col {
  flex: 1;
}

.form-item {
  margin-bottom: 16px;
  width: 100%;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #0a0a0a;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: start;
}

.custom-input,
.custom-textarea,
.custom-select {
  width: 100%;
  padding: 12px 15px;
  border-radius: 9px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  background-color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  color: #757575;
  outline: none;
  transition: all 0.2s ease;
}

.custom-input:hover,
.custom-textarea:hover,
.custom-select:hover {
  border-color: rgba(0, 0, 0, 0.13);
}

.custom-input:focus,
.custom-textarea:focus,
.custom-select:focus {
  border-color: rgba(0, 0, 0, 0.13);
  box-shadow: none;
}

.custom-input.input-error,
.custom-textarea.input-error,
.custom-select.input-error {
  border-color: #ff4d4f;
}

.custom-textarea {
  resize: vertical;
  min-height: 100px;
}

// .custom-select {
//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
//   background-repeat: no-repeat;
//   background-position: right 15px center;
//   background-size: 16px;
//   cursor: pointer;
// }

// .custom-select:invalid {
//   color: #757575;
// }

// .custom-select:valid {
//   color: #0a0a0a;
// }

// .custom-select option {
//   color: #0a0a0a;
// }

.custom-select-wrapper {
  position: relative;
  width: 100%;
  user-select: none;

  &.input-error .custom-select-trigger {
    border-color: #ff4d4f;
  }
}

.custom-select-trigger {
  width: 100%;
  border-radius: 9px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.13);
  padding: 12px 15px;
  font-size: 14px;
  color: #0a0a0a;
  font-family: Montserrat;
  min-height: 43px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .placeholder {
    color: #0A0A0A;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: var(--font-weight-400, 400);
    line-height: 17px;
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.13);
  }
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  flex-shrink: 0;

  &.open {
    transform: rotate(180deg);
  }
}

.custom-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 9px;
  margin-top: 4px;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-select-option {
  padding: 12px 15px;
  font-size: 14px;
  font-family: Montserrat;
  color: #0a0a0a;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: left;

  &:hover {
    background-color: #f5f5f5;
  }

  &.selected {
    background-color: #f0f0f0;
    font-weight: 500;
  }
}


.error-message {
  font-size: 11px;
  margin-top: 4px;
  color: #ff4d4f;
  text-align: start;
}

.submit-btn {
  width: 100%;
  height: 40px;
  border-radius: 11px;
  background-color: #000;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 13px;
}

.submit-btn:hover {
  background-color: #ff7a1a;
  color: #fff;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 分隔线样式 */
.custom-divider {
  width: 110%;
  border: 2px solid #d0d0d0;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0;
}

.div-divider-line {
  width: 100%;

  .custom-divider-line {
    align-self: stretch;
    /* height: 1px;
  background-color: #0F0F0F; */
    border: 1px solid #1d1d1d;
    margin: 0;
  }
}


/* 卡片网格布局 */
.tier-cards {
  display: flex;
  gap: 25px;
  justify-content: center;
  /* flex-wrap: wrap; */
}

.why-cards-row {
  display: flex;
  gap: 15px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
}

.why-card,
.why-card_1 {
  flex: 1;
  min-width: 280px;
  max-width: 418px;
}

.event-cards {
  display: flex;
  gap: 24px;
  margin-top: 42px;
  flex-wrap: wrap;
  justify-content: center;
}

.event-card {
  flex: 1;
  min-width: 280px;
  max-width: 418px;
}

.event-card_1 {
  display: none;
}


/* 保持原有样式不变 */
.frame {
  width: 100%;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  text-align: center;
  font-size: 11px;
  color: #ff7a1a;
  font-family: Montserrat;
}

/* ... 保留所有原有的其他样式 ... */
.sectionpp-hero {
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 200px 0px;
  position: relative;
  isolation: isolate;
  z-index: 0;
  background-image: url("../../assets/imgs/partnerships-bg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 888px;
}

.diveyebrowmargin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 32px;
  z-index: 0;
  flex-shrink: 0;
}

.diveyebrow {
  border-radius: 100px;
  background-color: rgba(255, 122, 26, 0.07);
  border: 1px solid rgba(255, 122, 26, 0.2);
  display: flex;
  align-items: center;
  padding: 6px 16px 6px 8px;
  gap: 8px;
}

.diveyebrow-d {
  height: 7px;
  width: 7px;
  position: relative;
  border-radius: 3.5px;
  background-color: #ff7a1a;
}

.global-partner-program {
  position: relative;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-shrink: 0;
  font-size: 94px;
  color: #0a0a0a;
}

.low-cost-entry-high-impact-container {
  position: relative;
  letter-spacing: -2px;
  line-height: 96.82px;
}

.low-cost-entry-text {
  color: #0A0A0A;
  font-family: Montserrat;
  font-size: 94px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--line-height-96_82, 96.82px);
  letter-spacing: var(--letter-spacing--2, -2px);
}

.high-impact-results {
  color: #ff7a1a;
  font-family: Cormorant Garamond;
}

.high {
  font-weight: 300;
  font-family: Cormorant Garamond;
  line-height: var(--line-height-96_82, 96.82px);
  letter-spacing: var(--letter-spacing--2, -6px);
  font-style: italic;
}

.span {
  font-family: "Abhaya Libre";
  font-weight: 300;
  letter-spacing: var(--letter-spacing--2, -6px);
}

.impact-results_1 {
  font-weight: 300;
  font-family: Cormorant Garamond;
  line-height: var(--line-height-96_82, 96.82px);
  letter-spacing: var(--letter-spacing--2, -2px);
  font-style: italic;
}

.impact-results {
  font-weight: 300;
  font-family: Cormorant Garamond;
  line-height: var(--line-height-96_82, 96.82px);
  letter-spacing: var(--letter-spacing--2, -2px);
  font-style: italic;
}

.pmargin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 23.3px 0px 0px;
  box-sizing: border-box;
  z-index: 2;
  flex-shrink: 0;
  font-size: 17px;
  color: #6b6b6b;
}

.p {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 5.2px;
  box-sizing: border-box;
}

.mangobot-channel-partners {
  position: relative;
  line-height: 29.75px;
  flex-shrink: 0;
}

.divpp-hero-btnsmargin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 42px 0px 0px; */
  /* padding-top: 42px; */
  margin-top: 42px;
  z-index: 4;
  flex-shrink: 0;
  font-size: 20px;
  color: #fff;
  height: 54px;
}

.divpp-hero-btns {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.hero-btn {
  min-width: 230px;
  height: 54px;
  border-radius: 50px;
  font-size: 20px;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 0 25px;
  background: #000;
  color: #fff;
  width: fit-content;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-btn:hover {
  background: #ff7a1a;
}

.hero-btn-outline {
  min-width: 230px;
  height: 54px;
  border-radius: 50px;
  font-size: 20px;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 0 25px;
  border: 1px solid #cecece;
  width: fit-content;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #000;
}

.hero-btn-outline:hover {
  background: #e3e3e3;
  border-color: #000;
  color: #000;
}

.divimpact-bar {
  width: 100%;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 320px;
  box-sizing: border-box;
  z-index: 1;
  font-size: 50px;
  color: #fff;
  font-family: Cormorant Garamond;
}

.divimpact-in {
  width: 100%;
  border-radius: 18px;
  background-color: #222;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1px;
  max-width: 1280px;
}

.divistat {
  align-self: stretch;
  flex: 1;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px 30px;
  gap: 7px;
}

.divistat-n {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.days {
  position: relative;
  line-height: 50px;
  font-weight: 300;
}

.days2 {
  color: #ff7a1a;
}

.divistat-l {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #555;
  font-family: Montserrat;
}

.aed-net-profitday {
  position: relative;
  letter-spacing: 0.3px;
  line-height: 18px;
  font-weight: 400;
}

.divtiers-hdr-parent {
  width: 100%;
  background-color: #0a0a0a;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 49px 0px 148px;
  box-sizing: border-box;
  gap: 72px;
  z-index: 2;
}

.divsection-lbl {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partnership-models {
  position: relative;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.h2tiers-ttl {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 56px;
  color: #fff;
  font-family: Cormorant Garamond;
}

.choose-how-you-container {
  position: relative;
  letter-spacing: -1px;
  line-height: 60.48px;
}

.grow-with-us {
  font-weight: 300;
  color: #ff7a1a;
  font-family: Cormorant Garamond;
}

.ptiers-sub {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 0px 0px;
  box-sizing: border-box;
  max-width: 500px;
  font-size: 15px;
  color: #e8e8e8;
}

.from-profit-sharing {
  position: relative;
  line-height: 26.25px;
}

.tier-card {
  height: 459px;
  width: 418px;
  border-radius: 19px;
  background-color: #0f0f0f;
  border: 1px solid #1d1d1d;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 43px 33px;
  gap: 23px;
  font-family: Montserrat;
  flex-shrink: 0;
  position: relative;
  transition: all 0.4s ease;
}

.tier-card:hover {
  border-color: #ff7a1a;
  transform: translateY(-19.5px);
}

.tier-card-popular {
  position: relative;
}

.most-popular_1 {
  position: absolute;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  z-index: 5;
  background-color: #ff7a1a;
  color: #fff;
  top: -10px;
  border-radius: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.most-popular {
  position: absolute;
  display: flex;
  padding: 4px 8px;
  z-index: 5;
  background-color: #fff;
  color: #0a0a0a;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 12px;
  transform: scale(0.645);
  transform-origin: center center;
  font-weight: 700;
  line-height: normal;
}

.divtier-num,
.divtier-num2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 10px;
}

.divtier-num2 {
  color: #ff7a1a;
}

.option-01 {
  position: relative;
  letter-spacing: 2px;
  color: #ff7a1a;
  font-size: 10px;
}

.divtier-name,
.divtier-name2 {
  /* margin-top: 23px; */
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 22px;
  color: #fff;
}

.profit-sharing {
  position: relative;
  letter-spacing: -0.3px;
  font-weight: 800;
}

.divtier-tag,
.divtier-tag2 {
  /* margin-top: 23px; */
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 11px;
  color: #555;
}

.ultier-feats {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0;
  list-style: none;
  margin: 0;
  /* margin-top: 23px; */
  font-family: Montserrat;
}

.ultier-feats li {
  position: relative;
  width: 400px;
  text-align: start;
  margin-left: -17px;
  font-size: 12px;
  transform: scale(0.917);
  color: #bbb;
  line-height: 19.5px;
}

.arrow {
  margin-right: 8px;
  color: #ff7a1a;
  font-size: 13px;
}

.tier-btn {
  margin-top: 0px;
  border-radius: 11px;
  border: 1px solid #333;
  background-color: #000000;
  color: #888;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 40px;
  padding: 8px 16px;
  white-space: normal;
  line-height: 1.4;
  overflow: visible;
  box-sizing: border-box;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tier-btn:hover {
  border-color: #ff7a1a;
  color: #ff7a1a;
}

.tier-btn_1 {
  margin-top: 32px;
  border-radius: 11px;
  background-color: #ff7a1a;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 40px;
  padding: 8px 16px;
  white-space: normal;
  line-height: 1.4;
  overflow: visible;
  box-sizing: border-box;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tier-btn_1:hover {
  border-color: #ff7a1a;
  color: #fff;
  background-color: #ffb47e;
}

.divwhy-hdr-parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 74px 0px 0px;
  box-sizing: border-box;
  z-index: 3;
  text-align: left;
  font-size: 10px;
  color: #0a0a0a;
}

.divwhy-hdr {
  width: 1900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12.8px;
  flex-shrink: 0;
  text-align: center;
  font-size: 11px;
  color: #ff7a1a;
}

.h2why-ttl {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 56px;
  color: #0a0a0a;
}

.your-brand-our-container {
  position: relative;
  letter-spacing: -1px;
  line-height: 61.6px;
  flex-shrink: 0;
}

.everyone-notices {
  font-weight: 300;
  font-family: Cormorant Garamond;
  color: #ff7a1a;
}

.pwhy-sub {
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.2px 0px 0px;
  box-sizing: border-box;
  max-width: 560px;
  font-size: 16px;
  color: #6b6b6b;
}

.humanoid-robots-naturally {
  position: relative;
  line-height: 28px;
}

.frame-parent {
  padding: 60px 0px 12px;
  width: 1300px;
  min-height: 743px;
  position: relative;
  flex-shrink: 0;
  font-size: 20.03px;
}

.why-card,
.why-card_1 {
  min-height: 300px;
  /* height: 100%; */
  border-radius: 20.03px;
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 41.1px 35.1px;
  gap: 15px;
}

.why-card_1 {
  padding: 41.1px 35.1px 17.76px 35.1px;
}

.divwhy-icon,
.divwhy-icon4 {
  width: 50.1px;
  height: 50.1px;
  border-radius: 13.02px;
  background-color: rgba(255, 122, 26, 0.07);
  border: 1px solid rgba(255, 122, 26, 0.2);
  box-sizing: border-box;
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  font-family: Syne;
}

.overlayshadow-icon,
.overlayshadow-icon4 {
  width: 54.1px;
  height: 54.1px;
  position: relative;
  border-radius: 60.85px;
  flex-shrink: 0;
}

.divwhy-ttl-c,
.divwhy-ttl-c4 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 19.03px;
  /* margin: 15px 0px; */
  font-family: Montserrat;
  font-weight: 700;
  min-height: auto;
  margin-bottom: 0em !important;
}

.divwhy-desc4,
.divwhy-desc_1 {
  min-width: 358px !important;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13.02px;
  color: #6b6b6b;
  /* margin: 15px 0px; */
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 23.257px;
  margin-bottom: 0em !important;
}

.spanwhy-metric,
.spanwhy-metric4 {
  position: relative;
  border-radius: 100.16px;
  background-color: rgba(255, 122, 26, 0.07);
  border: 1px solid rgba(255, 122, 26, 0.2);
  display: inline-flex;
  align-items: center;
  padding: 5px 13px;
  flex-shrink: 0;
  font-size: 11.02px;
  color: #ff7a1a;
  font-family: Montserrat;
  margin-top: auto;
  overflow: visible;
  box-sizing: border-box;
  white-space: normal;
  font-weight: 700;
  /* margin-top: 0px; */
}

.divider_1 {
  width: 100%;
  height: 1px;
  position: relative;
  background: #282828;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0;
}

.divider_2 {
  display: none;
}

.contact-section-anchor {
  scroll-margin-top: 100px;
  display: block;
  width: 100%;
  height: 0;
  visibility: hidden;
}

.partner-block {
  scroll-margin-top: 100px;
  flex-direction: column;
  width: 1302px;
  max-width: 100%;
  min-height: 800px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding: 45.6px 0px 58.2px;
}


.partner-block:nth-last-child(3) {
  position: relative;
}

.partner-block:nth-last-child(3)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -500px;
  /* 向左超出 */
  right: -500px;
  /* 向右超出 */
  margin: 34.5px 0px;
  height: 2px;
  background: var(--color-grey-82, #D0D0D0);
}

.partner-divider {
  width: 1920px;
  height: 2px;
  background: var(--color-grey-82, #D0D0D0);
  /* margin-bottom: 40px; */
  /* position: absolute; */
}

.divpartner-hdr {
  width: 1302px;
  max-width: 100%;
  min-height: 360px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
}

.div21 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}

.divp-badge {
  border-radius: 100px;
  background-color: rgba(255, 122, 26, 0.07);
  border: 1px solid rgba(255, 122, 26, 0.2);
  display: flex;
  align-items: center;
  padding: 5px 13px 5px 7px;
  gap: 7px;
  color: #ff7a1a;
}

.divp-badge-dot {
  height: 6px;
  width: 6px;
  position: relative;
  border-radius: 3px;
  background-color: #ff7a1a;
}

.h2p-name {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 62px;
  font-family: Cormorant Garamond;
  margin-bottom: 0em !important;
}

.theater-of-digital-container {
  align-self: stretch;
  position: relative;
  letter-spacing: -1.5px;
  line-height: 65px;
  text-align: start;
  font-family: "Cormorant Garamond";
  font-weight: 300;
  color: #0a0a0a;
}

.pp-desc {
  width: 605px !important;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px 0px 0px;
  font-size: 15px;
  color: #6b6b6b;
  min-height: auto;
  height: auto;
}

.agibot-is-the {
  align-self: stretch;
  position: relative;
  line-height: 27px;
  text-align: start;
  font-family: Montserrat;
  font-weight: 400;
  color: #6b6b6b;
}

.divp-tags {
  width: 120%;
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 4px 0px 0px;
  gap: 8px;
  font-size: 11px;
  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #0a0a0a;
}

.spanp-tag {
  align-self: stretch;
  border-radius: 100px;
  background-color: #f3f3f3;
  border: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 13px;
  font-size: 11px;
  font-weight: 600;
}

.background-image {
  display: flex;
  width: 612px;
  height: 360px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.05), 0 4px 32px 0 rgba(0, 0, 0, 0.04);
  object-fit: cover;
}

.background-image_1 {
  // display: none;
}

.event-card {
  min-height: 281px;
  max-height: 350px;
  height: 100%;
  border-radius: 14.7px;
  background-color: #fff;
  border: 0.8px solid rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.09);
}

.event-card-inner {
  max-height: 349px;
  min-height: 280px;
  height: 100%;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}

.divev-vis-parent {
  position: relative;
  width: 100%;
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.divev-vis {
  background: linear-gradient(125deg, #f3f3f3 0%, #e8e8e8 100%);
  width: 100%;
  height: 171px;
  overflow: hidden;
  isolation: isolate;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.in-store-wrapper {
  margin-top: 14.7px;
  width: auto;
  border-radius: 18px;
  background-color: #fff;
  z-index: 0;
  flex-shrink: 0;
}

.in-store-showcase {
  position: absolute;
  top: 197.32px;
  left: 17.02px;
  font-size: 13.93px;
  letter-spacing: -0.23px;
  line-height: 16.71px;
  font-weight: 800;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  color: #0A0A0A;
}

.the-x2-ultra {
  color: #6b6b6b;
  position: absolute;
  top: 216.32px;
  left: -29px;
  font-size: 12px;
  transform: scale(0.8);
  line-height: 15.47px;
  font-weight: 300;
  text-align: start;
  min-width: 477px !important;
  font-family: Montserrat;
  width: fit-content;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  flex-shrink: 0;
}

.divsection-lbl3 {
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 10px;
}

.before {
  height: 1.5px;
  width: 22px;
  position: relative;
  background-color: #ff7a1a;
}

.h2contact-ttl {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 0px 0px;
  margin-top: -0.8px;
  position: relative;
  font-size: 54px;
  color: #0a0a0a;
  font-family: Cormorant Garamond;
}

.this-isnt-a-container {
  align-self: stretch;
  position: relative;
  letter-spacing: -1px;
  line-height: 58.32px;
  text-align: start;
}

.pcontact-desc {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18.1px 0px 30.8px;
  margin-top: -0.8px;
  position: relative;
  font-size: 15px;
  color: #6b6b6b;
}

.mangobot-offers-partnership {
  align-self: stretch;
  position: relative;
  line-height: 26.7px;
  text-align: start;
}

.whatsapp-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #25d366;
  border: none;
  font-size: 13px;
  z-index: 1;
  font-family: Montserrat;
  height: 44px !important;
  gap: 9px;
  padding: 0 26px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.whatsapp-btn:active {
  transform: scale(0.98);
}

.whatsapp-btn:hover {
  background-color: #1ebe5a;
  transform: scale(1.03);
}

.whatsapp-btn .component-7 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  color: #fff;
}

.whatsapp-btn .text {
  color: #fff;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.divcontact-in {
  width: 1280px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 74px 0px;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  gap: 90px;
  max-width: 1280px;
  flex-shrink: 0;
  font-size: 11px;
  color: #ff7a1a;
}

.div26 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 0;
}

.divform-card {
  flex: 0.8555;
  border-radius: 20px;
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 42px;
  gap: 13px;
  z-index: 2;
  font-size: 12px;
  color: #0a0a0a;
  font-family: Montserrat;
}

.hero-br {
  display: block;
  content: "";
  height: 0;
}

//媒体查询
@media (max-width: 767px) {
  .frame {
    display: flex;
    width: 100vw; // 440/440*100
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-br {
    display: none !important;
  }

  .sectionpp-hero {
    display: flex;
    height: 105.682vw; // 465/440*100
    min-height: 79.318vw; // 349/440*100
    padding: 27.273vw 3.147vw 25vw 3.147vw; // 120, 13.849, 110, 13.849
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.818vw; // 8/440*100
    align-self: stretch;
    background-image: url("../../assets/imgs/Frame-bg3.jpg");
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;

    .diveyebrowmargin {
      padding-bottom: 0px;
    }

    .diveyebrow {
      display: flex;
      padding: 0.472vw 1.259vw 0.472vw 0.63vw; // 2.077, 5.54, 2.077, 2.77
      align-items: center;
      gap: 0.63vw; // 2.77/440*100
      border-radius: 7.869vw; // 34.623/440*100
      border: 0.079vw solid var(--color-orange-5520, rgba(255, 122, 26, 0.20)); // 0.346
      background: var(--color-orange-557, rgba(255, 122, 26, 0.07));
      margin-bottom: 2.5vw; // 11/440*100

      .global-partner-program {
        text-align: center;
        font-family: Montserrat;
        font-size: 2.273vw; // 10/440*100
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.118vw; // 0.519/440*100
        text-transform: uppercase;
      }

      .diveyebrow-d {
        width: 0.551vw; // 2.424/440*100
        height: 0.551vw;
        border-radius: 0.275vw; // 1.212/440*100
      }
    }

    .low-cost-entry-text {
      font-size: 7.273vw; // 32/440*100
      font-style: normal;
      font-weight: 400;
      line-height: 8.508vw; // 37.434/440*100
      letter-spacing: -0.197vw; // -0.866/440*100
    }

    .high-impact-results {

      .high,
      .impact-results_1 {
        font-size: 9.091vw; // 40/440*100
        font-style: italic;
        font-weight: 300;
        line-height: 8.508vw; // 37.434/440*100
        letter-spacing: -0.197vw;
      }
    }

    .mangobot-channel-partners {
      margin-top: 0.455vw; // 2/440*100
      width: 80vw; // 352/440*100
      font-size: 3.182vw; // 14/440*100
      font-style: normal;
      font-weight: 300;
      line-height: 5.227vw; // 23/440*100
      text-align: center;
    }

    .divpp-hero-btns {
      margin-top: 6.364vw; // 28/440*100
      gap: 3.182vw; // 14/440*100

      .hero-btn {
        height: 7.727vw; // 34/440*100
        padding: 0.429vw 3.577vw; // 1.889, 15.741
        justify-content: center;
        align-items: center;
        gap: 1.431vw; // 6.296/440*100
        border-radius: 7.155vw; // 31.481/440*100
        text-align: center;
        font-size: 2.862vw; // 12.593/440*100
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.043vw; // -0.189/440*100
      }

      .hero-btn-outline {
        border: 0.143vw solid #CECECE; // 0.63/440*100
        background: #FFF;
        height: 7.727vw; // 34/440*100
        padding: 0.429vw 3.577vw;
        justify-content: center;
        align-items: center;
        gap: 1.431vw;
        border-radius: 7.155vw;
        text-align: center;
        font-size: 2.862vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.043vw;
      }
    }

    .divpp-hero-img {
      z-index: 0;
      position: absolute;
      top: 67.045vw; // 295/440*100
      left: 0;
      width: 100%;
      height: 30%;
      flex-shrink: 0;
      background-image: url("../../assets/imgs/Frame-bg1.png");
      background-repeat: no-repeat;
    }
  }

  .divpp-hero-imgmargin {
    height: 10.227vw; // 45/440*100
    width: 100%;
  }

  .divimpact-bar {
    display: flex;
    width: 100vw;
    max-width: 130.745vw; // 575.281/440*100
    height: 16.591vw; // 73/440*100
    justify-content: center;
    align-items: flex-start;
    gap: 0.102vw; // 0.449/440*100
    padding: 0px;

    .divimpact-in {
      max-width: 100%;
      height: 100%;

      .divistat {
        display: flex;
        width: 25.128vw; // 110.562/440*100
        height: 100%;
        padding: 3.473vw 3.064vw; // 15.281, 13.483
        flex-direction: column;
        align-items: flex-start;
        gap: 0px;
        flex-shrink: 0;
        align-self: stretch;

        .divistat-n {
          font-size: 5.107vw; // 22.472/440*100
          font-style: normal;
          font-weight: 300;
          line-height: 5.107vw; // 22.472/440*100
          height: 5.227vw; // 23/440*100
        }

        .divistat-l {
          height: 3.864vw; // 17/440*100

          .aed-net-profitday {
            color: #fff;
            height: 100%;
            font-size: 1.226vw; // 5.393/440*100
            font-style: normal;
            font-weight: 400;
            line-height: 1.839vw; // 8.09/440*100
            letter-spacing: 0.031vw; // 0.135/440*100
          }
        }
      }
    }
  }

  .divtiers-hdr-parent {
    display: flex;
    width: 100vw;
    padding: 11.136vw 7.5vw 33.636vw; // 49, 33, 148
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16.364vw; // 72/440*100

    .divistat-n {
      .partnership-models {
        font-size: 1.43vw; // 6.292/440*100
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.325vw; // 1.43/440*100
        text-transform: uppercase;
      }

      .choose-how-you-container {
        font-size: 7.28vw; // 32.032/440*100
        font-style: italic;
        font-weight: 300;
        line-height: 7.863vw; // 34.595/440*100
        letter-spacing: -0.13vw; // -0.572/440*100
      }

      .ptiers-sub {
        width: 56.364vw; // 248/440*100
        margin-top: 2.273vw; // 10/440*100

        .from-profit-sharing {
          color: #E8E8E8;
          width: 56.364vw;
          font-size: 1.95vw; // 8.58/440*100
          font-style: normal;
          font-weight: 400;
          line-height: 3.413vw; // 15.015/440*100
        }
      }
    }
  }

  .tier-cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4.545vw; // 20/440*100

    .tier-card {
      display: flex;
      height: 60.485vw; // 266.132/440*100
      width: 85vw; // 374/440*100
      padding: 7.5vw 5.455vw; // 33, 24
      flex-direction: column;
      align-items: flex-start;
      gap: 1.364vw; // 6/440*100
      align-self: stretch;
      border-radius: 1.311vw; // 5.77/440*100
      border: 0.069vw solid var(--color-grey-11, #1D1D1D); // 0.304
      background: var(--color-grey-11, #1D1D1D);

      .option-01 {
        font-size: 2.273vw; // 10/440*100
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.138vw; // 0.607/440*100
      }

      .profit-sharing {
        font-size: 3.636vw; // 16/440*100
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: -0.021vw; // -0.091/440*100
      }

      .divtier-tag,
      .divtier-tag2 {
        font-size: 2.273vw; // 10/440*100
        font-style: normal;
        font-weight: 400;
        line-height: 3.636vw; // 16/440*100
        color: var(--Boulder, var(--color-grey-73, #BBB));
      }

      .div-divider-line {
        width: 100%;
        display: flex;
        height: 3.636vw; // 16/440*100
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 2.273vw; // 10/440*100
        flex-shrink: 0;

        .custom-divider-line {
          border: 0px solid #757575;
          width: 100%;
          height: 0.227vw; // 1/440*100
          position: relative;
          background: #757575;
          overflow: hidden;
          flex-shrink: 0;
          margin: 0;
        }
      }

      .ultier-feats {
        gap: 1.818vw; // 8/440*100
        margin-left: -2.273vw; // -10/440*100

        li {
          font-size: 1.818vw; // 8/440*100
          font-style: normal;
          font-weight: var(--font-weight-400, 400);
          line-height: 2.273vw; // 10/440*100
          width: 100%;

          .arrow {
            margin-right: 0.909vw; // 4/440*100
            font-size: 2.273vw; // 10/440*100
            font-style: normal;
            font-weight: var(--font-weight-400, 400);
            line-height: 1.346vw; // 5.922/440*100
          }
        }
      }

      .tier-btn_1,
      .tier-btn {
        margin-top: 3.182vw; // 14/440*100
        display: flex;
        height: 5.682vw; // 25/440*100
        padding: 0.828vw; // 3.644/440*100
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        align-self: stretch;
        border-radius: 0.759vw; // 3.34/440*100
        background: #FF7A1A;
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 2.273vw; // 10/440*100
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .most-popular_1 {
        position: absolute;
        left: 83%;
        top: 12%;
        display: flex;
        width: 18.098vw; // 79.633/440*100
        height: 3.439vw; // 15.132/440*100
        // padding: 0.688vw 2.752vw; // 3.026, 12.106
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 17.196vw; // 75.661/440*100
        background: var(--color-orange-55, #FF7A1A);
        font-size: 1.72vw; // 7.566/440*100
        font-style: normal;
        font-weight: 700;
        line-height: 3.409vw; // 15/440*100
      }

      .most-popular {
        position: absolute;
        left: 83%;
        top: 12%;
        display: flex;
        width: 18.098vw;
        height: 3.439vw;
        padding: 0.688vw 2.752vw;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 17.196vw;
      }
    }
  }

  .divwhy-hdr-parent {
    width: 100vw;
    padding-top: 0px;

    .custom-divider {
      border: 0px solid #D0D0D0;
      width: 100%;
      height: 0.227vw; // 1/440*100
      position: relative;
      background: #D0D0D0;
      overflow: hidden;
      flex-shrink: 0;
      margin: 0;
    }

    .divwhy-hdr {
      display: flex;
      width: 100vw;
      height: 58.409vw; // 257/440*100
      padding: 14.705vw 5.455vw; // 64.7, 24
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.818vw; // 8/440*100

      .partnership-models {
        font-size: 2.273vw; // 10/440*100
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.568vw; // 2.5/440*100
        text-transform: uppercase;
      }

      .your-brand-our-container {
        span {
          font-size: 6.818vw; // 30/440*100
          font-style: normal;
          font-weight: 300;
          line-height: 8.864vw; // 39/440*100
          letter-spacing: -0.273vw; // -1.2/440*100
        }

        .everyone-notices {
          font-size: 8.182vw; // 36/440*100
          font-style: italic;
          font-weight: 300;
          line-height: 8.864vw; // 39/440*100
          letter-spacing: -0.273vw;
        }
      }

      .pwhy-sub {
        width: 70.682vw; // 311/440*100

        .humanoid-robots-naturally {
          width: 70.682vw;
          color: #6B6B6B;
          text-align: center;
          font-size: 2.273vw; // 10/440*100
          font-style: normal;
          font-weight: 400;
          line-height: 4.091vw; // 18/440*100
        }
      }
    }

    .frame-parent {
      display: flex;
      width: 100vw;
      padding: 0 5.455vw 8.182vw; // 0, 24, 36
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .why-cards-row {
        flex-direction: column;
        width: 90vw; // 396/440*100
        gap: 5.168vw; // 22.74/440*100

        .why-card {
          padding: 8.842vw 7.548vw; // 38.904, 33.211

          &:first-child {
            margin-top: 5.168vw;
          }
        }

        .why-card_1 {
          padding: 8.842vw 7.548vw 3.409vw;
        }

        .why-card_1,
        .why-card {
          display: flex;
          min-width: 90vw;
          height: 64.593vw; // 284.211/440*100
          align-items: flex-start;
          gap: 3.235vw; // 14.233/440*100
          border-radius: 4.313vw; // 18.978/440*100
          border: 0.216vw solid rgba(0, 0, 0, 0.07); // 0.949
          background: #FAFAFA;

          .overlayshadow-icon,
          .overlayshadow-icon4 {
            width: 11.645vw; // 51.24/440*100
            height: 11.645vw;
            flex-shrink: 0;
          }

          .divwhy-ttl-c,
          .divwhy-ttl-c4 {
            font-size: 4.098vw; // 18.029/440*100
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.065vw; // -0.285/440*100
          }

          .divwhy-desc4,
          .divwhy-desc_1 {
            width: 77.045vw; // 339/440*100
            color: #6B6B6B;
            font-family: Montserrat;
            font-size: 2.804vw; // 12.336/440*100
            font-style: normal;
            font-weight: 400;
            line-height: 5.007vw; // 22.033/440*100
          }

          .spanwhy-metric,
          .spanwhy-metric4 {
            display: flex;
            padding: 1.078vw 2.804vw; // 4.744, 12.336
            align-items: flex-start;
            border-radius: 21.566vw; // 94.889/440*100
            border: 0.216vw solid rgba(255, 122, 26, 0.20); // 0.949
            background: rgba(255, 122, 26, 0.07);
            color: #FF7A1A;
            font-family: Montserrat;
            font-size: 2.372vw; // 10.438/440*100
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
      }
    }
  }

  .partners-section {
    display: flex;
    padding: 12.727vw 5.455vw 5.227vw; // 56, 24, 23
    flex-direction: column;
    align-items: center;
    gap: 2.273vw; // 10/440*100
    align-self: stretch;
    .contact-section-anchor {
    scroll-margin-top: -100vw; 
  }
    .partner-block {
      width: 100%;
      max-width: none;
      min-height: none;
      display: flex;
      flex-direction: column;
      padding-top: 0px;
      position: relative;

      .partner-divider_2 {
        width: 120%;
        height: 0.227vw; // 1/440*100
        position: relative;
        left: -5.455vw; // -24/440*100
        right: -5.455vw;
        background: #D0D0D0;
        overflow: hidden;
        flex-shrink: 0;
        margin: 12.841vw 0px 7.614vw; // 56.5, 33.5
      }

      &::after {
        display: none;
      }

      .divpartner-hdr {
        display: flex;
        flex-direction: column;
        width: 100%;

        .div21 {
          width: 100%;
          gap: 2.273vw; // 10/440*100

          .divp-badge {
            display: flex;
            padding: 0.472vw 1.259vw 0.472vw 0.63vw;
            align-items: center;
            gap: 0.63vw;
            border-radius: 7.869vw;
            border: 0.079vw solid var(--color-orange-5520, rgba(255, 122, 26, 0.20));
            background: var(--color-orange-557, rgba(255, 122, 26, 0.07));
            height: 3.636vw; // 16/440*100

            .divp-badge-dot {
              width: 0.551vw;
              height: 0.551vw;
              border-radius: 0.275vw;
              background: var(--color-orange-55, #FF7A1A);
            }

            .global-partner-program {
              font-size: 2.273vw;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.118vw;
              text-transform: uppercase;
            }
          }

          .h2p-name {
            height: 8.636vw; // 38/440*100

            .theater-of-digital-container {
              color: #010101;
              font-family: var(--font-family-Font-2, "Cormorant Garamond");
              font-size: 9.091vw;
              font-style: normal;
              font-weight: 400;
              line-height: 8.508vw;
              letter-spacing: -0.197vw;
            }
          }

          .pp-desc {
            width: 89.091vw !important; // 392/440*100
            margin-top: 1.682vw; // 7.4/440*100

            .agibot-is-the {
              color: #6B6B6B;
              font-family: Montserrat;
              font-size: 3.182vw;
              font-style: normal;
              font-weight: 300;
              line-height: 5.227vw;
              white-space: pre-line;
            }
          }

          .divp-tags {
            margin-top: 2.045vw; // 9/440*100
            gap: 1.136vw; // 5/440*100

            .spanp-tag {
              display: flex;
              height: 3.577vw; // 15.741/440*100
              padding: 0.715vw 1.86vw; // 3.148, 8.185
              align-items: center;
              justify-content: center;
              border-radius: 14.31vw; // 62.963/440*100
              border: 0.143vw solid var(--color-black-7, rgba(0, 0, 0, 0.07));
              background: var(--color-grey-95, #F3F3F3);
              font-size: 1.574vw; // 6.926/440*100
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              letter-spacing: 0.043vw; // 0.189/440*100
            }
          }
        }

        .background-image {
          display: none;
        }
      }

      .event-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        gap: 2.273vw 4.545vw; // 10, 20
        justify-content: center;
        align-items: stretch;
        width: 100%;
        margin-top: 4.318vw; // 19/440*100

        .event-card_1 {
          display: block;
        }

        .background-image_1,
        .event-card_1,
        .event-card {
          width: 42.273vw !important; // 186/440*100
          height: auto !important;
          min-height: 46.364vw; // 204/440*100
          max-width: none;
          box-shadow: 0 0.202vw 1.218vw 0 rgba(0, 0, 0, 0.05), 0 0.811vw 4.059vw 0 rgba(0, 0, 0, 0.09);
          border-radius: 1.928vw; // 8.482/440*100
          flex-shrink: 0;

          img {
            display: block;
            flex-shrink: 0;
            background-position: -0.055vw 10.725vw; // -0.242, 47.189
            background-size: 100.13% 53.681%;
            background-repeat: no-repeat;
          }

          .event-card-inner {
            max-height: none;
            min-height: none;

            .divev-vis-parent {
              .divev-vis {
                display: flex;
                height: 20.291vw; // 89.281/440*100
                flex-shrink: 0;
                align-self: stretch;

                .in-store-wrapper {
                  margin-top: 0px;

                  .most-popular {
                    display: flex;
                    padding: 0.406vw 1.015vw; // 1.786, 4.464
                    flex-direction: column;
                    align-items: flex-start;
                    border-radius: 10.146vw; // 44.641/440*100
                    border: 0.101vw solid var(--color-black-7, rgba(0, 0, 0, 0.07));
                    background: var(--color-white-90, rgba(255, 255, 255, 0.90));
                    backdrop-filter: blur(0.507vw);
                    font-size: 1.364vw; // 6/440*100
                    font-style: normal;
                    font-weight: var(--font-weight-700, 700);
                    line-height: normal;
                    transform: scale(1);
                    margin: 1.42vw 0 0 1.42vw; // 6.25
                  }
                }
              }

              .in-store-showcase {
                width: 36.364vw; // 160/440*100
                text-align: left;
                position: relative;
                top: 0;
                left: 0;
                margin-top: 3.182vw; // 14/440*100
                margin-left: 2.273vw; // 10/440*100
                color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
                font-family: Montserrat;
                font-size: 1.826vw; // 8.035/440*100
                font-style: normal;
                font-weight: var(--font-weight-800, 800);
                line-height: normal;
                letter-spacing: -0.03vw; // -0.134/440*100
              }

              .the-x2-ultra {
                position: relative;
                top: 0;
                left: 0;
                margin-left: 2.273vw;
                margin-top: 1.364vw; // 6/440*100
                width: 37.5vw; // 165/440*100
                transform: scale(1);
                -webkit-line-clamp: 7;
                color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B));
                font-size: 1.818vw; // 8/440*100
                font-style: normal;
                font-weight: 300;
                line-height: normal;
              }
            }
          }
        }
      }
    }
  }

  .divider_2 {
    display: block;
    width: 100%;
    height: 0.227vw; // 1/440*100
    position: relative;
    background: #D0D0D0;
    overflow: hidden;
    flex-shrink: 0;
    margin: 0;
  }

  .divcontact-in {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: none;
    padding: 20.455vw 5vw 15.682vw; // 90, 22, 69
    gap: 9.773vw; // 43/440*100

    .div26 {
      padding: 0 5.909vw; // 26/440*100

      .h2contact-ttl {
        margin-top: 2.273vw; // 10/440*100
      }

      .divsection-lbl3 {
        .before {
          width: 3.673vw; // 16.162/440*100
          height: 0.25vw; // 1.102/440*100
        }

        .partnership-models {
          color: var(--Pumpkin, var(--color-orange-55, #FF7A1A));
          font-family: Montserrat;
          font-size: 1.837vw; // 8.081/440*100
          font-style: normal;
          font-weight: var(--font-weight-600, 600);
          line-height: normal;
          letter-spacing: 0.417vw; // 1.837/440*100
          text-transform: uppercase;
        }
      }

      .impact-results {
        font-size: 7.273vw; // 32/440*100
        font-style: normal;
        font-weight: 300;
        line-height: 9.737vw; // 42.844/440*100
        letter-spacing: -0.167vw; // -0.735/440*100
        margin-top: 2.5vw; // 11/440*100
      }

      .grow-with-us {
        font-size: 9.091vw; // 40/440*100
        font-style: italic;
        font-weight: 300;
        line-height: 9.737vw;
        letter-spacing: -0.167vw;
      }

      .mangobot-offers-partnership {
        margin-top: 2.893vw; // 12.73/440*100
        color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B));
        font-family: Montserrat;
        font-size: 3.182vw; // 14/440*100
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: 4.458vw; // 19.615/440*100
      }

      .whatsapp-btn {
        width: 35vw; // 154/440*100
        height: 7.273vw !important; // 32/440*100
        margin-left: 27%;
        margin-top: 5.136vw; // 22.6/440*100
        padding: 2.17vw 4.341vw; // 9.55, 19.1
        gap: 1.503vw; // 6.612/440*100
        border-radius: 16.696vw; // 73.463/440*100
        background: #25D366;
        text-align: center;
        transform: scale(1);

        .component-7,
        .vector-icon {
          width: 2.991vw; // 13.161/440*100
          height: 3.005vw; // 13.223/440*100
        }

        .text {
          color: var(--White, var(--color-white-solid, #FFF));
          font-family: Montserrat;
          font-size: 2.17vw; // 9.55/440*100
          font-style: normal;
          font-weight: var(--font-weight-700, 700);
          line-height: normal;
        }
      }
    }

    .divform-card {
      width: 90vw; // 396/440*100
      height: 115.909vw; // 510/440*100
      display: flex;
      padding: 7.012vw; // 30.854/440*100
      flex-direction: column;
      align-items: flex-start;
      gap: 4.545vw !important; // 20/440*100
      align-self: stretch;
      border-radius: 3.339vw; // 14.693/440*100
      border: 0.167vw solid var(--color-black-7, rgba(0, 0, 0, 0.07)); // 0.735
      background: var(--color-grey-98, #FAFAFA);
      flex: auto;

      .divform-g {
        gap: 0.909vw; // 4/440*100
      }

      .divform-g3 {
        gap: 0.909vw;
      }

      .form-row {
        gap: 2.159vw; // 9.5/440*100
      }

      .form-item {
        margin-bottom: 4.545vw; // 20/440*100
        width: 100%;
      }

      .form-label {
        color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
        font-family: Montserrat;
        font-size: 2.727vw; // 12/440*100
        font-style: normal;
        font-weight: var(--font-weight-600, 600);
        line-height: normal;
        letter-spacing: 0.083vw; // 0.367/440*100
        margin-bottom: 1vw; // 4.4/440*100
      }

      .custom-input,
      .custom-select,
      .custom-textarea {
        height: 7.045vw; // 31/440*100
        border-radius: 1.503vw; // 6.612/440*100
        padding: 2.004vw 2.504vw; // 8.816, 11.019
        color: var(--Boulder, var(--color-grey-46, #757575));
        font-family: Montserrat;
        font-size: 2.273vw; // 10/440*100
        font-style: normal;
        font-weight: var(--font-weight-400, 400);
        line-height: normal;
      }

      .custom-textarea::placeholder,
      .custom-input::placeholder {
        color: #757575;
        font-size: 2.273vw;
        font-weight: 400;
        line-height: 2.838vw; // 12.489/440*100
      }

      .custom-select::placeholder {
        font-size: 2.273vw;
        font-weight: 400;
        line-height: 2.838vw;
        color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
      }

      // .custom-select {
      //   font-size: 2.273vw !important;
      //   font-weight: 400;
      //   appearance: none;
      //   -webkit-appearance: none;
      //   -moz-appearance: none;
      //   background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      //   background-repeat: no-repeat;
      //   background-position: right 4.545vw center;
      //   background-size: 3.636vw;
      //   cursor: pointer;

      //   appearance: none;
      //   -webkit-appearance: none;
      //   -moz-appearance: none;
      //   max-width: 100%;
      // }

      // .placeholder-option {
      //   font-size: 2.273vw;
      //   font-weight: 400;
      // }

      .custom-select-trigger {
        height: 7.045vw;
        border-radius: 1.503vw;
        padding: 2.004vw 2.504vw;
        font-size: 2.273vw;
        min-height: 7.045vw;
        color: #0A0A0A;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        line-height: 2.838vw;

        .placeholder {
          color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
          font-family: Montserrat;
          font-size: 2.273vw;
          font-style: normal;
          font-weight: var(--font-weight-400, 400);
          line-height: 3.864vw; // 17px ÷ 440 × 100 = 3.864vw
        }
      }

      .dropdown-arrow {
        width: 3.636vw;
        height: 3.636vw;
      }

      .custom-select-dropdown {
        border-radius: 1.503vw;
        max-height: 56.818vw; // 250px ÷ 440 × 100 = 56.818vw
      }

      .custom-select-option {
        padding: 2vw 2vw;
        font-size: 2.72vw; // 12px ÷ 440 × 100 = 2.273vw
      }

      .custom-textarea {
        height: 19.318vw; // 85/440*100
        padding: 2.004vw 2.504vw;
      }

      .error-message {
        position: absolute;
        font-size: 2.273vw;
        font-weight: 400;
      }

      .submit-btn {
        border-radius: 1.837vw; // 8.081/440*100
        padding: 2.004vw; // 8.816/440*100
        height: 7.864vw; // 34.6/440*100
        font-size: 3.182vw; // 14/440*100
        font-style: normal;
        font-weight: var(--font-weight-600, 600);
        line-height: normal;
      }
    }
  }

  .custom-toast {
    position: fixed;
    top: 4.545vw; // 20/440*100
    left: 50%;
    transform: translateX(-50%);
    padding: 2.727vw 5.455vw; // 12, 24
    border-radius: 1.818vw; // 8/440*100
    font-size: 2.273vw;
    font-family: Montserrat;
    z-index: 9999;
    animation: slideDown 0.3s ease;
    white-space: nowrap;
  }

  .custom-toast.success {
    background-color: #52c41a;
    color: white;
  }

  .custom-toast.error {
    background-color: #ff4d4f;
    color: white;
  }
}
</style>