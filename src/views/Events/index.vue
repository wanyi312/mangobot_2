<template>
  <div class="events-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-bg" aria-hidden="true">
        <video ref="heroVideoRef" class="hero-video" src="https://media.mangobot.org/Events.mp4" muted loop playsinline
          autoplay preload="auto" />
      </div>
      <div class="hero-overlay" aria-hidden="true" />
      <div class="hero-content">
        <div class="headline">
          <span class="headline-txt">
            <span>{{ t("product.events.events.hero.title1") }}</span>
            <i class="mangobot">{{ t("product.events.events.hero.titleItalic") }} <span class="hero-br"></span>
            </i>
            <span>{{ t("product.events.events.hero.title2") }}</span>
          </span>
        </div>
        <div class="headline-desc">
          {{ t("product.events.events.hero.description") }}
        </div>
      </div>
      <div class="hero-eyebrowmargin">
        <div class="hero-eyebrow">
          <div class="eyebrow-dot" />
          <div class="eyebrow-text">{{ t("product.events.events.hero.eyebrow") }}</div>
        </div>
      </div>
      <div class="hero-actions">
        <div class="hero-action" />
        <div class="hero-action" />
      </div>
    </div>

    <!-- Featured Event Card -->
    <div class="featured-event"   @click="handleReadArticle(Pinned)" >
      <div class="event-card-large">
        <div class="event-visual" :style="{ backgroundImage: `url(${featuredEvent.image})` }">
          <div class="event-category">
            <span>{{ featuredEvent.category }}</span>
          </div>
        </div>
        <div class="event-info">
          <div class="event-meta">
            <span class="event-season_1">{{ featuredEvent.season }}</span>
            <span class="event-location_1">{{ featuredEvent.location }}</span>
          </div>
          <div class="event-name">
            <span>{{ featuredEvent.name }}</span>
          </div>
          <div class="event-desc">
            {{ featuredEvent.description }}
          </div>
          <div class="event-role">
            <div class="role-dot" />
            <span>{{ featuredEvent.role }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <button v-for="filter in filters" :key="filter.value"
        :class="['filter-btn', { active: activeFilter === filter.value }]" @click="activeFilter = filter.value">
        {{ filter.label }}
      </button>
      <div class="event-count">
        <span>{{ filteredEventsCount }} {{ t("product.events.events.filterBar.eventsCount") }}</span>
      </div>
    </div>

    <div class="event-count_1">
      <span>{{ filteredEventsCount }} {{ t("product.events.events.filterBar.eventsCount") }}</span>
    </div>
    <div v-for="(row, rowIndex) in eventRows" :key="'event-row-' + rowIndex" class="event-cards-row" :class="{
      'event-cards-row--first': rowIndex === 0,
      'event-cards-row--last': rowIndex === eventRows.length - 1,
    }">
      <div class="event-card" v-for="event in row" :key="event.id">
        <div class="event-card-inner" @click="handleClickCard(event)">
          <div class="event-card-visual" :style="{
            backgroundImage: event.image ? `url(${event.image})` : 'none',
          }">
            <div class="event-card-category">
              <span>{{ event.category }}</span>
            </div>
          </div>
          <div class="event-card-info">
            <div class="event-card-meta">
              <span class="event-season">{{ event.season }}</span>
              <span class="event-location">{{ event.location }}</span>
            </div>
            <div class="event-card-name">
              <h3 :style="{ width: event.width ? event.width : '100%' }">
                {{ event.name }}
              </h3>
            </div>
            <div class="event-card-desc">
              {{ event.description }}
            </div>
            <div class="event-card-role">
              <div class="role-dot" />
              <span>{{ event.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section">
      <div class="cta-content">
        <div class="cta-label">{{ t("product.events.events.ctaSection.label") }}</div>
        <div class="cta-title">
          <span class="cta-title-text">{{ t("product.events.events.ctaSection.title") }}</span>
          <i class="cta-title-highlight">
            {{ t("product.events.events.ctaSection.titleItalic") }}
            <br />
            {{ t("product.events.events.ctaSection.ofevents") }}
          </i>
          <br />
        </div>
        <div class="cta-desc">
          {{ t("product.events.events.ctaSection.description") }}
          <br />
          {{ t("product.events.events.ctaSection.description2") }}
        </div>
        <div class="cta-actions">
          <button type="primary" class="cta-btn" @click="handleClickRent">{{
            t("product.events.events.ctaSection.btnRent") }}</button>
          <button class="cta-btn-secondary" @click="handleClickPartners">{{
            t("product.events.events.ctaSection.btnPartner") }}</button>
        </div>
      </div>
    </div>

    <img class="section-image" alt="" :src="EventsSection" />
  </div>
</template>
  
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import EventsSection from "../../assets/imgs/Events-section.png";

const router = useRouter();
const { t } = useI18n();

const activeFilter = ref(1);

const heroVideoRef = ref(null);

/** 大图置顶区：数据来自 window.MangobotEvents */
const Pinned = ref({});
Pinned.value = window.MangobotEvents.events.find((event) => event.isPinned);

/** 桌面端每行 3 张卡片；移动端单列 */
const cardsPerRow = ref(3);

const updateCardsPerRow = () => {
  if (window.innerWidth <= 767) {
    cardsPerRow.value = 100; // 移动端：设为一个大数，使所有数据在一行
  } else {
    cardsPerRow.value = 3;   // 桌面端：恢复为 3
  }
};
onMounted(() => {
  // 初始化
  updateCardsPerRow();

  // 监听窗口大小变化
  window.addEventListener('resize', updateCardsPerRow);

  const v = heroVideoRef.value;
  if (v && typeof v.play === "function") {
    v.play().catch(() => { });
  }
});

// 列表与筛选数据来自 public/config/event.js → window.MangobotEvents
const filters = window.MangobotEvents.filters;

const featuredEvent = ref(window.MangobotEvents.events.find(event => event.isPinned));

/** 非置顶且 tags 包含当前筛选项 value 的卡片 */
const gridEvents = computed(() => {
  return window.MangobotEvents.events.filter(
    event => !event.isPinned && event.tags.includes(activeFilter.value)
  );
});

const filteredEventsCount = computed(() => gridEvents.value.length);

const CARDS_PER_ROW = 3;

const eventRows = computed(() => {
  const rows = [];
  const list = gridEvents.value;
  // 使用动态值进行切片
  for (let i = 0; i < list.length; i += cardsPerRow.value) {
    rows.push(list.slice(i, i + cardsPerRow.value));
  }
  return rows;
});

/** 配置了 link 则新开标签页；否则无跳转 */
const handleClickCard = (event) => {
  if (event.link) {
    window.open(event.link, '_blank');
  }
};

const handleClickRent = () => {
  router.push({ path: "/contactus" });
};

const handleClickPartners = () => {
  router.push({ path: "/partnerships" });
};

/** 置顶区点击：有 fileName 时进入 Markdown 详情页 */
const handleReadArticle = (item) => {
  router.push(`/blog/${item.fileName}`);
};
</script>
  
<style scoped lang="less">
.events-page {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 10px;
  color: #0a0a0a;
  font-family: Montserrat;
}

/* Hero Section */
.hero {
  /* width: 1920px; */
  width: 100%;
  height: 1030px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0px 40px; */
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  font-size: 104px;
  color: #f3f3f3;
  background-color: #1a1a1a;
}

.hero-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 0;
  flex-shrink: 0;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0) 5.77%,
      rgba(0, 0, 0, 0.76) 77.88%);
}

