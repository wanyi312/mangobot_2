<template>
  <div class="mangobot-about">
    <!-- Hero 区域 -->
    <section class="section-hero">
      <h1 class="hero-title">
        {{ t("product.about.hero.title") }}<br />
        <i class="hero-title-italic">{{ t("product.about.hero.titleItalic") }}</i>
      </h1>
      <p class="hero-subtitle">{{ t("product.about.hero.subtitle") }}</p>
      <div class="hero-btns">
        <button class="btn-primary" @click="handleClickFamily">{{
          t("product.about.hero.btnFamily")
        }}</button>
        <button class="btn-secondary" @click="handleClickTouch">{{
          t("product.about.hero.btnTouch")
        }}</button>
      </div>
      <div class="divpp-hero-img"></div>
    </section>

    <!-- Our Story -->
    <section class="section-story">
      <div class="story-inner">
        <div class="story-left">
          <div class="section-label">
            <span class="label-line"></span>
            <span class="label-text">{{ t("product.about.story.label") }}</span>
          </div>
          <h2 class="story-title">
            {{ t("product.about.story.title") }}<br />
            <i class="story-title-italic">{{ t("product.about.story.titleItalic") }}</i>
          </h2>
        </div>
        <div class="story-right">
          <p class="story-p">
            {{ t("product.about.story.paragraph1") }}
            <strong class="story-highlight">
              {{ t("product.about.story.paragraph1Highlight") }}
            </strong>
          </p>
          <p class="story-p">{{ t("product.about.story.paragraph2") }}</p>
          <p class="story-p" v-html="t('product.about.story.paragraph3')"></p>
        </div>
      </div>
    </section>

    <!-- Our Vision -->
    <section class="section-mission">
      <div class="mission-glow"></div>
      <div class="mission-inner">
        <div class="section-label-center">
          <span class="label-text">{{ t("product.about.vision.label") }}</span>
        </div>
        <h2 class="mission-title">
          {{ t("product.about.vision.title") }}<span class="text-orange">{{ t("product.about.vision.titleItalic")
          }}</span>
          <span class="hero-br"></span>
          <span class="text-orange">{{ t("product.about.vision.titleOrange") }}</span>
        </h2>
        <p class="mission-desc_1">{{ t("product.about.vision.desc") }}</p>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-stats">
      <div v-for="(stat, index) in stats" :key="index" class="stat-group">
        <div class="stat-num">
          <span>{{ stat.num }}</span>
          <span v-if="stat.num === '5' || stat.num === '6'" class="stat-plus">+</span>
        </div>
        <div class="stat-label">{{ stat.label }}</div>
        <div v-if="index < stats.length - 1" class="stat-divider"></div>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="section-mission">
      <div class="mission-glow"></div>
      <div class="mission-inner">
        <div class="section-label-center">
          <span class="label-text">{{ t("product.about.mission.label") }}</span>
        </div>
        <h2 class="mission-title">
          <span class="text-light">{{ t("product.about.mission.title") }}</span>
          <i class="text-orange">{{ t("product.about.mission.titleOrange") }}</i>
        </h2>
        <p class="mission-desc">{{ t("product.about.mission.desc") }}
          <br />
          {{ t("product.about.mission.desc_1") }}
        </p>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section-values">
      <div class="values-inner">
        <div class="values-header">
          <div class="section-label-center">
            <span class="label-text">{{ t("product.about.values.label") }}</span>
          </div>
          <h2 class="values-title">
            <span class="text-dark-light">{{ t("product.about.values.title") }}</span>
            <i class="text-orange">{{ t("product.about.values.titleOrange") }}</i>
          </h2>
          <p class="values-subtitle">{{ t("product.about.values.subtitle") }}
            <br />
            {{ t("product.about.values.subtitle_1") }}
            <br />
            {{ t("product.about.values.subtitle_2") }}
          </p>
        </div>
        <div class="values-grid">
          <div v-for="(value, index) in coreValues" :key="index" class="value-card"
            :class="{ 'is-active': activeValueIndex === index }">
            <div class="value-top-line"></div>
            <span class="value-num">{{
              String(index + 1).padStart(2, "0")
            }}</span>
            <h3 class="value-title">
              {{ value.title }}
            </h3>
            <p class="value-desc" v-html="value.desc">
            </p>
            <div v-if="index < coreValues.length - 1" class="stat-divider"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <!-- <section class="section-team" id="section-team">
      <div class="team-inner">
        <div class="team-header">
          <div class="team-header-left">
            <div class="section-label">
              <span class="label-line"></span>
              <span class="label-text">{{ t("product.about.team.label") }}</span>
            </div>
            <h2 class="team-title">
              <span class="text-dark-light">{{ t("product.about.team.title") }}</span>
              <i class="text-orange">{{ t("product.about.team.titleOrange") }}</i>
            </h2>
          </div>
          <div class="team-header-right">
            <p class="team-desc" v-html="t('product.about.team.desc')"></p>
          </div>
        </div>
        <div class="team-grid">
          <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
            <div class="team-avatar">
              <div class="avatar-placeholder">
                <img class="avatar-icon" src="../../assets/imgs/About-avatar.png" alt="" />
              </div>
            </div>
            <div class="team-info">
              <b class="team-name">{{ member.name }}</b>
              <b class="team-role">{{ member.role }}</b>
              <p class="team-bio">{{ member.bio }}</p>
              <div class="team-badge">
                <span class="badge-dot"></span>
                <b class="badge-label">{{ member.badge }}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 图片占位区域 -->
    <!-- <div class="section-image-placeholder">
      <img class="placeholder-image" src="../../assets/imgs/About-symbols.svg" alt="" />
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const router = useRouter();
// 统计数据
const stats = computed(() => [
  { num: "2023", label: t("product.about.stats.0.label") },

  { num: "6", label: t("product.about.stats.1.label") },
  { num: "5", label: t("product.about.stats.2.label") },
  { num: "Worldwide", label: t("product.about.stats.3.label") },
]);

