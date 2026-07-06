/**
 * 产品详情页数据聚合：按型号（A2、X2、D1…）导出各区块配置。
 * - 文案：通过 i18n 的 t/tm 读取 src/i18n/lang/{en,ar}/products/
 * - 图片：本目录 assets/ 静态 import
 * - 使用处：src/views/product/index.vue 根据路由 :id 选取对应键
 */
import i18n from '@/i18n/index.js';
import A2BgImg from './assets/A2-bg.jpg';
import X2BgImg from './assets/X2-bg.jpg';
import D1BgImg from './assets/D1-bg.jpg';
import D1MaxBgImg from './assets/D1-max-bg.jpg';
import D1ProMaxBgImg from './assets/D1-proMax-bg.jpg';
import G1BgImg from './assets/G1-bg.jpg';


import A2Img from './assets/a2-view.jpg';
import X2Img from './assets/x2-view.jpg';
import D1Img from './assets/D1-view-1.jpg';
import D1MaxImg from './assets/d1-pro-view.png';
import D1ProMaxImg from './assets/d1promax-view.jpg';
import G1Img from './assets/videoframe_3186.png';



import D1MaxImg1 from './assets/d1Max-bg-1.jpg';

import D1ProMaxImg1 from './assets/d1promax-bg-1.jpg';
import D1ProMaxImg2 from './assets/d1promax-bg-2.jpg';
import D1ProMaxImg3 from './assets/d1promax-bg-3.jpg';


import G1Img1 from './assets/g1-bg-1.jpg';
import G1Img2 from './assets/g1-bg-2.jpg';
import G1Img3 from './assets/g1-bg-3.jpg';

/**
 * ideal
 */
import D1IdealImg5 from './assets/svg/helicopter.svg';
import D1IdealImg4 from './assets/svg/real-estate-01.svg';
import D1IdealImg3 from './assets/svg/corporate.svg';
import D1IdealImg2 from './assets/svg/factory-02.svg';
import D1IdealImg1 from './assets/svg/house-02.svg';


import X2IdealImg2 from './assets/svg/famicons_school-outline.svg';
import X2IdealImg1 from './assets/svg/mage_gem-stone.svg';
import X2IdealImg3 from './assets/svg/crown.svg';
import X2IdealImg4 from './assets/svg/store-01.svg';

import A2IdealImg1 from './assets/svg/healt.svg';
import A2IdealImg2 from './assets/svg/real-estate-02.svg';

import D1MaxIdealImg1 from './assets/svg/bubble-chat-search.svg';
import D1MaxIdealImg2 from './assets/svg/delivery-truck-02.svg';
import D1MaxAttrsImg3 from './assets/svg/energy-ellipse.svg';
import D1MaxAttrsImg4 from './assets/svg/security-lock.svg';

import D1ProMaxIdealImg1 from './assets/svg/fire.svg';
import D1ProMaxIdealImg2 from './assets/svg/recycle-02.svg';

import G1IdealImg1 from './assets/svg/artificial-intelligence-04.svg';

/**
 * attrs
 */
import A2AttrsImg from './assets/attrs-a2-bg.png';
import X2AttrsImg from './assets/attrs-x2-bg.png';
import D1AttrsImg from './assets/attrs-d1-bg.png';
import D1MaxAttrsImg from './assets/attrs-d1max-bg.png';
import D1ProMaxAttrsImg from './assets/attrs-d1promax-bg.png';
import G1AttrsImg from './assets/attrs-g1-bg.png';


/**
 * capabilities
 */
import A2captop from './assets/a2-top.png';
import A2capbottom from './assets/a2-bot.png';
import X2captop from './assets/x2-top.png';
import X2capbottom from './assets/x2-bot.png';
import D1captop from './assets/d1-top.jpg';
import D1capbottom from './assets/d1-bot.jpg';
import D1Maxcaptop from './assets/max-top.jpg';
import D1Maxcapbottom from './assets/max-bot.jpg';
import D1ProMaxcaptop from './assets/pro-top.png';
import D1ProMaxcapbottom from './assets/pro-bot.png';
import G1captop from './assets/g1-top.png';
import G1capbottom from './assets/g1-bot.png';

const t = (key) => i18n.global.t(key);
const tm = (key) => i18n.global.tm(key);

/** 将 i18n ideal 文案数组合并进图片行配置 */
function mergeIdeal(modelKey, imageRows) {
  const slug = modelKey.toLowerCase();
  const m = tm(`product.${slug}.ideal`);
  if (!Array.isArray(m)) return imageRows.map((r) => ({ ...r }));
  return imageRows.map((r, i) => ({ ...r, ...(m[i] || {}) }));
}

