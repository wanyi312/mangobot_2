<template>
  <section class="productPage_productCards">
    <article
      v-for="item in products"
      :key="item.id"
      class="productPage_productCards_item"
    >
      <div class="productPage_productCards_inner">
        <div class="productPage_productCards_left">
          <h2 class="productPage_productCards_title" dir="ltr">
            <span class="productPage_productCards_titleStrong">{{ item.namePrefix }}</span>
            <span class="productPage_productCards_titleAccent">{{ item.nameSuffix }}</span>
          </h2>
          <p class="productPage_productCards_subtitle">{{ item.subtitle }}</p>
          <p class="productPage_productCards_desc">{{ item.description }}</p>

          <div class="productPage_productCards_specs">
            <div
              v-for="(spec, idx) in item.specs"
              :key="idx"
              class="productPage_productCards_specCell"
            >
              <div class="productPage_productCards_specValue">{{ spec.value }}</div>
              <div class="productPage_productCards_specLabel">{{ spec.label }}</div>
            </div>
          </div>

          <button
            type="button"
            class="productPage_productCards_btnExplore"
            @click="goExplore(item)"
          >
            {{ t("productsBtnExplore") }}
          </button>
        </div>

        <div class="productPage_productCards_right">
          <div class="productPage_productCards_visual">
            <img
              class="productPage_productCards_img"
              :class="`productPage_productCards_img_${item.id}`"
              :src="item.image"
              :alt="item.alt"
            />
            <button
              type="button"
              class="productPage_productCards_btnQuote"
              @click="goQuote"
            >
              {{ t("productsBtnQuote") }}
            </button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import imgA2 from "@/assets/imgs/products/robots_A2Ultra.png";
import imgX2 from "@/assets/imgs/products/robots_X2Ultra.png";
import imgD1 from "@/assets/imgs/products/robots_D1Ultra.png";
import imgD1Max from "@/assets/imgs/products/robots_D1Max.png";
import imgD1MaxPro from "@/assets/imgs/products/robots_D1MaxPro.png";
import imgG1 from "@/assets/imgs/products/robots_G1Ultra.png";

const router = useRouter();
const { t } = useI18n();