// 核心价值观
const coreValues = computed(() => [
  {
    title: t("product.about.values.list.0.title"),
    desc: t("product.about.values.list.0.desc"),
  },
  {
    title: t("product.about.values.list.1.title"),
    desc: t("product.about.values.list.1.desc"),
  },
  {
    title: t("product.about.values.list.2.title"),
    desc: t("product.about.values.list.2.desc"),
  },
]);

// 团队成员
const teamMembers = computed(() => [
  {
    name: t("product.about.team.members.0.name"),
    role: t("product.about.team.members.0.role"),
    bio: t("product.about.team.members.0.bio"),
    badge: t("product.about.team.members.0.badge"),
  },
  {
    name: t("product.about.team.members.1.name"),
    role: t("product.about.team.members.1.role"),
    bio: t("product.about.team.members.1.bio"),
    badge: t("product.about.team.members.1.badge"),
  },
  {
    name: t("product.about.team.members.2.name"),
    role: t("product.about.team.members.2.role"),
    bio: t("product.about.team.members.2.bio"),
    badge: t("product.about.team.members.2.badge"),
  },
  {
    name: t("product.about.team.members.3.name"),
    role: t("product.about.team.members.3.role"),
    bio: t("product.about.team.members.3.bio"),
    badge: t("product.about.team.members.3.badge"),
  },
]);
const activeValueIndex = ref(null);
let observer = null;

const initObserver = () => {
  if (typeof window === 'undefined') return;

  const cards = document.querySelectorAll('.value-card');

  // 配置选项
  const options = {
    root: null,
    threshold: 0.8,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target);
        if (index !== -1) {
          activeValueIndex.value = index;
        }
      }
    });
  }, options);

  cards.forEach((card) => {
    observer.observe(card);
  });
};