export default {
    productHeader: {
        A2: {
            title: ["A2", "Ultra"],
            desc: t("product.a2.desc"),
            descText: t("product.a2.descText"),
            buttonText: t("product.a2.buttonText"),
            buttons: [t("product.a2.button0"), t("product.a2.button1")],
            bgImgUrl: A2BgImg,
            className: 'a2',
        },
        X2: {
            title: ["X2", "Ultra"],
            desc: t("product.x2.desc"),
            descText: t("product.x2.descText"),
            buttonText: t("product.x2.buttonText"),
            buttons: [t("product.x2.button0"), t("product.x2.button1")],
            bgImgUrl: X2BgImg,
            className: 'x2',
        },
        D1: {
            title: ["D1", "Ultra"],
            desc: t("product.d1.desc"),
            descText: t("product.d1.descText"),
            buttonText: t("product.d1.buttonText"),
            buttons: [t("product.d1.button0"), t("product.d1.button1")],
            bgImgUrl: D1BgImg,
            className: 'd1',
        },
        D1MAX: {
            title: ["D1", "Max"],
            desc: t("product.d1max.desc"),
            descText: t("product.d1max.descText"),
            buttonText: t("product.d1max.buttonText"),
            buttons: [t("product.d1max.button0"), t("product.d1max.button1")],
            bgImgUrl: D1MaxBgImg,
            className: 'd1max',
        },
        D1PROMAX: {
            title: ["D1", "Max Pro"],
            desc: t("product.d1promax.desc"),
            descText: t("product.d1promax.descText"),
            buttonText: t("product.d1promax.buttonText"),
            buttons: [t("product.d1promax.button0"), t("product.d1promax.button1")],
            bgImgUrl: D1ProMaxBgImg,
            className: 'd1promax',
        },
        G1: {
            title: ["G1", "Ultra"],
            desc: t("product.g1.desc"),
            descText: t("product.g1.descText"),
            buttonText: t("product.g1.buttonText"),
            buttons: [t("product.g1.button0"), t("product.g1.button1")],
            bgImgUrl: G1BgImg,
            className: 'g1',
        }
    },
    productView: {
        A2: {
            title: t('product.a2.viewTitle'),
            title1: t('product.a2.viewTitle1'),
            desc: t('product.a2.viewDesc'),
            imgUrl: A2Img,
            className: 'a2',
        },
        X2: {
            title: t('product.x2.viewTitle'),
            title1: t('product.x2.viewTitle1'),
            desc: t('product.x2.viewDesc'),
            imgUrl: X2Img,
            className: 'x2',
        },
        D1: {
            title: t('product.d1.viewTitle'),
            title1: t('product.d1.viewTitle1'),
            desc: t('product.d1.viewDesc'),
            imgUrl: D1Img,
            className: 'd1',
        },
        D1MAX: {
            title: t('product.d1max.viewTitle'),
            title1: t('product.d1max.viewTitle1'),
            desc: t('product.d1max.viewDesc'),
            imgUrl: D1MaxImg,
            className: 'd1max',
        },
        D1PROMAX: {
            title: t('product.d1promax.viewTitle'),
            title1: t('product.d1promax.viewTitle1'),
            desc: t('product.d1promax.viewDesc'),
            imgUrl: D1ProMaxImg,
            className: 'd1promax',
        },
        G1: {
            title: t('product.g1.viewTitle'),
            title1: t('product.g1.viewTitle1'),
            desc: t('product.g1.viewDesc'),
            imgUrl: G1Img,
            className: 'g1',
        }
    },
    bgImgs: {
        A2: {
            imgs: [
                {
                    url: 'https://media.mangobot.org/DSC03933.jpg',
                    className: 'a2Img1',
                },
                {
                    url: 'https://media.mangobot.org/a2-bg-2.jpg',
                    className: 'a2Img2',
                },
                {
                    url: 'https://media.mangobot.org/a2-bg-3.jpg',
                    className: 'a2Img3',
                },
            ]
        },
        X2: {
            imgs: [
                {
                    url: 'https://media.mangobot.org/x2-bg-1.jpg',
                    className: 'x2Img1',
                },
                {
                    url: 'https://media.mangobot.org/x2-bg-2.jpg',
                    className: 'x2Img2',
                },
                {
                    url: 'https://media.mangobot.org/x2-bg-3.jpg',
                    className: 'x2Img3',
                },
            ]
        },
        D1: {
            imgs: [
                {
                    url: 'https://media.mangobot.org/d1-bg-1.jpg',
                    className: 'd1Img1',
                },
                {
                    url: 'https://media.mangobot.org/d1-bg-2.jpg',
                    className: 'd1Img2',
                },
                {
                    url: 'https://media.mangobot.org/d1-bg-3.jpg',
                    className: 'd1Img3',
                },
            ]
        },
        D1MAX: {
            imgs: [
                {
                    url: D1MaxImg1,
                    className: 'd1MaxImg1',
                },
            ]
        },
        D1PROMAX: {
            imgs: [
                {
                    url: D1ProMaxImg1,
                    className: 'd1ProMaxImg1',
                },
                {
                    url: D1ProMaxImg2,
                    className: 'd1ProMaxImg2',
                },
                {
                    url: D1ProMaxImg3,
                    className: 'd1ProMaxImg3',
                },
            ]
        },
        G1: {
            imgs: [
                {
                    url: G1Img1,
                    className: 'g1Img1',
                },
                {
                    url: G1Img2,
                    className: 'g1Img2',
                },
                {
                    url: G1Img3,
                    className: 'g1Img3',
                },
            ]
        },
    },
    ideal: {
        A2: mergeIdeal('A2', [
            { imgUrl: A2IdealImg2 },
            { imgUrl: X2IdealImg4 },
            { imgUrl: D1IdealImg3 },
            { imgUrl: X2IdealImg3 },
            { imgUrl: A2IdealImg1 },
        ]),
        D1: mergeIdeal('D1', [
            { imgUrl: D1IdealImg1 },
            { imgUrl: D1IdealImg2 },
            { imgUrl: D1IdealImg3 },
            { imgUrl: D1IdealImg4 },
            { imgUrl: D1IdealImg5 },
        ]),
        X2: mergeIdeal('X2', [
            { imgUrl: D1IdealImg3 },
            { imgUrl: X2IdealImg4 },
            { imgUrl: X2IdealImg2 },
            { imgUrl: X2IdealImg3 },
            { imgUrl: X2IdealImg1 },
        ]),
        D1MAX: mergeIdeal('D1MAX', [
            { imgUrl: D1MaxAttrsImg4 },
            { imgUrl: D1MaxAttrsImg3 },
            { imgUrl: D1MaxIdealImg2 },
            { imgUrl: D1MaxIdealImg1 },
            { imgUrl: A2IdealImg1 },
        ]),
        D1PROMAX: mergeIdeal('D1PROMAX', [
            { imgUrl: D1IdealImg2 },
            { imgUrl: D1MaxIdealImg2 },
            { imgUrl: D1ProMaxIdealImg1 },
            { imgUrl: D1ProMaxIdealImg2 },
        ]),
        G1: mergeIdeal('G1', [
            { imgUrl: D1IdealImg2 },
            { imgUrl: G1IdealImg1 },
            { imgUrl: A2IdealImg2 },
            { imgUrl: X2IdealImg3 },
        ])
    },
    attrs: {
        A2: {
            ...tm('product.a2.attrs'),
            imgUrl: A2AttrsImg,
            className: 'a2Img1',
        },
        X2: {
            ...tm('product.x2.attrs'),
            imgUrl: X2AttrsImg,
            className: 'x2Img1',
        },
        D1: {
            ...tm('product.d1.attrs'),
            imgUrl: D1AttrsImg,
            className: 'd1Img1',
        },
        D1MAX: {
            ...tm('product.d1max.attrs'),
            imgUrl: D1MaxAttrsImg,
            className: 'd1MaxImg1',
        },
        D1PROMAX: {
            ...tm('product.d1promax.attrs'),
            imgUrl: D1ProMaxAttrsImg,
            className: 'd1ProMaxImg1',
        },
        G1: {
            ...tm('product.g1.attrs'),
            imgUrl: G1AttrsImg,
            className: 'g1Img1',
        }
    },
    capabilities: {
        A2: {
            ...tm('product.a2.capabilities'),
            topImgUrl: A2captop,
            bottomImgUrl: A2capbottom,
            className: 'a2Capabilities1',
        },
        X2: {
            ...tm('product.x2.capabilities'),
            topImgUrl: X2captop,
            bottomImgUrl: X2capbottom,
            className: 'x2Capabilities1',
        },
        D1: {
            ...tm('product.d1.capabilities'),
            topImgUrl: D1captop,
            bottomImgUrl: D1capbottom,
            className: 'd1Capabilities1',
        },
        D1MAX: {
            ...tm('product.d1max.capabilities'),
            topImgUrl: D1Maxcaptop,
            bottomImgUrl: D1Maxcapbottom,
            className: 'd1MaxCapabilities1',
        },
        D1PROMAX: {
            ...tm('product.d1promax.capabilities'),
            topImgUrl: D1ProMaxcaptop,
            bottomImgUrl: D1ProMaxcapbottom,
            className: 'd1ProMaxCapabilities1',
        },
        G1: {
            ...tm('product.g1.capabilities'),
            topImgUrl: G1captop,
            bottomImgUrl: G1capbottom,
            className: 'g1Capabilities1',
        }
    },
    video: {
        A2: {
            ...tm('product.a2.video'),
            videoUrl: '',
            bgImgUrl: '',
            videoUrls: ['https://media.mangobot.org/2026020509.mp4'],
        },
        X2: {
            ...tm('product.x2.video'),
            videoUrl: '',
            bgImgUrl: '',
            videoUrls: ['https://media.mangobot.org/2026020509.mp4'],
        }
    }
};