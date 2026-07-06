# Mangobot 前端（Vite + Vue）

Mangobot 官方网站的前端工程。技术栈为 **Vue 3 + Vite + Vue Router + Vue I18n + Ant Design Vue**，支持 **英文（en）** 与 **阿拉伯文（ar）**。

**适合谁看这份文档？**

- 第一次跑起来：看下方 [快速开始](#快速开始3-步) 和 [本地开发与项目说明](#本地开发与项目说明)。
- 只改博客/活动列表和 Markdown 正文：看 [Blog / Events 内容配置操作说明](#blog--events-内容配置操作说明)。
- 改界面文案或新增语种：看 [多语言（i18n）说明](#多语言i18n说明)。

---

## 快速开始（3 步）

```bash
# 1. 进入项目目录后安装依赖（只需第一次，或 package.json 变更后）
npm install

# 2. 启动本地开发服务器
npm run dev
```

浏览器打开终端里提示的地址，一般为：**http://localhost:5173**

```bash
# 3. 打包并在本地预览线上效果
npm run build
npm run preview
```

---

## Blog / Events 内容配置操作说明

以下说明如何在本地维护博客与活动列表数据，以及如何放置 Markdown 正文。

---

### 1. 改哪里：开发源码 vs 构建产物

| 环境 | 配置文件路径 | 说明 |
|------|----------------|------|
| **开发 / 源码** | `public/config/blog.js` | 博客数据（内含 `en` / `ar` 等语言分支），构建时原样拷贝到输出目录 |
| **开发 / 源码** | `public/config/event.js` | 活动页数据（同上，多语言分支） |
| **开发 / 源码** | `public/config/filters.js` | 产品页等筛选/导航文案（`en` / `ar` 等键），随 `public/` 一并拷贝 |
| **线上构建后** | `dist/config/*.js` | 执行 `npm run build` 后由 `public/config/` 生成；若只改线上包，可直接改 `dist/config` 内同名文件 |

静态资源（如活动配图）可放在 `public/config/images/` 等目录，引用时使用以 **`/` 开头的站点根路径**（例如 `/config/images/xxx.png`）。部署后站点根即对应 `dist`（或 CDN 根路径）。

**语言与配置：** Blog、活动列表脚本内为 **`en` / `ar` 等语言键** 的多套数据；运行时根据 `localStorage.getItem('language') || 'en'` 取对应分支并赋给 `window.Blog`、`window.MangobotEvents`。切换站点语言时需与前端写入的 `language` 值一致（缺省为 `en`）。产品等其它按语言拆分的配置见上表 `filters.js`。

---

### 2. Blog：`public/config/blog.js`（`window.Blog`）

#### 2.1 修改步骤

1. 用编辑器打开 `public/config/blog.js`。
2. 在 **`data.en`、`data.ar`**（及后续若新增的语言键）下分别维护各语言的 `filters` 与 `events`。
3. 在 `filters` 中维护分类（展示文案 + 数字 `value`）；各语言的 **`value` 建议保持一致**，便于 `tag` 与筛选逻辑对齐。
4. 在对应语言的 `events` 数组中新增或编辑文章条目。
5. 在 **`public/markdown/{语言}/`** 下为每种语言放置与 `fileName` 对应的 `.md` 文件（见第 4 节）。
6. 本地执行 `npm run dev` 预览；确认无误后 `npm run build` 发布。

#### 2.2 `filters`（分类）

- **`label`**：页面上显示的分类名称。
- **`value`**：数字 ID；`1` 一般为「全部」，其余用于筛选。

#### 2.3 `events`（文章列表）字段说明

| 字段 | 说明 |
|------|------|
| `title` | 标题 |
| `subtitle` | 副标题 |
| `description` | 列表/摘要描述 |
| `image` | 封面图 URL（可为空字符串） |
| `date` | 日期，建议 `YYYY-MM-DD`，详情页会格式化为如 `Oct 06 2025` |
| `fileName` | **不含** `.md` 后缀；每种语言目录下各一份同名文件，且**同一语言内** slug 唯一（例：`test` → `public/markdown/en/test.md`、`public/markdown/ar/test.md`） |
| `isPinned` | 是否置顶（`true` / `false`） |
| `tags` | 数组，元素为数字，对应 `filters` 里某项的 **`value`**（用于分类筛选） |
| `keysword` | 关键词数组（可选，按业务使用） |

> 若项目中对 `window.Blog` 做了只读冻结，需在构建前改好 `public/config/blog.js` 再打包；或调整构建流程在拷贝后注入数据。

---

### 3. Events：`public/config/event.js`（`window.MangobotEvents`）

#### 3.1 修改步骤

1. 打开 `public/config/event.js`。
2. 在 **`data.en`、`data.ar`** 等语言键下分别维护 `filters`（与 Blog 类似：`label` + `value`）与 `events`。
3. 若活动详情走 Markdown，正文路径规则与 Blog 相同（第 4 节）。

#### 3.2 `events` 字段说明（与当前脚本一致）

| 字段 | 说明 |
|------|------|
| `category` | 分类展示文案 |
| `season` | 赛季/时间文案 |
| `location` | 地点 |
| `name` | 活动名称 |
| `description` | 描述 |
| `role` | 角色/类型文案（如 Brand Showcase） |
| `image` | 图片路径（建议 `/config/images/...`） |
| `date` | 日期（若业务使用） |
| `isPinned` | 是否置顶 |
| `tags` | **注意字段名为 `tags`（带 s）**；数组内为数字，对应 `filters` 的 **`value`** |
| `keysword` | 关键词数组 |
| `fileName` | 若详情页通过 Markdown 拉取，规则同 Blog：不含 `.md`，对应各语言 `public/markdown/{语言}/{fileName}.md` |

---

### 4. Markdown 正文（按语言分目录）

1. 在 **`public/markdown/{语言}/`** 下创建文件，例如英文 `public/markdown/en/test.md`、阿语 `public/markdown/ar/test.md`。`{语言}` 与 `localStorage` 中的 **`language`** 一致（项目内缺省为 **`en`**）。
2. 在 Blog（或活动）各语言配置里将 `fileName` 设为同一 slug，例如 **`test`**（不要写 `.md`）；不同语言可写不同标题/摘要，但 **`fileName` 通常保持一致**，以便共用详情路由。
3. 详情页请求地址为：**`/markdown/{language}/{fileName}.md`**（开发/部署后均以站点根为基准，等价于 `dist/markdown/{language}/...`）。

**正文中的链接：**

- **外链**：直接写完整 URL，例如 `https://example.com`。
- **站内静态资源**：使用**以 `/` 开头的根相对路径**，例如 `/config/images/photo.png`。若资源按语言分目录，可放在 `public/markdown/en/imgs/` 等下并以 `/markdown/en/imgs/...` 引用（部署后与 `dist` 目录结构一致即可访问）。

支持常规 Markdown 语法；项目内使用 `marked` 渲染，并用 `DOMPurify` 做 HTML 消毒。

---

### 5. 标签与筛选（Blog / Events 通用）

- 列表「全部」类分类通常对应 **`value: 1`**；筛选逻辑多为：`tag` / `tags` 数组**包含**当前选中的 `value`。
- 新增分类时：先在 `filters` 增加一项并分配新的 **`value`**，再在条目的 `tag` / `tags` 里引用该数字。

---

### 6. 检查清单（发布前）

- [ ] `fileName` 在各语言内唯一，且对每种已上线语言存在 **`public/markdown/{语言}/{fileName}.md`**（若该条需要正文页）；缺文件时详情页会加载失败。
- [ ] `blog.js` / `event.js` 中 **`data` 已包含** 站点支持的全部语言键（如 `en`、`ar`），且与切换语言时写入的 `localStorage.language` 一致。
- [ ] Blog 使用 **`tag`**，Events 使用 **`tags`**，勿混用。
- [ ] 图片路径在部署环境中可访问（根路径 `/` 是否正确）。
- [ ] 修改的是 **`public/config/`**、**`public/markdown/`** 并已重新 **`npm run build`**（若发布的是构建产物）。

---

## 本地开发与项目说明

### 环境准备

| 工具 | 说明 |
|------|------|
| **Node.js** | 建议 **18+**（[https://nodejs.org](https://nodejs.org) 安装 LTS 版） |
| **npm** | 随 Node 自带，无需单独安装 |
| **Git** | 拉取/更新代码时使用（可选） |

检查是否装好（在终端执行）：

```bash
node -v    # 应显示 v18.x 或更高
npm -v
```

### 第一次运行（手把手）

1. 用终端进入项目根目录（包含 `package.json` 的文件夹）。
2. 安装依赖：

```bash
npm install
```

3. 启动开发服务：

```bash
npm run dev
```

4. 浏览器访问 **http://localhost:5173**（端口以终端输出为准）。
5. 改代码后保存，页面会自动热更新，一般不用手动刷新。

> 开发服务器监听 `0.0.0.0:5173`，同一局域网内其它设备也可用本机 IP 访问（见终端输出）。

### 常用命令

| 命令 | 作用 | 什么时候用 |
|------|------|------------|
| `npm install` | 安装依赖 | 首次克隆、别人更新了 `package.json` 后 |
| `npm run dev` | 本地开发 + 热更新 | 日常改页面、改样式 |
| `npm run build` | 打包到 `dist/` | 准备上线、交付静态资源前 |
| `npm run preview` | 本地预览打包结果 | `build` 之后检查线上效果 |

### 项目目录（改哪里一目了然）

```
mangobot-fd/
├── public/                 # 不经过打包编译，原样拷贝到 dist
│   ├── config/             # 博客、活动、搜索筛选等 JS 配置（见上文 Blog/Events 章节）
│   ├── markdown/           # 博客/活动详情 Markdown（按 en、ar 分子目录）
│   └── Website_icon.svg    # 站点图标等静态文件
├── src/
│   ├── views/              # 各页面（一个文件夹 ≈ 一个页面）
│   ├── components/         # 公共组件（header、footer、layout 等）
│   ├── route/index.js      # 路由表（URL 与页面对应关系）
│   ├── i18n/               # 多语言文案（en / ar）
│   ├── assets/             # 图片、字体等资源（会参与打包）
│   ├── main.js             # 应用入口
│   └── App.vue
├── index.html              # HTML 模板（会加载 public/config 下的脚本）
├── vite.config.js          # Vite 配置（端口、代理、PostCSS 等）
├── package.json            # 依赖与脚本命令
└── dist/                   # npm run build 后生成，用于部署（勿手改后当源码）
```

### 网站页面与路由

| 页面 | 地址 | 源码位置（约） |
|------|------|----------------|
| 首页 | `/` | `src/views/home/` |
| 产品列表 | `/products` | `src/views/products/` |
| 产品详情 | `/product/:id` | `src/views/product/` |
| 博客 | `/blog` | `src/views/Blog/` |
| 活动 | `/robotics` | `src/views/Events/` |
| 合作伙伴 | `/partnerships` | `src/views/Partnerships/` |
| 关于我们 | `/aboutus` | `src/views/About/` |
| 联系我们 | `/contactus` | `src/views/ContactUs/` |
| 隐私政策 | `/privacyPolicy` | `src/views/privacyPolicy/` |
| 条款 | `/termsConditions` | `src/views/termsConditions/` |
| 文章/活动详情 | `/blobExample/:id` | `src/views/blobExample/` |

**产品详情 `id` 与路由对应：**

| 产品 | URL |
|------|-----|
| A2 Ultra | `/product/a2` |
| X2 Ultra | `/product/x2` |
| D1 Ultra | `/product/d1` |
| D1 Max | `/product/d1max` |
| D1 Max Pro | `/product/d1promax` |
| G1 Ultra | `/product/g1` |

产品页文案与区块配置主要在 `src/views/product/config.js` 和 `src/i18n/lang/{en,ar}/products/`。

### 我想改 XX，该动哪个文件？

| 想改的内容 | 改这里 |
|------------|--------|
| 博客列表、分类、摘要 | `public/config/blog.js` |
| 活动列表、分类 | `public/config/event.js` |
| 全站搜索/筛选跳转文案 | `public/config/filters.js` |
| 博客/活动正文（Markdown） | `public/markdown/en/`、`public/markdown/ar/` |
| 导航、页脚等固定 UI 文案 | `src/i18n/lang/en.js`、`src/i18n/lang/ar.js` 及子目录 |
| 支持语言 / RTL 方向配置 | `src/i18n/index.js`（`SUPPORTED_LOCALES`、`RTL_LOCALES`） |
| 某产品页介绍、参数、图片 | `src/i18n/lang/.../products/*.js` + `src/views/product/` |
| 新增/修改页面路由 | `src/route/index.js` |
| 顶部导航菜单 | `src/components/header/` |
| 页脚链接 | `src/components/footer/` |

**两种「配置」别搞混：**

- **`public/config/*.js`**：博客、活动等**列表数据**，改完 `dev` 即可看；上线要重新 `build`。
- **`src/i18n/`**：页面上的**界面文案**，在 Vue 组件里通过 `$t()` 使用。

语言切换存在浏览器 `localStorage` 的 `language` 键（`en` / `ar`），与 `public/config` 里 `data.en`、`data.ar` 分支对应。完整机制见下方 [多语言（i18n）说明](#多语言i18n说明)。

### 多语言（i18n）说明

站点界面文案由 **Vue I18n** 管理；博客/活动**列表数据**仍走 `public/config/*.js`（见上文 Blog/Events 章节）。两套体系通过同一个 `localStorage.language` 对齐。

#### 核心文件

| 文件 | 作用 |
|------|------|
| `src/i18n/index.js` | i18n 实例、支持语言列表、RTL 配置、`getTextDirection()` |
| `src/i18n/lang/en.js`、`ar.js` | 各语言主文案包（可再拆 `lang/{语言}/products/` 等子模块） |
| `src/App.vue` | 监听语言变化，同步 `<html lang>` 与 `<html dir>` |
| `src/components/header/index.vue` | 顶部语言切换，写入 `localStorage` 后**整页刷新** |

#### `src/i18n/index.js` 中的公共常量

```js
// 已接入语言（ISO 639-1 代码）
export const SUPPORTED_LOCALES = ["en", "ar"];

// 需要从右到左排版的书写方向语言
export const RTL_LOCALES = ["ar"];

// 供 App.vue 设置 document.documentElement.dir
export function getTextDirection(locale) {
  return RTL_LOCALES.includes(String(locale)) ? "rtl" : "ltr";
}
```

- **`SUPPORTED_LOCALES`**：合法语言白名单；`localStorage.language` 不在列表内时回退 `en`。
- **`RTL_LOCALES`**：使用 RTL 的语言；其余语言默认 LTR。新增希伯来语 `he`、波斯语 `fa` 等 RTL 语种时，把代码加进此数组即可，`App.vue` 无需再改。
- **`getTextDirection()`**：统一计算 `html[dir]`，避免在组件里写 `locale === 'ar'`。

#### 语言切换流程

1. 用户点击 Header 语言按钮 → `locale` 在 `en` / `ar` 间切换（当前为双语言切换，扩展多语时需改 Header 逻辑）。
2. 写入 `localStorage.setItem('language', locale)`。
3. **`window.location.reload()`** 刷新页面。
4. 刷新后：
   - `src/i18n/index.js` 从 `localStorage` 恢复 `locale`；
   - `index.html` 中的 `public/config/*.js` 按同一 `language` 挂载 `window.Blog` / `MangobotEvents` / `Filters`；
   - `App.vue` 设置 `document.documentElement` 的 `lang` 与 `dir`。

> 切换语言必须刷新，是因为 `public/config/*.js` 在页面加载时执行一次，运行时不会随 Vue `locale` 热更新。

#### 组件里怎么用文案

```vue
<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<template>
  <h1>{{ t("homeFrameTitleLine1") }}</h1>
</template>
```

文案键定义在 `src/i18n/lang/{语言}.js` 及其子文件中。产品页等大块文案在 `src/i18n/lang/{语言}/products/`。

#### 新增一种语言（检查清单）

假设新增法语，语言代码为 **`fr`**：

1. **登记语言**
   - `src/i18n/index.js`：在 `SUPPORTED_LOCALES` 加入 `"fr"`。
   - 若为 RTL 语言，同时在 `RTL_LOCALES` 加入 `"fr"`（法语通常不需要）。

2. **添加文案包**
   - 新建 `src/i18n/lang/fr.js`（可复制 `en.js` 再翻译）。
   - 按需复制 `src/i18n/lang/en/products/` 为 `fr/products/` 并翻译。
   - 在 `src/i18n/index.js` 的 `messages` 中注册：`fr: frModule`。

3. **同步静态配置**（每种语言都要有对应键）
   - `public/config/blog.js` → `data.fr`
   - `public/config/event.js` → `data.fr`
   - `public/config/filters.js` → `data.fr`

4. **Markdown 正文目录**
   - `public/markdown/fr/` 下放置各 `fileName.md`。

5. **Header 语言切换**
   - 当前 Header 仅在 `en` ↔ `ar` 间切换；多语言时需改 `src/components/header/index.vue` 的切换逻辑（如下拉选择 `SUPPORTED_LOCALES`）。

6. **样式与布局（可选）**
   - 检查是否有 `locale === 'ar'` 等硬编码样式（如 `src/views/home/components/frame.vue`），按需为新区块加类名或改用 `getTextDirection(locale)`。

7. **验证**
   - `localStorage.setItem('language', 'fr')` 后刷新，或改 Header 切到 `fr`。
   - 确认界面文案、`window.Blog` / `MangobotEvents` 列表、Markdown 详情、`html[dir]` 均正确。

#### 多语言相关常见问题

**Q：只加了 `src/i18n/lang/fr.js`，切法语后博客仍是英文？**  
还需在 `public/config/blog.js`、`event.js`、`filters.js` 的 `data` 里增加 `fr` 分支，并刷新页面。

**Q：阿语布局方向不对？**  
确认 `RTL_LOCALES` 包含 `ar`，且 `App.vue` 使用 `getTextDirection()` 设置 `dir`。

**Q：能否不刷新页面切换语言？**  
`public/config` 脚本需额外改造（运行时重新赋值并通知各页面），当前架构以刷新为最简单可靠方案。

### 接口代理（开发环境）

`vite.config.js` 将 `/api` 代理到 `https://email.mangobot.org`，用于联系表单等接口。本地开发时前端请求 `/api/...` 会自动转发，无需自己配 CORS。

### 打包与部署

```bash
npm run build    # 产物输出到 dist/
npm run preview  # 本地用静态服务预览 dist（可选）
```

仓库内 `wrangler.toml` 指向 Cloudflare Pages，构建输出目录为 **`./dist`**。典型流程：

1. 本地 `npm run build` 确认无报错。
2. 将 `dist` 部署到静态托管（如 Cloudflare Pages、Nginx、OSS 等）。
3. 若只改了 `public/config` 或 `public/markdown`，也必须重新 `build` 再发布（或按运维方式直接更新线上 `dist` 内对应文件）。

`index.html` 会加载：

- `/config/blog.js` → `window.Blog`
- `/config/event.js` → `window.MangobotEvents`
- `/config/filters.js` → 筛选配置

部署后需保证这些路径在站点根下可访问。

### 常见问题

**Q：`npm install` 很慢或失败？**  
可切换 npm 镜像后重试，例如：`npm config set registry https://registry.npmmirror.com`（仅本机生效）。

**Q：改了 `public/config/blog.js` 页面没变化？**  
确认改的是 `public/config/` 而不是 `dist/config/`；开发模式保存后刷新。若看的是已部署站点，需重新 `build` 并发布。

**Q：博客详情打不开？**  
检查该语言下是否存在 `public/markdown/{语言}/{fileName}.md`，且 `fileName` 与配置一致（不含 `.md`）。

**Q：端口 5173 被占用？**  
关闭占用进程，或在 `vite.config.js` 的 `server.port` 改成其它端口。

**Q：样式和设计稿不一致？**  
桌面端部分样式经 PostCSS 按 **1920** 宽设计稿转 `vw`；产品页移动端另有按 **440** 宽的 `vw` 手写样式，改样式时注意对应断点（`@media (max-width: 767px)`）。

---

## 技术栈速查

| 类别 | 选型 |
|------|------|
| 框架 | Vue 3 |
| 构建 | Vite 7 |
| 路由 | Vue Router 4 |
| 国际化 | Vue I18n；`SUPPORTED_LOCALES` / `RTL_LOCALES` / `getTextDirection()` 见 [多语言说明](#多语言i18n说明) |
| UI 组件 | Ant Design Vue 4 |
| 样式 | Less / Sass + PostCSS（px → vw） |
| Markdown | marked + DOMPurify |
| 轮播等 | Swiper |

