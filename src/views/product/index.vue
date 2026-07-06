<template>
  <!-- 产品详情页：/product/:id，按路由 id 组装各区块子组件 -->
  <div>
    <ProductHeader :productInfo="productInfo.header" />
    <BgImgs :bgImgs="productInfo.bgImgs" />
    <Bg :bg="productInfo.bgClassName" />
    <Capabilities :capabilities="productInfo.capabilities" />
    <Ideal :ideal="productInfo.ideal" />
    <ProductView :productInfo="productInfo.view" />
    <Attrs :attrs="productInfo.attrs" :productName="productInfo.name" />
    <ProductVideo v-if="productInfo.video" :videoInfo="productInfo.video" />
  </div>
</template>
<script setup>
import Bg from "./components/bg.vue";
import BgImgs from "./components/bgImgs.vue";
import ProductHeader from "./components/productHeader.vue";
import ProductView from "./components/productView.vue";
import Ideal from "./components/ideal.vue";
import Attrs from "./components/attrs.vue";
import Capabilities from "./components/capabilities.vue";
import ProductVideo from "./components/video.vue";
import config from "./config";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const productInfo = ref({});

/**
 * 路由 id 示例：a2、x2、d1、d1max、d1promax、g1
 * config 内键为大写（如 D1MAX），文案来自 i18n，图片资源在本目录 assets/
 */
watch(
  () => route.params.id,
  (newVal) => {
    const key = newVal.toUpperCase();
    productInfo.value = {
      header: config.productHeader[key],
      view: config.productView[key],
      bgImgs: config.bgImgs[key],
      ideal: config.ideal[key],
      attrs: config.attrs[key],
      capabilities: config.capabilities[key],
      bgClassName: key,
      video: config.video[key],
      name: key,
    };
  },
  { immediate: true }
);
</script>

<style lang="less" scoped>
</style>