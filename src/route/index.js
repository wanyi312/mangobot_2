import { createWebHistory, createRouter } from 'vue-router'
import Layout from '@/components/layout/index.vue'

/** 全站路由：除 Layout 外壳外均为懒加载页面组件 */
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/products',
        name: 'Product',
        component: () => import('@/views/products/index.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('@/views/product/index.vue')
      },
      {
        path: '/privacyPolicy',
        name: 'PrivacyPolicy',
        component: () => import('@/views/privacyPolicy/index.vue'),
      },
      {
        path: '/termsConditions',
        name: 'TermsConditions',
        component: () => import('@/views/termsConditions/index.vue'),
      },
      /** 博客/活动 Markdown 详情，:id 对应 fileName */
      {
        path: '/blog/:id',
        name: 'Blob',
        component: () => import('@/views/blobExample/index.vue'),
      },
      {
        path: '/home',
        redirect: '/'
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import('@/views/Events/index.vue'),
      },
      {
        path: '/partnerships',
        name: 'Partnerships',
        component: () => import('@/views/Partnerships/index.vue'),
      },
      {
        path: '/aboutus',
        name: 'About',
        component: () => import('@/views/About/index.vue'),
      },
      {
        path: '/contactus',
        name: 'ContactUs',
        component: () => import('@/views/ContactUs/index.vue'),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog/index.vue'),
      },
    ],
  },
]

const isContactUsPath = (path) => path === '/contactus'

/** 锚点滚动：异步内容渲染完成前轮询等待 DOM 出现 */
function waitForHashElement(hash, resolveScroll) {
  const stepMs = 50
  const maxMs = 4000
  const start = typeof performance !== 'undefined' ? performance.now() : Date.now()
  const tick = () => {
    const el = document.querySelector(hash)
    if (el) {
      resolveScroll({ el: hash, top: 100, behavior: 'smooth' })
      return
    }
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now()
    if (now - start >= maxMs) {
      resolveScroll({ top: 0, left: 0, behavior: 'auto' })
      return
    }
    setTimeout(tick, stepMs)
  }
  tick()
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    // 联系页始终从顶部开始，避免继承上一页滚动位置
    if (isContactUsPath(to.path)) {
      return { top: 0, left: 0, behavior: 'auto' }
    }

    const hasAnchor = Boolean(to.hash)
    // 合作页自行处理 hash 定位，此处返回 false 阻止路由默认滚动
    if (hasAnchor && to.path === '/partnerships') {
      return false
    }
    if (hasAnchor) {
      return new Promise((resolve) => {
        waitForHashElement(to.hash, resolve)
      })
    }

    return { top: 0, left: 0, behavior: 'auto' }
  },
})

function forceWindowScrollTop() {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

/**
 * scrollBehavior 常在 Layout 过渡完成前执行；无 hash 时再延迟置顶几次。
 * 带 hash 的交给 scrollBehavior 锚点或合作页内逻辑。
 */
router.afterEach((to) => {
  const schedulePushScrollTop = () => {
    forceWindowScrollTop()
    requestAnimationFrame(() => {
      forceWindowScrollTop()
      requestAnimationFrame(() => {
        forceWindowScrollTop()
        setTimeout(forceWindowScrollTop, 0)
        setTimeout(forceWindowScrollTop, 320)
        setTimeout(forceWindowScrollTop, 550)
      })
    })
  }

  if (to.hash) {
    return
  }

  schedulePushScrollTop()
})

export default router