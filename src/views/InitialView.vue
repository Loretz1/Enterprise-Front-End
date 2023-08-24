<template>
    <div style="width:100vw;height: 100vh;display: flex;overflow: hidden">
        <div style="flex:1;">
          <el-image style="width: 100%;height: 100%;" fit="cover" :src=img></el-image>
        </div>
        <div class="introduction">
            <div style="font-size: 30px;font-weight: bold">欢迎来到企业大数据征信平台</div>
            <div style="margin-top: 10px">该平台能够为您提供企业的信用信息</div>
            <div style="margin-top: 5px">请先登录</div>
        </div>
        <div style="width: 400px;background-color: blanchedalmond;z-index: 1">
            <router-view v-slot="{ Component}">
                <transition name="el-zoom-in-center" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </div>
    </div>
  </template>
  
  <script>
  import background from "../components/image/log.jpg"
  
  export default {
      data(){
          return{
              img:background,//左侧图片
          }
      }
  
  }
  </script>
  
  <style scoped>
  .introduction {
      position: absolute;
      bottom: 30px;
      left: 30px;
      color: white;
      text-shadow: 0 0 10px black;
  }
  </style>