.hero-content {
  /* width: 1920px; */
  width: 100%;
  height: 1030px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 309px 135px 74px 74px;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  gap: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 2;
}

.headline {
  width: 1327px;
  position: relative;
  letter-spacing: -2px;
  line-height: 106px;
  display: flex;
  align-items: flex-end;
  z-index: 0;
}

.headline-txt {
  width: 100%;
}

.mangobot {
  font-size: 128px;
  font-weight: 300;
  font-family: "Cormorant Garamond", serif;
  color: #ff7a1a;
}

.hero-br {
  display: block;
  content: "";
  height: 0;
}

.headline-desc {
  width: 1187px;
  position: relative;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: #fff;
  display: flex;
  align-items: flex-end;
  z-index: 1;
}

.hero-eyebrowmargin {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 36px;
  z-index: 2;
  flex-shrink: 0;
  text-align: center;
  font-size: 11px;
  color: #ff7a1a;
}

.hero-eyebrow {
  border-radius: 100px;
  background-color: rgba(255, 122, 26, 0.07);
  border: 1px solid rgba(255, 122, 26, 0.2);
  display: flex;
  align-items: center;
  padding: 6px 16px 6px 8px;
  gap: 8px;
}

.eyebrow-dot {
  height: 7px;
  width: 7px;
  position: relative;
  border-radius: 3.5px;
  background-color: #ff7a1a;
}