onMounted(() => {
  setTimeout(() => {
    initObserver();
  }, 100);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
const handleClickFamily = () => {
  // 使用滚动到指定元素
  const sectionTeam = document.getElementById("section-team");
  if (sectionTeam) {
    sectionTeam.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const handleClickTouch = () => {
  router.push({ name: "ContactUs" });
};

// 页脚数据
</script>

<style scoped lang="less">
/* ===== 全局 ===== */
.mangobot-about {
  width: 100%;
  background-color: #fff;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: #0a0a0a;
  overflow-x: hidden;
}

/* ===== Hero ===== */
.section-hero {
  width: 100%;
  height: 888px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 283px 0px 152px;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  position: relative;
  background-image: url("../../assets/imgs/About-bg2.png");
  background-size: cover;
  background-position: center;
}

.hero-title {
  font-size: 112px;
  font-weight: 400;
  letter-spacing: -2.5px;
  line-height: var(--line-height-114_24, 114.24px);
  /* 102% */
  color: #0a0a0a;
  margin-bottom: 0;
}

.hero-title-italic {
  font-family: Cormorant Garamond;
  font-weight: 300;
  color: #ff7a1a;
  font-style: italic;
  line-height: var(--line-height-114_24, 114.24px);
  letter-spacing: var(--letter-spacing--2_5, -2.5px);
}

.hero-subtitle {
  margin: 21px auto 0;
  color: #6b6b6b;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75;
  max-width: 1015px;
}

.hero-btns {
  display: flex;
  gap: 14px;
  margin-top: 44px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary {
  border-radius: 50px;
  background-color: #000;
  border: none;
  color: #fff;
  padding: 0 25px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.3px;
  font-family: Montserrat;
  white-space: nowrap;
  min-width: fit-content;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #ff7a1a;
  color: #fff;
}

.btn-secondary {
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid #cecece;
  color: #000;
  padding: 0 25px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.3px;
  font-family: "Montserrat";
  white-space: nowrap;
  min-width: fit-content;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #e3e3e3;
  color: #000;
  border-color: #000;
}

/* ===== Our Story ===== */
.section-story {
  width: 100%;
  padding: 130px 320px 115px;
  box-sizing: border-box;
  text-align: left;
}

.story-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.story-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label-line {
  display: inline-block;
  width: 22px;
  height: 1.5px;
  background-color: #ff7a1a;
}

.label-text {
  font-size: 11px;
  color: #ff7a1a;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.story-title {
  font-size: 40px;
  color: #0a0a0a;
  letter-spacing: -0.8px;
  line-height: 1.4;
  margin: 0;
}

.story-title-italic {
  font-family: Cormorant Garamond;
  font-size: 52px;
  font-weight: 300;
  color: #ff7a1a;
  font-style: italic;
}

.story-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 23px;
}

.story-p {
  font-size: 16px;
  color: #6b6b6b;
  line-height: 1.875;
  margin: 0;
}

.story-highlight {
  font-weight: 600;
  color: #0a0a0a;
}

/* ===== Mission / Vision (dark) ===== */
.section-mission {
  width: 100%;
  background-color: #0a0a0a !important;
  padding: 130px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  /* background-image: url("../../assets/imgs/About-bg3.png");
  background-size: cover; */
  /* background-repeat: no-repeat; */
  /* background-position: bottom; */
}

.mission-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(70.71% 70.71% at 50% 50%,
      rgba(255, 122, 26, 0.07),
      rgba(255, 122, 26, 0) 65%);
  pointer-events: none;
}

.mission-inner {
  position: relative;
  z-index: 1;
  /* max-width: 880px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.section-label-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mission-title {
  font-family: Cormorant Garamond;
  font-size: 64px;
  font-weight: 300;
  color: #fff;
  letter-spacing: -1px;
  line-height: 1.06;
  margin: 0;
}

.mission-desc_1 {
  font-size: 17px;
  color: #fafafa;
  line-height: 1.88;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 0em !important;
}

.mission-desc {
  font-size: 17px;
  color: #fafafa;
  line-height: 1.88;
  margin: 80px 0 0;
  font-family: Montserrat;
  font-weight: 400;
}

/* ===== Stats ===== */
.section-stats {
  width: 100%;
  background-color: #fafafa;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 60px;
  box-sizing: border-box;
  position: relative;
  /* background-image: url("../../assets/imgs/About-bg3.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ; */

}

.stat-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 32px;
  gap: 10px;
  flex: 1;
  max-width: 450px;
  position: relative;
}

.stat-num {
  font-family: Cormorant Garamond;
  font-size: 72px;
  font-weight: 300;
  color: #0a0a0a;
  line-height: 1;
}

.stat-plus {
  color: #ff7a1a !important;
  /* 临时加 !important 测试是否被覆盖 */
}

.stat-label {
  font-size: 11px;
  color: #9a9a9a;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
}

.stat-group:last-child .stat-num {
  font-size: 52px;
  font-weight: 300;
  color: #0a0a0a;
  line-height: 1;
}




.stat-divider {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 207px;
  background-color: rgba(0, 0, 0, 0.07);
}

/* ===== Core Values ===== */
.section-values {
  width: 100%;
  background-color: #fff;
  padding: 130px 320px;
  box-sizing: border-box;
}

.values-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 72px;
}

.values-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
}

.values-title {
  font-family: Cormorant Garamond;
  font-size: 64px;
  font-weight: 300;
  color: #0a0a0a;
  letter-spacing: -1px;
  line-height: 1.06;
  margin: 0;
}

.values-subtitle {
  font-size: 16px;
  color: #6b6b6b;
  line-height: 1.75;
  font-family: Montserrat;
  margin: 0;
  max-width: 663px;
}

.values-grid {
  display: flex;
  gap: 2px;
  border-radius: 20px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.07);
}

