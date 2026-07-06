<template>
  <span
    class="svg-icon"
    :style="wrapperStyle"
    v-html="svgContent"
  />
</template>

<script setup>
import { ref, computed, watch, defineProps } from 'vue';

const props = defineProps({
  /** 资源路径，如 'logo'、'logo.svg'、'Applications/ai-laptop.svg' */
  src: { type: String, required: true },
  /** 颜色，会作用到 currentColor，便于 SVG 继承 */
  color: { type: String, default: '' },
  /** 宽度，如 '24px'、24 */
  width: { type: [String, Number], default: undefined },
  /** 高度，如 '24px'、24 */
  height: { type: [String, Number], default: undefined },
});

const svgContent = ref('');

const normalizedPath = computed(() => {
  let s = props.src.trim();
  if (!s.endsWith('.svg')) s += '.svg';
  return s.replace(/\\/g, '/');
});

const wrapperStyle = computed(() => {
  const s = {};
  if (props.color) s.color = props.color;
  if (props.width != null) {
    s.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  if (props.height != null) {
    s.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  return s;
});

const globModules = import.meta.glob('@/assets/imgs/**/*.svg', {
  query: '?raw',
  import: 'default',
});

function findGlobKey() {
  const name = normalizedPath.value;
  
  const keys = Object.keys(globModules);
  return keys.find((k) => {
    const normalized = k.replace(/\\/g, '/').replace(/^\/src\/assets\/imgs\//, '');
    // return normalized === name || normalized.endsWith('/' + name) || normalized.endsWith(name);
    return normalized === name;
  });
}

async function loadSvg() {
  const key = findGlobKey();
  if (!key) {
    console.warn('[SvgIcon] SVG not found:', props.src, '(resolved:', normalizedPath.value + ')');
    svgContent.value = '';
    return;
  }
  const loader = globModules[key];
  const raw = await loader();
  svgContent.value = raw;
}

watch([normalizedPath], loadSvg, { immediate: true });
</script>

<style lang="scss" scoped>
.svg-icon {
  display: flex;
  :deep() {
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>