.eyebrow-text {
  position: relative;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.hero-actions {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  padding: 46px 0px 0px;
  z-index: 3;
  flex-shrink: 0;
}

.hero-action {
  align-self: stretch;
  width: 205px;
  border-radius: 100px;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 32px;
  box-sizing: border-box;
}

/* Filter Bar */
.filter-bar {
  /* width: 1920px; */
  width: 71%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  padding: 73px 0px 20px;
  gap: 0px 9px;
  z-index: 1;
  text-align: center;
  font-size: 11.5px;
  color: #6b6b6b;
}

.filter-btn {
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  padding: 7px 18px;
  height: auto;
  font-size: 11.5px;
  letter-spacing: 0.3px;
  font-weight: 600;
  color: #6b6b6b;
  background: #fff;
  font-family: Montserrat;
}

.filter-btn:hover {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: #fff;
}

.filter-btn.active {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: #fff;
}

.event-count {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 56.41px;
  font-size: 11px;
  color: #9a9a9a;
  letter-spacing: 1px;
}

.event-count_1 {
  display: none !important;
}

/* Featured Event */
.featured-event {
  /* width: 1920px; */
  width: 100%;
  /* min-height: 894px; */
  height: auto;
  flex-shrink: 0;
  display: flex;
  /* align-items: flex-end; */
  align-items: stretch;
  justify-content: center;
  padding: 0px 272px;
  box-sizing: border-box;
  z-index: 2;
  font-size: 14.68px;
  margin-top: 101px;
  cursor: pointer;
}

.event-card-large {
  flex: 1;
  position: relative;
  box-shadow: 0px 2.93683123588562px 17.62px rgba(0, 0, 0, 0.05),
    0px 11.74732494354248px 58.74px rgba(0, 0, 0, 0.09);
  border-radius: 27.9px;
  background-color: #fff;
  border: 1.5px solid rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  width: 1376px;
  max-width: 100%;
  /* 不超过父容器 */
  min-height: 794.4px;
  /* 最小高度 */
  height: auto;
  /* 自适应高度 */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 63.4px;
  isolation: isolate;
}

.event-visual {
  align-self: stretch;
  height: 498.4px;
  /* min-height: 493.4px; */
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  isolation: isolate;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
  /* background-image: url("../../assets/imgs/Events-filter-bg.png"); */
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center; */
}

.event-category {
  margin: 0 !important;
  position: absolute;
  top: 20.56px;
  left: 20.56px;
  backdrop-filter: blur(14.68px);
  border-radius: 146.84px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1.5px solid rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5.9px 14.7px;
  z-index: 0;

  color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
  font-family: Montserrat;
  font-size: 14.684px;
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: normal;
}

.event-info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 29.4px 32.3px 35.2px;
  gap: 10px;
  z-index: 0;
  flex-shrink: 0;
  height: auto;
}

.event-meta {
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 17.6px;
  color: #ff7a1a;
  flex-wrap: wrap;
}

.event-season, .event-season_1 {
  position: relative;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  white-space: nowrap;
}

.event-location , .event-location_1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 11px;
  color: #9a9a9a;
  font-weight: 300;
}

.event-name {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 26.43px;
  font-family: Montserrat;
}