const productConfigs = [
  {
    id: "a2-ultra",
    namePrefix: "A2",
    nameSuffix: "Ultra",
    subtitleKey: "productsA2Subtitle",
    descriptionKey: "productsA2Desc",
    specs: [
      { value: "169 cm", labelKey: "productsSpecHeight" },
      { value: "69 kg", labelKey: "productsSpecWeight" },
      { value: "3 hrs", labelKey: "productsSpecRuntime" },
      { value: "40+", labelKey: "productsSpecDof" },
      { value: "0.8 m/s", labelKey: "productsSpecSpeed" },
      { value: "360°", labelKey: "productsSpecPerception" },
    ],
    image: imgA2,
    altKey: "productsA2Alt",
    explorePath: "/product/a2",
  },
  {
    id: "x2-ultra",
    namePrefix: "X2",
    nameSuffix: "Ultra",
    subtitleKey: "productsX2Subtitle",
    descriptionKey: "productsX2Desc",
    specs: [
      { value: "130 cm", labelKey: "productsSpecHeight" },
      { value: "35 kg", labelKey: "productsSpecWeight" },
      { value: "2 hrs", labelKey: "productsSpecRuntime" },
      { value: "31+", labelKey: "productsSpecDof" },
      { value: "3 kg", labelKey: "productsSpecMaxLoad" },
      { value: "500 Wh", labelKey: "productsSpecBattery" },
    ],
    image: imgX2,
    altKey: "productsX2Alt",
    explorePath: "/product/x2",
  },
  {
    id: "d1-ultra",
    namePrefix: "D1",
    nameSuffix: "Ultra",
    subtitleKey: "productsD1UltraSubtitle",
    descriptionKey: "productsD1UltraDesc",
    specs: [
      { value: "15 kg", labelKey: "productsSpecWeight" },
      { value: "3.7 m/s", labelKey: "productsSpecSpeed" },
      { value: "1-2 hrs", labelKey: "productsSpecRuntime" },
      { value: "5 kg", labelKey: "productsSpecMaxLoad" },
      { value: "IP 54", labelKey: "productsSpecRating" },
      { value: "48 Nm", labelKey: "productsSpecTorque" },
    ],
    image: imgD1,
    altKey: "productsD1UltraAlt",
    explorePath: "/product/d1",
  },
  {
    id: "d1-max",
    namePrefix: "D1",
    nameSuffix: "Max",
    subtitleKey: "productsD1MaxSubtitle",
    descriptionKey: "productsD1MaxDesc",
    specs: [
      { value: "30 kg", labelKey: "productsSpecWeight" },
      { value: "4+ m/s", labelKey: "productsSpecLegged" },
      { value: "8+ m/s", labelKey: "productsSpecWheeled" },
      { value: "25 kg", labelKey: "productsSpecMaxLoad" },
      { value: "IP67", labelKey: "productsSpecRating" },
      { value: "2.5 hrs", labelKey: "productsSpecRuntime" },
    ],
    image: imgD1Max,
    altKey: "productsD1MaxAlt",
    explorePath: "/product/d1max",
  },
  {
    id: "d1-max-pro",
    namePrefix: "D1",
    nameSuffix: "Max Pro",
    subtitleKey: "productsD1MaxProSubtitle",
    descriptionKey: "productsD1MaxProDesc",
    specs: [
      { value: "64 kg", labelKey: "productsSpecWeight" },
      { value: "100 kg", labelKey: "productsSpecMaxLoad" },
      { value: "50 kg", labelKey: "productsSpecEffLoad" },
      { value: "5.5 hrs", labelKey: "productsSpecUnloaded" },
      { value: "2160 Wh", labelKey: "productsSpecBattery" },
      { value: "IP67", labelKey: "productsSpecRating" },
    ],
    image: imgD1MaxPro,
    altKey: "productsD1MaxProAlt",
    explorePath: "/product/d1promax",
  },
  {
    id: "g1-ultra",
    namePrefix: "G1",
    nameSuffix: "Ultra",
    subtitleKey: "productsG1Subtitle",
    descriptionKey: "productsG1Desc",
    specs: [
      { value: "130–180 cm", labelKey: "productsSpecHeight" },
      { value: "150 kg", labelKey: "productsSpecWeight" },
      { value: "4+ hrs", labelKey: "productsSpecRuntime" },
      { value: "20+", labelKey: "productsSpecDof" },
      { value: "8 Cams", labelKey: "productsSpecVision" },
      { value: "64 GB", labelKey: "productsSpecCompute" },
    ],
    image: imgG1,
    altKey: "productsG1Alt",
    explorePath: "/product/g1",
  },
];

const products = computed(() =>
  productConfigs.map((p) => ({
    id: p.id,
    namePrefix: p.namePrefix,
    nameSuffix: p.nameSuffix,
    subtitle: t(p.subtitleKey),
    description: t(p.descriptionKey),
    specs: p.specs.map((s) => ({
      value: s.value,
      label: t(s.labelKey),
    })),
    image: p.image,
    alt: t(p.altKey),
    explorePath: p.explorePath,
  }))
);

function goExplore(item) {
  if (item.explorePath) {
    router.push(item.explorePath);
  }
}

function goQuote() {
  router.push("/contactus");
}
</script>

<style lang="less" scoped>
.productPage_productCards {
  width: 100%;
  background: #fff;
  font-family: Montserrat;
}

.productPage_productCards_item {
  position: relative;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 78%;
    height: 2px;
    background: #D0D0D0;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
}

.productPage_productCards_inner {
  width: 100%;
  margin: 0 auto;
  padding: 121px 130px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 106px;
}

.productPage_productCards_left {
  width: 674px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 53px;
  h2, p {
    margin: 0;
  }
}

.productPage_productCards_title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
}

.productPage_productCards_titleStrong {
  color: #000;
  font-size: 96px;
  font-weight: 500;
  line-height: 79.706px; /* 83.027% */
  letter-spacing: -1.249px;
}

.productPage_productCards_titleAccent {
  color: #FF7A1A;
  font-family: "Cormorant Garamond";
  font-size: 96px;
  font-style: italic;
  font-weight: 300;
  line-height: 79.706px;
  letter-spacing: -1.249px;
}

.productPage_productCards_subtitle {
  color: #FF7A1A;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.productPage_productCards_desc {
  color: #6B6B6B;
  font-size: 21.241px;
  line-height: 38.234px;
}

.productPage_productCards_specs {
  width: 566px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #FAFAFA;
}

.productPage_productCards_specCell {
  padding: 15px 17px;
  border-right: 1px solid #EDEDED;
  border-bottom: 1px solid #EDEDED;
  box-sizing: border-box;

  &:nth-child(3n) {
    border-right: none;
  }
  &:nth-last-child(-n + 3) {
    border-bottom: none;
  }
}

