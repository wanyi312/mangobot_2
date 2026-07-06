<template>
  <!-- 博客/活动详情页：路由 /blobExample/:id，id 对应 public/config 里的 fileName -->
  <div class="blob-example">
    <div class="blob-example-flame" v-if="!event.video" :style="{ backgroundImage: `url(${event.image})` }"></div>
    <iframe v-else :src="getYouTubeEmbedUrl(event.video)" class="blob-example-flame  blob-example-vidoe"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="blob-example-content">
      <div class="blob-example-content_header">
        <div class="blob-example-content_header_left">
          <h1>{{ event.title }}</h1>
          <div>{{ event.subtitle }}</div>
        </div>
        <div class="blob-example-content_header_right">{{ formatDateToBlogStyle(event.date) }}</div>
      </div>
      <div v-html="markdownContent" class="blob-example-content_body"></div>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
/** 路由参数，与 blog.js 中条目的 fileName 一致（不含 .md） */
const id = route.params.id;
const markdownContent = ref('');
const event = ref({});

/** 列表元数据来自 index.html 注入的 window.Blog（见 public/config/blog.js） */
event.value = window.Blog.events.find(event => event.fileName === id);


const getYouTubeEmbedUrl = (url) => {
  if (!url) return '';

  let videoId = '';

  // 处理 youtu.be 短链接
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }
  // 处理 youtube.com/watch?v= 长链接
  else if (url.includes('v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else {
    return url;
  }

  // 修改参数：
  // mute=0: 开启声音
  // controls=1: 显示控制器（包含音量键）
  // autoplay=1: 尝试自动播放（如果浏览器阻止有声自动播放，用户需手动点击）
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&loop=1&playlist=${videoId}&controls=1`;
};

onMounted(async () => {
  try {
    // 正文按当前语言从 public/markdown/{language}/{fileName}.md 拉取
    const lang = localStorage.getItem('language') || 'en';
    const res = await fetch(`/markdown/${lang}/${id}.md`);
    if (!res.ok) {
      throw new Error(`Failed to load markdown: ${res.status}`);
    }
    const markdownText = await res.text();
    // marked 转 HTML 后须经 DOMPurify 消毒，再交给 v-html 渲染
    markdownContent.value = DOMPurify.sanitize(marked.parse(markdownText));
  } catch (error) {
    markdownContent.value = '<p>Failed to load content.</p>';
  }
});

/** 将 YYYY-MM-DD 格式化为博客页展示的 Oct 06 2025 样式 */

function formatDateToBlogStyle(dateStr) {
  const date = new Date(dateStr); // 例如 "2025-10-06"
  if (Number.isNaN(date.getTime())) return '';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month} ${day} ${year}`; // Oct 06 2025
}
</script>



<style lang="less" scoped>
.blob-example {
  width: 100%;
  font-family: Montserrat;

  &-vidoe {
    margin-top: 96px !important;
  }

  &-flame {
    width: 1920px;
    height: 720px;

    background-color: lightgray;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background: url('@/assets/imgs/blob/blob_example_flame.jpg') lightgray 0px -193.141px / 100% 177.734% no-repeat;
  }

  &-content {
    padding: 92px 278px;

    &_header {
      width: 100%;
      padding-bottom: 43px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #D5D5D5;
      gap: 10px;

      &_left {
        h1 {
          color: #FF7A1A;
          font-size: 58px;
          font-weight: 500;
          line-height: 76px;
          margin: 0;
          white-space: pre-line;
        }

        &>div {
          color: #0F0F0F;
          font-size: 58px;
          font-weight: 300;
          line-height: 76px;
        }
      }

      &_right {
        color: #FF7A1A;
        font-family: Geist;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.48px;
        min-width: 150px;
      }
    }

    &_body {
      padding-top: 43px;
      width: 1084px;

      :deep(h2) {
        color: #FF7A1A;
        font-size: 36px;
        font-weight: 400;
        line-height: 59px;
        letter-spacing: -0.72px;
        margin: 0 0 5px;
      }

      :deep(p),
      :deep(li) {
        color: #000;
        font-size: 32px;
        font-weight: 300;
        line-height: 59px;
        letter-spacing: -0.64px;
      }

      :deep(p),
      :deep(ul),
      :deep(ol) {
        margin: 0 0 58px;
      }

      :deep(strong) {
        font-style: italic;
      }

      :deep(p:last-child),
      :deep(ul:last-child),
      :deep(ol:last-child) {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .blob-example {
    &-flame {
      height: 82.2727vw;
      // background: url('@/public/config/images/blob-04.jpeg') lightgray -44.6098vw -12.3941vw / 146.44% 115.516% no-repeat;
      // background: url('@/assets/imgs/blob/blob_example_flame.jpg') lightgray -44.6098vw -12.3941vw / 146.44% 115.516% no-repeat;
      // background-size: cover;
      // background-position: center;
      // background-repeat: no-repeat;
      align-self: stretch;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;

    }

    &-vidoe {
      margin-top: 0px !important;
    }

    &-content {
      padding: 6.8182vw 5.4545vw 11.3636vw;

      &_header {
        padding-bottom: 2.2727vw;
        border-bottom: 0.1148vw solid #D5D5D5;
        gap: 0;
        flex-direction: column;

        &_left {
          order: 2;

          h1 {
            color: #F79355;
            font-family: Geist;
            font-size: 5.4545vw;
            line-height: 8.7245vw;
          }

          &>div {
            font-family: Geist;
            font-size: 5.4545vw;
            font-weight: 500;
            line-height: 8.7245vw;
          }
        }

        &_right {
          color: #F79355;
          font-size: 2.755vw;
          line-height: 3.6734vw;
          letter-spacing: -0.055vw;
          order: 1;
        }
      }

      &_body {
        width: 100%;
        padding: 6.8182vw 3.6364vw 0;
        opacity: 0.7;

        :deep(h2) {
          color: #F79355;
          font-feature-settings: 'ss02' on, 'ss03' on, 'ss08' on;
          font-family: Geist;
          font-size: 3.6364vw;
          font-weight: 500;
          line-height: 6.5909vw;
          letter-spacing: -0.0909vw;
          margin: 0 0 1.1364vw;
        }

        :deep(p),
        :deep(li) {
          color: #757D89;
          font-feature-settings: 'ss02' on, 'ss03' on, 'ss08' on;
          font-family: Geist;
          font-size: 3.1818vw;
          font-weight: 500;
          line-height: 6.5909vw;
          letter-spacing: -0.0909vw;
        }

        :deep(p),
        :deep(ul),
        :deep(ol) {
          margin: 0 0 6.3636vw;
        }

        :deep(p:last-child),
        :deep(ul:last-child),
        :deep(ol:last-child) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>