.event-name span {
  align-self: stretch;
  position: relative;
  letter-spacing: -0.44px;
  line-height: 1.3;
  font-size: 26.431px;
  font-weight: 800;
  margin: 0;
  font-family: Montserrat;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* 最多 2 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.event-desc {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 7.6px;
  font-size: 18.36px;
  color: #6b6b6b;
  line-height: 1.6;
  font-weight: 300;
  max-width: 700px;
  width: 100%;
  font-family: Montserrat;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  /* 最多 4 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.event-role {
  border-radius: 146.84px;
  background-color: #fafafa;
  border: 1.5px solid rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  padding: 7.3px 17.6px;
  gap: 7.3px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.role-dot {
  height: 7.3px;
  width: 7.3px;
  position: relative;
  border-radius: 3.67px;
  background-color: #ff7a1a;
}

/* Event Cards Row */
.event-cards-row {
  /* width: 1920px; */
  width: 100%;
  display: flex;
  /* align-items: center; */
  align-items: stretch;
  justify-content: start;
  /* padding: 0px 140px 20px; */
  padding: 0px 14.5% 0px;
  box-sizing: border-box;
  gap: 61px;
  z-index: 3;
  /* flex-wrap: wrap; */
}

.event-cards-row--first {
  padding-top: 50px;
}

.event-cards-row--last {
  padding-bottom: 80px;
  padding-top: 40px;
}

.event-card {
  min-height: 490px;
  /* 最小高度 */
  height: auto;
  /* 自适应高度 */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  max-width: 416.7px;
}

.event-card-inner {
  /* height: 455.8px;
  width: 416.7px; */
  min-height: 455.8px;
  /* 最小高度 */
  /* height: 100%;  */
  width: 100%;
  /* 填满父容器 */
  position: relative;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.09);
  border-radius: 19px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 43.2px;
  isolation: isolate;
  cursor: pointer;
}

.event-card-inner:hover {
  transform: translateY(-35px);
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.09);
}

.event-card-visual {
  align-self: stretch;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  isolation: isolate;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.event-card-category {
  margin: 0 !important;
  position: absolute;
  top: 14px;
  left: 14px;
  backdrop-filter: blur(10px);
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 10px;
  z-index: 0;
}

.event-card-info {
  align-self: stretch;
  /* height: 210.6px; */
  min-height: 210.6px;
  /* 最小高度 */
  height: auto;
  /* 自适应高度 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 22px 24px;
  box-sizing: border-box;
  gap: 6.8px;
  z-index: 0;
  flex: 1;
}

.event-card-meta {
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ff7a1a;
  flex-wrap: wrap;
}

.event-card-name {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  font-family: Montserrat;
}

.event-card-name h3 {
  font-size: 18px;
  align-self: stretch;
  position: relative;
  letter-spacing: -0.3px;
  line-height: 1.3;
  font-weight: 800;
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* 最多 2 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.event-card-desc {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 5.2px;
  font-size: 12.5px;
  color: #6b6b6b;
  line-height: 1.6;
  font-weight: 300;
  font-family: Montserrat;
  /* flex: 1; */

  display: -webkit-box;
  -webkit-line-clamp: 4;
  /* 最多 4 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.event-card-role {
  border-radius: 100px;
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 12px;
  gap: 5px;
  flex-shrink: 0;
  /* flex-wrap: wrap; */
}

.event-card-role .role-dot {
  height: 5px;
  width: 5px;
  border-radius: 2.5px;
}

.event-card-role span {
  white-space: nowrap;
  /* 角色文字不换行 */
}

/* CTA Section */
.cta-section {
  /* width: 1920px; */
  width: 100%;
  background-color: #fafafa;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 110px 0px;
  z-index: 5;
  text-align: center;
  font-size: 11px;
  color: #ff7a1a;
}

.cta-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13.4px;
  /* max-width: 580px; */
}

