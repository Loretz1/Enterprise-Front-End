import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './assets/main.css'
import Router from './router'
import axios from 'axios'
import * as echarts from 'echarts'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(Router)
app.config.globalProperties.$axios=axios
app.config.globalProperties.$echarts = echarts



app.mount('#app')

