<template>
  <!-- 首页由五个纵向区块组成，自上而下：主视觉 → 合作伙伴 → 需求 → 表现 → 引导 CTA -->
  <div class="homePage">
      <Frame />
      <Partner />
      <Demands />
      <Performs />
      <GetStarted />
  </div>
</template>
<script setup>
import Frame from './components/frame.vue'
import Partner from './components/partner.vue'
import Demands from './components/demands.vue'
import Performs from './components/performs.vue'
import GetStarted from './components/getStarted.vue'
</script>
<style lang="less" scoped>
.homePage {
  width: 100%;
}
</style>