.cta-label {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.cta-title {
  width: 100%;
  align-self: stretch;
  /* display: flex;
    flex-direction: column;
    align-items: center; */
  font-size: 64px;
  color: #0a0a0a;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: -1.2px;
  line-height: 67.84px;
}

.cta-title-text {
  font-weight: 300;
  font-family: Cormorant Garamond;
  font-size: 64px;
  font-style: normal;
  line-height: var(--line-height-67_84, 67.84px);
  /* 106% */
  letter-spacing: var(--letter-spacing--1_2, -1.2px);
}

.cta-title-highlight {
  font-weight: 300;
  color: #ff7a1a;
  font-family: Cormorant Garamond;
  font-size: 64px;
  font-style: italic;
  line-height: var(--line-height-67_84, 67.84px);
  letter-spacing: var(--letter-spacing--1_2, -1.2px);
}

.cta-desc {
  flex-shrink: 0;
  padding: 2.6px 0px 0px;
  width: 100%;
  /* max-width: 720px; */
  color: var(--Dove-Gray, var(--color-grey-42, #6b6b6b));
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}

.cta-actions {
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 26.6px 0px 0px;
  gap: 14px;
  font-size: 20px;
}

.cta-btn {
  height: 54px;
  border-radius: 50px;
  padding: 3px 25px;
  background-color: #000;
  border: none;
  color: #fff;
  letter-spacing: -0.3px;
  font-weight: 500;
  font-size: 20px;
  font-family: Montserrat;
}

.cta-btn:hover {
  background-color: #ff7a1a;
}

.cta-btn-secondary {
  height: 54px;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid #cecece;
  padding: 3px 25px;
  color: #000;
  letter-spacing: -0.3px;
  font-weight: 500;
  font-size: 20px;
  font-family: Montserrat;
}

.cta-btn-secondary:hover {
  border-color: #000;
  background-color: #e3e3e3;
  color: #000;
}

.section-image {
  align-self: stretch;
  height: 881px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 6;
}


//媒体查询
@media (max-width: 767px) {

/* ===== 全局容器调整 ===== */
.events-page {
  overflow-x: hidden;
  /* 防止横向滚动 */
}

/* ===== Hero 区域 ===== */
.hero {
  display: flex;
  width: 100vw;               // 440/440*100
  height: 118.182vw;          // 520/440*100
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2.273vw;               // 10/440*100
  flex-shrink: 0;
}

.hero-content {
  height: auto;
  padding: 5.455vw;           // 24/440*100
  gap: 2.273vw;               // 10/440*100
}

.headline {
  width: 100%;
  font-size: 7.273vw;         // 32/440*100
  font-weight: 400;
  line-height: 9.091vw;       // 40/440*100
  letter-spacing: -0.252vw;   // -1.109/440*100
  justify-content: center;
}

.mangobot {
  font-size: 9.091vw;         // 40/440*100
  font-weight: 300;
}

.headline-desc {
  width: 83.864vw;            // 369/440*100
  color: #FFF;
  font-variant-numeric: ordinal;
  font-feature-settings: 'dlig' on;
  font-family: Montserrat;
  font-size: 3.182vw;         // 14/440*100
  font-style: normal;
  font-weight: 300;
  line-height: 5.922vw;       // 26.055/440*100
}

/* ===== Featured Event (精选活动) ===== */
.featured-event {
  padding: 10.682vw 5.455vw 10.568vw !important; // 47, 24, 46.5
  margin-top: 0px !important;
}

.event-card-large {
  display: flex;
  width: 89.091vw;            // 392/440*100
  height: 59.509vw;           // 261.838/440*100
  padding-bottom: 4.099vw;    // 18.034/440*100
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: auto;
  border-radius: 1.803vw;     // 7.931/440*100
  border: 0.095vw solid var(--color-black-7, rgba(0, 0, 0, 0.07)); // 0.417
  background: var(--color-white-solid, #FFF);
}

.event-visual {
  height: 31.818vw;           // 140/440*100
  width: 100%;
  background-position: center;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
}

.event-category {
  position: absolute;
  left: 2.273vw;              // 10/440*100
  top: 2.273vw;
  height: 3.636vw;            // 16/440*100
  font-size: 2.273vw;         // 10/440*100
  font-weight: 700;
  border-radius: 9.487vw;     // 41.745/440*100
  border: 0.095vw solid var(--color-black-7, rgba(0, 0, 0, 0.07));
  background: var(--color-white-90, rgba(255, 255, 255, 0.90));
  backdrop-filter: blur(0.474vw);
  color: var(--Cod-Gray, var(--color-grey-4, #0A0A0A));
  font-family: Montserrat;
  font-size: 2.273vw;
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: normal;
}

.hero-br {
  display: none !important;
}

.event-info {
  padding: 1.898vw 2.087vw 2.277vw 2.273vw; // 8.349, 9.184, 10.019, 10
  gap: 2.273vw;               // 10/440*100
}

.event-meta {
  font-size: 2.273vw;         // 10/440*100
  font-family: Montserrat;
}

.event-season_1 {
  color: var(--Pumpkin, var(--color-orange-55, #FF7A1A));
  font-family: Montserrat;
  font-size: 2.273vw;
  font-style: normal;
  font-weight: var(--font-weight-400, 400);
  line-height: normal;
  letter-spacing: 0.142vw;    // 0.626/440*100
  text-transform: uppercase;
}

.event-location_1 {
  font-size: 2.273vw;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.event-name span {
  font-size: 3.182vw;         // 14/440*100
  font-style: normal;
  font-weight: 800;
  line-height: 2.049vw;       // 9.017/440*100
  letter-spacing: -0.028vw;   // -0.125/440*100
}

.event-desc {
  max-width: 84.545vw !important; // 372/440*100
  font-family: Montserrat;
  font-size: 2.273vw;
  font-style: normal;
  font-weight: 300;
  line-height: 3.182vw;       // 14/440*100
}

.event-role {
  width: fit-content;
  height: 3.864vw;            // 17/440*100
  display: flex;
  padding: 0.474vw 1.138vw;   // 2.087, 5.009
  align-items: center;
  gap: 0.474vw;               // 2.087/440*100
  border-radius: 9.487vw;     // 41.745/440*100
  border: 0.095vw solid var(--color-black-7, rgba(0, 0, 0, 0.07));
  background: var(--color-grey-98, #FAFAFA);
  font-size: 2.273vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.role-dot {
  width: 0.474vw;             // 2.087/440*100
  height: 0.474vw;
  border-radius: 0.237vw;     // 1.044/440*100
  background: var(--color-orange-55, #FF7A1A);
}

/* ===== Filter Bar (筛选栏) ===== */
.filter-bar {
  width: 100% !important;
  padding: 0.682vw 5.455vw 3.182vw !important; // 3, 24, 14
  gap: 2.045vw !important;    // 9/440*100
  display: flex !important;
  flex-wrap: nowrap !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  scrollbar-width: none;
  justify-content: flex-start !important;
  align-items: center;
}

.filter-bar::-webkit-scrollbar {
  display: none;
}

.filter-btn {
  width: fit-content !important;
  height: 6.818vw !important; // 30/440*100
  font-size: 2.727vw;         // 12/440*100
  padding: 1.364vw 3.182vw;   // 6, 14
  white-space: nowrap;
  font-style: normal;
  font-weight: 600 !important;
  line-height: normal;
  letter-spacing: 0.068vw;    // 0.3/440*100
  cursor: pointer;
  transition: all 0.2s ease;
}

.event-count {
  display: none !important;
  width: 100%;
  justify-content: center;
  margin-top: 2.273vw;        // 10/440*100
  font-size: 2.727vw;         // 12/440*100
}

.event-count_1 {
  display: block !important;
  width: 100%;
  text-align: right;
  margin-right: 5.455vw;      // 24/440*100
  font-size: 2.727vw;
  margin-top: 2.273vw;
  color: var(--Dusty-Gray, var(--color-grey-60, #9A9A9A));
  font-family: Montserrat;
  font-size: 2.5vw;           // 11/440*100
  font-style: normal;
  font-weight: var(--font-weight-400, 400);
  line-height: normal;
  letter-spacing: 0.227vw;    // 1/440*100
}

/* ===== Event Cards Grid (活动卡片网格) ===== */
.event-cards-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 4.545vw 9.091vw; // 0, 20, 40
  gap: 4.545vw;               // 20/440*100
  width: 100%;
}

.event-cards-row--first,
.event-cards-row--last {
  padding: 2.273vw 5.455vw 5.455vw; // 10, 24, 24
}

.event-card {
  min-width: 42.273vw;        // 186/440*100
  max-width: 42.273vw;
  height: 46.364vw;           // 204/440*100
  gap: 1.015vw;               // 4.464/440*100
  flex-shrink: 0;
  margin-top: 2.273vw;        // 10/440*100
}

.event-card-inner {
  width: 100%;
  min-height: auto;
  border-radius: 1.928vw;     // 8.482/440*100
  border: 0.101vw solid var(--color-black-7, rgba(0, 0, 0, 0.07)); // 0.446
  cursor: pointer;
}

.event-card-inner:hover {
  transform: none;
}

.event-card-visual {
  width: 42.045vw;            // 185/440*100
  height: 20.291vw;           // 89.281/440*100
}

.event-card-info {
  height: 25.909vw;           // 114/440*100
  width: 100%;
  padding: 2.273vw;           // 10/440*100
  min-height: auto;
  flex: none;
  gap: 1.009vw;               // 4.44/440*100
}

.event-card-category {
  position: absolute;
  left: 1.42vw;               // 6.25/440*100
  top: 1.42vw;
  display: flex;
  padding: 0.406vw 1.015vw;   // 1.786, 4.464
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10.146vw;    // 44.641/440*100
  border: 0.101vw solid var(--color-black-7, rgba(0, 0, 0, 0.07));
  font-family: Montserrat;
  font-size: 1.364vw;         // 6/440*100
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.event-card-meta {
  gap: 1.136vw;               // 5/440*100
}

.event-season {
  font-size: 1.015vw;         // 4.464/440*100
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.152vw;    // 0.67/440*100
  text-transform: uppercase;
}

.event-location {
  font-size: 1.116vw;         // 4.91/440*100
  line-height: 1.591vw;       // 7/440*100
}

.event-card-name h3 {
  font-size: 1.826vw;         // 8.035/440*100
  -webkit-line-clamp: 2;
  letter-spacing: -0.03vw;    // -0.134/440*100
  font-weight: 800;
}

.event-card-desc {
  height: 11.364vw;           // 50/440*100
  font-size: 1.818vw;         // 8/440*100
  -webkit-line-clamp: 6;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.event-card-role {
  font-size: 1.364vw;         // 6/440*100
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.role-dot {
  width: 0.507vw;             // 2.232/440*100
  height: 0.507vw;
  border-radius: 0.254vw;     // 1.116/440*100
  background: var(--color-orange-55, #FF7A1A);
}

/* ===== CTA Section (行动号召) ===== */
.cta-section {
  padding: 14.091vw 5.455vw;  // 62, 24
}

.cta-content {
  gap: 3.045vw;               // 13.4/440*100
}

.cta-label {
  font-size: 3.182vw;         // 14/440*100
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.568vw;    // 2.5/440*100
  text-transform: uppercase;
}

.cta-title {
  font-size: 6.818vw;         // 30/440*100
  font-style: normal;
  font-weight: 300;
  line-height: 8.864vw;       // 39/440*100
  letter-spacing: -0.273vw;   // -1.2/440*100
}

.cta-title-text,
.cta-title-highlight {
  font-size: 8.182vw;         // 36/440*100
  font-style: italic;
  font-weight: 300;
  line-height: 8.864vw;
  letter-spacing: -0.273vw;
}

.cta-desc {
  width: 70.682vw;            // 311/440*100
  font-size: 2.273vw;         // 10/440*100
  font-style: normal;
  font-weight: 400;
  line-height: 4.091vw;       // 18/440*100
}

.cta-actions {
  width: 100%;
  gap: 3.182vw;               // 14/440*100
}

.cta-btn,
.cta-btn-secondary {
  height: 7.727vw;            // 34/440*100
  font-size: 2.862vw;         // 12.593/440*100
  border-radius: 7.155vw;     // 31.481/440*100
  padding: 0.429vw 3.577vw;   // 1.889, 15.741
  gap: 1.431vw;               // 6.296/440*100
}

/* ===== Bottom Image ===== */
.section-image {
  height: auto;
  width: 100vw;
  max-height: 45.885vw;       // 201.896/440*100
  object-fit: cover;
}
}
</style>
  