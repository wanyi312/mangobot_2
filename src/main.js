import { createApp } from 'vue'
import './style.css'
import 'normalize.css';
import router from './route/index.js'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import i18n from './i18n/index.js'

// index.html 中另通过 <script> 注入 public/config/*.js，挂载 window.Blog / MangobotEvents / Filters
createApp(App).use(router).use(Antd).use(i18n).mount('#app')
