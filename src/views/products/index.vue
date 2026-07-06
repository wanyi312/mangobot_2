<template>
  <div class="productPage">
    <Frame />
    <div class="productPage_banner"></div>
    <ProductCards />
  </div>
</template>

<script setup>
import Frame from './components/frame.vue'
import ProductCards from './components/productCards.vue'

</script>
<style lang="less" scoped>
.productPage_banner {
  width: 100%;
  height: 880px;
  background: url('@/assets/imgs/products/products_banner.jpg') center -30px / auto 940px no-repeat;
}

@media (max-width: 767px) {
  height: 45.8854vw;
  background: url('@/assets/imgs/products/products_banner.jpg') center -1.5568vw / auto 48.9525vw no-repeat;
}
</style>