.value-card {
  flex: 1;
  background-color: #fff;
  padding: 52px 44px 60px;
  position: relative;
  text-align: left;
  min-height: 320px;
}

.value-top-line {
  position: absolute;
  top: 0;
  left: 44px;
  right: 44px;
  height: 2px;
  background: linear-gradient(90deg, #ff7a1a, rgba(255, 122, 26, 0));
  opacity: 0;
  transition: opacity 0.3s;
}

.value-card:hover .value-top-line {
  opacity: 1;
}

.value-card:hover {
  background: var(--color-grey-98, #fafafa);
}

.value-num {
  font-size: 11px;
  color: #ff7a1a;
  letter-spacing: 2.5px;
  font-weight: 400;
  display: block;
  margin-bottom: 16px;
}

.value-title {
  font-size: 22px;
  font-weight: 800;
  color: #0a0a0a;
  letter-spacing: -0.4px;
  margin-bottom: 16px;
}

.value-desc {
  font-size: 14.5px;
  color: #6b6b6b;
  line-height: 1.78;
  margin: 0;
}

.value-card:nth-of-type(1) .value-desc {
  width: 301px;
}

.value-card:nth-of-type(2) .value-desc {
  width: 345px;
  margin-top: 38px;
}

.value-card:nth-of-type(3) .value-desc {
  width: 345px;
  margin-top: 38px;
}

/* ===== Team ===== */
.section-team {
  width: 100%;
  background-color: #fafafa;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  padding: 130px 320px;
  box-sizing: border-box;
  text-align: left;
}

.team-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 72px;
}

.team-header {
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.team-header-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.team-title {
  font-family: Cormorant Garamond;
  font-size: 58px;
  font-weight: 300;
  color: #0a0a0a;
  letter-spacing: -1px;
  line-height: 1.06;
  margin: 0;
}

.team-header-right {
  flex: 1;
  padding-top: 15px;
}

.team-desc {
  font-size: 15px;
  color: #6b6b6b;
  line-height: 1.85;
  margin: 0;
  width: 600px;
}

.team-grid {
  display: flex;
  gap: 16px;
}

.team-card {
  flex: 1;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  padding: 35px 7px 33px 29px;
  min-height: 320px;
  position: relative;
  min-width: 200px;
}

.team-card:hover {
  border-radius: 20px;
  border: var(--stroke-weight-1, 1px) solid var(--color-orange-5515, rgba(255, 122, 26, 0.15));
  background: var(--color-white-solid, #fff);
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.09), 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.team-avatar {
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background: linear-gradient(135deg, #f0f0f0, #e4e4e4);
  border: 2px solid rgba(0, 0, 0, 0.07);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ececec, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-icon {
  display: flex;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
}

.team-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  /* 确保占满父容器 */
  min-width: 0;
  /* 允许 flex 子项正确收缩 */
}

.team-name {
  font-size: 17px;
  color: #0a0a0a;
  letter-spacing: -0.2px;
}

.team-role {
  font-size: 11px;
  color: #ff7a1a;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  margin-bottom: 10px;
  /* width: 250px; */
}

.team-bio {
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.7;
  margin: 0 0 16px;
}

.team-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 100px;
  background-color: rgba(255, 122, 26, 0.07);
  border: 1px solid rgba(255, 122, 26, 0.2);
  width: fit-content;
  /* 根据内容自适应 */
  white-space: nowrap;
  /* 防止文字换行 */
  flex-shrink: 0;
  /* 防止被压缩 */
}

.badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ff7a1a;
  flex-shrink: 0;
}

.badge-label {
  font-size: 10px;
  color: #ff7a1a;
  letter-spacing: 1px;
  text-transform: uppercase;
  flex-shrink: 0;
  /* 防止文字被压缩 */
}

/* ===== 图片占位 ===== */
.section-image-placeholder {
  width: 100%;
  height: 720px;
  background-color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder-image {
  width: 229px;
  height: 229px;
  object-fit: cover;
}

/* ===== 通用颜色 ===== */
.text-orange {
  color: #ff7a1a;
  font-weight: 300;
  font-family: Cormorant Garamond !important;
  font-style: italic;
}

.text-light {
  font-weight: 300;
}

.text-dark-light {
  font-weight: 300;
  color: #0a0a0a;
}

// .divpp-hero-img {
//   display: none;
// }
.hero-br {
  display: block;
  content: "";
  height: 0;
}

/* ===== 响应式 ===== */
@media (max-width: 767px) {
  .mangobot-about {

    .section-hero {
      display: flex;
      width: 100vw;               // 440/440*100 = 100vw
      height: 103.409vw;          // 455/440*100
      min-height: 79.318vw;       // 349/440*100
      padding: 17.075vw 3.147vw 9.091vw 3.147vw;  // 75.132, 13.849, 40, 13.849
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      position: relative;
      overflow: hidden;
      background-image: none;
      background-image: url("../../assets/imgs/Frame-bg.png");
      background-size: cover;
      background-repeat: no-repeat;

      .hero-title {
        font-size: 7.273vw;       // 32/440*100
        font-style: normal;
        font-weight: 400;
        line-height: 8.508vw;     // 37.434/440*100
        letter-spacing: -0.197vw; // -0.866/440*100
        font-family: Montserrat;

        .hero-title-italic {
          font-size: 9.091vw;     // 40/440*100
          font-style: italic;
          font-weight: 300;
          line-height: 8.508vw;   // 37.434/440*100
          letter-spacing: -0.197vw;
        }
      }

      .hero-subtitle {
        max-width: 80vw;          // 352/440*100
        font-size: 3.182vw;       // 14/440*100
        font-style: normal;
        font-weight: 300;
        line-height: 5.227vw;     // 23/440*100
        white-space: pre-line;
        margin-top: 3.5vw;        // 15.4/440*100
      }

      .hero-btns {
        margin-top: 6.364vw;      // 28/440*100
        z-index: 4;
        gap: 3.182vw;             // 14/440*100

        .btn-primary,
        .btn-secondary {
          display: flex;
          height: 7.727vw;        // 34/440*100
          padding: 0.429vw 3.577vw; // 1.889, 15.741
          justify-content: center;
          align-items: center;
          gap: 1.431vw;           // 6.296/440*100
          border-radius: 7.155vw; // 31.481/440*100
          font-size: 2.862vw;     // 12.593/440*100
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.043vw; // -0.189/440*100
        }
      }

      .divpp-hero-img {
        position: absolute;
        top: 68.182vw;            // 300/440*100
        left: 0;
        width: 100%;
        height: 30%;
        flex-shrink: 0;
        background-image: url("../../assets/imgs/Frame-bg1.png");
        background-repeat: no-repeat;
      }
    }

    .section-story {
      display: flex;
      padding: 6.818vw 0;         // 30/440*100
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.864vw;               // 17/440*100

      .story-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: none;
        padding-top: 11.364vw;    // 50/440*100
        gap: 0px;

        .story-left {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3.864vw;           // 17/440*100

          .label-line {
            display: none;
          }

          .label-text {
            font-size: 3.182vw;   // 14/440*100
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.568vw; // 2.5/440*100
            text-transform: uppercase;
          }

          .story-title {
            width: 77.273vw;      // 340/440*100
            text-align: center;
            font-size: 9.091vw;   // 40/440*100
            font-style: normal;
            font-weight: 400;
            line-height: 8.508vw; // 37.434/440*100
            letter-spacing: -0.197vw;
            font-family: Cormorant Garamond;

            .story-title-italic {
              font-size: 9.091vw; // 40/440*100
              font-style: normal;
              font-weight: 400;
              line-height: 8.508vw;
              letter-spacing: -0.197vw;
            }
          }
        }

        .story-right {
          padding: 5.545vw 8.091vw 0px; // 24.4, 35.6
          gap: 5.545vw;           // 24.4/440*100

          .story-p {
            font-size: 3.182vw;   // 14/440*100
            font-style: normal;
            font-weight: 300;
            line-height: 5.227vw; // 23/440*100
            white-space: pre-line;

            .story-highlight {
              color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B));
              font-family: Montserrat;
              font-size: 3.182vw; // 14/440*100
              font-style: normal;
              font-weight: 700;
              line-height: 5.227vw;
            }

            :deep(b) {
              color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B)) !important;
              font-family: Montserrat;
              font-size: 3.182vw !important;
              font-style: normal;
              font-weight: 700 !important;
              line-height: 5.227vw !important;
            }

            :deep(i) {
              font-style: italic;
              font-family: Montserrat;
            }
          }
        }
      }
    }

    .section-mission {
      display: flex;
      height: 75.455vw;           // 332/440*100
      padding: 6.818vw 0;         // 30/440*100
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.864vw;               // 17/440*100

      .label-text {
        font-family: Montserrat;
        font-size: 3.182vw;       // 14/440*100
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.568vw;  // 2.5/440*100
        text-transform: uppercase;
      }

      .mission-title {
        width: 79.545vw;          // 350/440*100
        margin-top: 3.864vw;      // 17/440*100
        font-size: 9.091vw;       // 40/440*100
        font-style: normal;
        font-weight: 400;
        line-height: 8.508vw;     // 37.434/440*100
        letter-spacing: -0.197vw;

        .hero-br {
          display: none !important;
        }

        .text-orange {
          font-size: 9.091vw;     // 40/440*100
          font-style: normal;
          font-weight: 400;
          line-height: 8.508vw;
          letter-spacing: -0.197vw;
        }
      }

      .mission-desc_1 {
        color: #FFF;
        margin-top: 5vw;          // 22/440*100
        width: 84.318vw;          // 371/440*100
        text-align: center;
        font-family: Montserrat;
        font-size: 3.182vw;       // 14/440*100
        font-style: normal;
        font-weight: 300;
        line-height: 5.227vw;     // 23/440*100
      }

      .mission-desc {
        width: 84.318vw;          // 371/440*100
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 3.182vw;       // 14/440*100
        font-style: normal;
        font-weight: 300;
        line-height: 5.227vw;     // 23/440*100
      }
    }

    .section-stats {
      height: 14.932vw;           // 65.7/440*100
      padding: 0px;
      background: #EEE;
      border-radius: 1.839vw;     // 8.09/440*100

      .stat-group {
        display: flex;
        height: 100%;
        width: 25.128vw;          // 110.562/440*100
        padding: 3.473vw 3.064vw; // 15.281, 13.483
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.715vw;             // 3.146/440*100
        flex-shrink: 0;
        align-self: stretch;
        max-width: 100%;

        .stat-num {
          font-size: 5.107vw;     // 22.472/440*100
          font-style: normal;
          font-weight: var(--font-weight-300, 300);
          line-height: 5.107vw;   // 22.472/440*100
        }

        .stat-label {
          color: var(--Emperor, var(--color-grey-33, #555));
          font-size: 1.226vw;     // 5.393/440*100
          font-style: normal;
          font-weight: var(--font-weight-400, 400);
          line-height: 1.839vw;   // 8.09/440*100
          letter-spacing: 0.031vw; // 0.135/440*100
          text-transform: capitalize;
        }

        .stat-divider {
          display: none;
        }
      }

      .stat-group:last-child {
        gap: 0px;
        margin-top: 1.136vw;      // 5/440*100

        .stat-num {
          color: #010101;
          text-align: center;
          font-family: var(--font-family-Font-2, "Cormorant Garamond");
          font-size: 3.636vw;     // 16/440*100
          font-style: normal;
          font-weight: var(--font-weight-300, 300);
          line-height: 3.516vw;   // 15.472/440*100
        }
      }
    }

    .section-values {
      display: flex;
      padding: 6.818vw 0 11.364vw; // 30, 0, 50
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .values-inner {
        max-width: none;
      }

      .values-header {
        gap: 3.864vw;             // 17/440*100

        .label-text {
          font-size: 3.182vw;     // 14/440*100
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.568vw; // 2.5/440*100
          text-transform: uppercase;
        }

        .values-title {
          width: 79.545vw;        // 350/440*100
          font-size: 9.091vw;     // 40/440*100
          font-style: normal;
          font-weight: 400;
          line-height: 8.508vw;   // 37.434/440*100
          letter-spacing: -0.197vw;
        }

        .values-subtitle {
          width: 84.318vw;        // 371/440*100
          max-width: none;
          color: #6B6B6B;
          font-size: 3.182vw;     // 14/440*100
          font-style: normal;
          font-weight: 300;
          line-height: 5.227vw;   // 23/440*100
        }
      }

      .values-grid {
        display: block;
        width: 100vw;

        .value-card:nth-of-type(1) .value-desc {
          width: 70.682vw !important; // 311/440*100
        }

        .value-card:nth-of-type(2) .value-desc {
          width: 81.136vw !important; // 357/440*100
          margin-top: 8.977vw;        // 39.5/440*100
        }

        .value-card:nth-of-type(3) .value-desc {
          width: 80.682vw !important; // 355/440*100
          margin-top: 8.977vw;        // 39.5/440*100
        }

        .value-card {
          padding: 12.273vw 10.341vw; // 54, 45.5
          height: 71.987vw;           // 316.743/440*100

          .value-num {
            font-size: 2.586vw;       // 11.379/440*100
            font-style: normal;
            font-weight: var(--font-weight-400, 400);
            line-height: normal;
            letter-spacing: 0.588vw;  // 2.586/440*100
          }

          .value-title {
            margin-top: 4.545vw;      // 20/440*100
            margin-bottom: 0px;
            font-size: 5.172vw;       // 22.758/440*100
            font-style: normal;
            font-weight: var(--font-weight-800, 800);
            line-height: normal;
            letter-spacing: -0.094vw; // -0.414/440*100
          }

          .value-desc {
            margin-top: 2.864vw;      // 12.6/440*100
            width: 100%;
            font-size: 3.409vw;       // 15/440*100
            font-style: normal;
            font-weight: var(--font-weight-400, 400);
            line-height: 6.068vw;     // 26.7/440*100
          }

          .stat-divider {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 0.455vw;          // 2/440*100
            background-color: rgba(0, 0, 0, 0.07);
          }

          .value-top-line {
            position: absolute;
            top: 0;
            left: 10vw;               // 44/440*100
            right: 10vw;              // 44/440*100
            height: 0.455vw;          // 2/440*100
            background: linear-gradient(90deg, #ff7a1a, rgba(255, 122, 26, 0));
            opacity: 0;
            transition: opacity 0.3s;
          }
        }

        .value-card.is-active {
          .value-top-line {
            opacity: 1;
          }
        }
      }
    }

    .section-team {
      display: flex;
      width: 100vw;
      padding: 9.091vw 0 6.818vw;   // 40, 0, 30
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.864vw;                 // 17/440*100

      .team-inner {
        max-width: none;
      }

      .team-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .team-header-left {
          gap: 3.864vw;             // 17/440*100

          .section-label {
            display: flex;
            justify-content: center;
          }

          .label-line {
            display: none;
          }

          .label-text {
            font-size: 3.182vw;     // 14/440*100
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.568vw; // 2.5/440*100
            text-transform: uppercase;
            text-align: center;
          }

          .team-title {
            width: 59.318vw;        // 261/440*100
            text-align: center;
            font-size: 9.091vw;     // 40/440*100
            font-style: normal;
            font-weight: 400;
            line-height: 8.508vw;   // 37.434/440*100
            letter-spacing: -0.197vw;
          }
        }

        .team-header-right {
          padding: 0px;

          .team-desc {
            width: 84.318vw;        // 371/440*100
            font-size: 3.182vw;     // 14/440*100
            font-style: normal;
            font-weight: 300;
            line-height: 5.227vw;   // 23/440*100
          }
        }
      }

      .team-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4.545vw;               // 20/440*100
        width: 100%;
        max-width: 100vw;
        margin: 0 auto;
        padding: 0 5.682vw;         // 25/440*100

        .team-card {
          flex: none;
          width: calc((100% - 4.545vw) / 2);
          height: 38.636vw;         // 170/440*100
          flex-shrink: 0;
          flex-grow: 0;
          border-radius: 2.513vw;   // 11.059/440*100
          border: 0.126vw solid rgba(0, 0, 0, 0.07); // 0.553/440*100
          background: #FFF;
          box-sizing: border-box;
          overflow: hidden;
          padding: 4.318vw 3.636vw 3.864vw; // 19, 16, 17

          .team-avatar {
            display: flex;
            width: 9.048vw;         // 39.812/440*100
            height: 9.048vw;
            justify-content: center;
            align-items: center;
            border-radius: 4.524vw; // 19.906/440*100
            background: none;
            border: none;

            .avatar-icon {
              width: 100%;
              height: 100%;
            }
          }

          .team-info {
            .team-name {
              font-size: 2.136vw;   // 9.4/440*100
              font-style: normal;
              font-weight: var(--font-weight-700, 700);
              line-height: normal;
              letter-spacing: -0.025vw; // -0.111/440*100
            }

            .team-role {
              font-size: 1.382vw;   // 6.082/440*100
              font-style: normal;
              font-weight: var(--font-weight-700, 700);
              line-height: normal;
              letter-spacing: 0.126vw; // 0.553/440*100
              text-transform: uppercase;
            }

            .team-bio {
              color: var(--Dove-Gray, var(--color-grey-42, #6B6B6B));
              font-family: Montserrat;
              font-size: 1.634vw;   // 7.188/440*100
              font-style: normal;
              font-weight: var(--font-weight-400, 400);
              line-height: 2.777vw; // 12.22/440*100
            }

            .team-badge {
              display: inline-flex;
              padding: 0.628vw 1.508vw; // 2.765, 6.635
              align-items: center;
              gap: 0.754vw;         // 3.318/440*100
              border-radius: 12.567vw; // 55.294/440*100
              border: 0.126vw solid var(--color-orange-5520, rgba(255, 122, 26, 0.20));
              background: var(--color-orange-557, rgba(255, 122, 26, 0.07));

              .badge-dot {
                width: 0.628vw;     // 2.765/440*100
                height: 0.628vw;
                border-radius: 0.314vw; // 1.382/440*100
                background: var(--color-orange-55, #FF7A1A);
              }

              .badge-label {
                font-size: 1.257vw; // 5.529/440*100
                font-style: normal;
                font-weight: var(--font-weight-700, 700);
                line-height: normal;
                letter-spacing: 0.126vw; // 0.553/440*100
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }

    .section-image-placeholder {
      width: 100vw;
      height: 59.091vw;             // 260/440*100
    }
  }
}
</style>