.productPage_productCards_specValue {
  color: #0A0A0A;
  font-size: 21px;
  line-height: 21px; 
}

.productPage_productCards_specLabel {
  margin-top: 3px;
  color: #9A9A9A;
  font-size: 10px;
  line-height: 12px;
}

.productPage_productCards_btnExplore {
  height: 54px;
  padding: 0 25px;
  border: none;
  border-radius: 50px;
  background: #000;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: -0.3px;

  &:hover {
    background-color: #FF7A1A;
  }
}

.productPage_productCards_right {
  width: 900px;
  height: 651px;
  border-radius: 40px;
  border: 2px solid rgba(0, 0, 0, 0.22);
  background: #F9F9F9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.productPage_productCards_visual {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}

.productPage_productCards_img {
  width: 545px;
}

.productPage_productCards_btnQuote {
  position: absolute;
  right: 23px;
  bottom: 23px;
  height: 38.69px;
  padding: 0 21.7px;
  border: none;
  border-radius: 166.969px;
  background: #ff7a1a;
  color: #fff;
  font-size: 18.367px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
}

@media (max-width: 767px) {
  .productPage_productCards_item {
    &::after {
      width: 90%;
      height: 0.12vw;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  .productPage_productCards_inner {
    padding: 11.3636vw 6.8182vw 6.302vw;
    gap: 6.0227vw;
  }

  .productPage_productCards_left {
    width: 47.1598vw;
    gap: 2.0455vw;
    h2, p {
      margin: 0;
    }
  }

  .productPage_productCards_title {
    gap: 0.9091vw;
  }

  .productPage_productCards_titleStrong {
    font-size: 7.2727vw;
    line-height: 4.1514vw;
    letter-spacing: -0.065vw;
  }

  .productPage_productCards_titleAccent {
    font-size: 5vw;
    line-height: 4.1514vw;
    letter-spacing: -0.065vw;
  }

  .productPage_productCards_subtitle {
    font-size: 2.2727vw;
    letter-spacing: 0.1041vw;
  }

  .productPage_productCards_desc {
    font-size: 2.2727vw;
    line-height: 2.9545vw;
    max-width: 42.9545vw;
  }

  .productPage_productCards_specs {
    width: 46.8266vw;
    border-radius: 1.0755vw;
    border: 0.0827vw solid rgba(0, 0, 0, 0.07);
  }

  .productPage_productCards_specCell {
    padding: 1.2411vw 1.4066vw;
    border-right: 0.0827vw solid rgba(0, 0, 0, 0.07);
    border-bottom: 0.0827vw solid rgba(0, 0, 0, 0.07);

    &:nth-child(3n) {
      border-right: none;
    }
    &:nth-last-child(-n + 3) {
      border-bottom: none;
    }
  }

  .productPage_productCards_specValue {
    font-size: 1.7375vw;
    line-height: 1;
  }

  .productPage_productCards_specLabel {
    margin-top: 0.2477vw;
    color: #9A9A9A;
    font-size: 0.8273vw;
    line-height: 1.0989;
  }

  .productPage_productCards_btnExplore {
    height: 4.6009vw;
    padding: 0 2.13vw;
    border-radius: 4.26vw;
    font-size: 1.7041vw;
    letter-spacing: -0.0255vw;

    &:hover {
      background-color: #000;
    }
    &:active {
      background-color: #FF7A1A;
    }
  }

  .productPage_productCards_right {
    width: 32.7273vw;
    height: 48.6364vw;
    border-radius: 2.0834vw;
    border: 0.1041vw solid rgba(0, 0, 0, 0.22);
  }

  .productPage_productCards_visual {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .productPage_productCards_img {
    width: 100%;
    &.productPage_productCards_img_d1-ultra {
      width: 25.6818vw;
    }
    &.productPage_productCards_img_d1-max {
      width: 25vw;
    }
    &.productPage_productCards_img_d1-max-pro {
      width: 26.8182vw;
    }
    &.productPage_productCards_img_g1-ultra {
      width: 36.1364vw;
    }
  }

  .productPage_productCards_btnQuote {
    position: absolute;
    right: 2.2123vw;
    bottom: 2.2084vw;
    height: 2.7948vw;
    line-height: 2.7948vw;
    padding: 0 1.565vw;
    border-radius: 12.0389vw;
    font-size: 1.3243vw;
    cursor: pointer;
  }
}
</style>
