<template>
    <div style="width: 100vw;height: 100vh">
        你好，{{user.user}}
        <el-button @click="logout">退出</el-button>
    </div>
</template>

<script>
import router from "@/router";
import {ElMessage} from "element-plus";
import { useUserStore } from '../stores/user'

export default{
    data(){
        return{
            router:router,
            user:useUserStore(),
        }
    },
    methods:{
        logout(){
            this.user.logout();
            router.push('/');
        }
    }
}
</script>

<style scoped>
</style>