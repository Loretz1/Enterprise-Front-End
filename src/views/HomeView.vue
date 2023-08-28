<template>
    <div style="width: 100vw;height: 100vh">
        <!-- 你好，{{user.user}}
        <el-button @click="logout">退出</el-button> -->
        <el-container style="height: 100%;">
            <el-header class="header">
                <div style="display: flex;justify-content: space-between;">
                    <div class="left">
                        <div class="logo" @click="to_region">LOGO</div>
                        <el-input class="search" v-model="searchContent" type="text" placeholder="搜索企业" clearable></el-input>
                        <el-button class="searchbtm" icon="Search" @click="search" circle />
                    </div>
                    <div class="right">
                        <el-button class="header-filter" title="索引" icon="Filter"  @click="to_index" circle />
                        <el-button class="followingbtm" title="我的关注" icon="Avatar" @click="to_follow" circle />
                        <span class="header-username" :title="user.user">您好，{{ user.user }}</span>
                        <el-button class="logoutbtm" title="登出" icon="SwitchButton" @click="logout" circle />
                    </div>
                </div>
            </el-header>
            <el-main class="main">
                <RouterView class="main-router"></RouterView>
            </el-main>
        </el-container>
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
            searchContent:null,
        }
    },
    methods:{
        to_region(){
            router.push('/home')
        },
        search(){
            router.push('/home/search');
        },
        to_index(){
            router.push('/home/index');
        },
        to_follow(){
            router.push('/home/follow');
        },
        logout(){
            ElMessage.success("登出成功")
            router.push('/');
            this.user.logout();
        },
    }
}
</script>

<style scoped>
.header{
    padding: 0;
    height: 50px;
    background: linear-gradient(to bottom right, #2F83E4, #00E5C1);
}
.header .left{
    height: 50px;
    display: flex;
    align-items: center;
}
.header .left .logo{
    margin-left: 15px;
    /* 换成透明色文字图片 */
    color: grey;
    cursor: pointer;
}
.header .left .search{
    margin-left: 15px;
    height: 33px;
    width:170px;
}
.header .left .searchbtm{
    margin-left: 5px;
    background-color: #F4F8FB;
    color:#4f93e0
}
.header .left .searchbtm:hover{
    margin-left: 5px;
    background-color: #4f93e0;
    border-color:#4f93e0 ;
    color:#F4F8FB
}
.header .right{
    height: 50px;
    display: flex;
    align-items: center;
}
.header .right .header-filter{
    background-color: #F4F8FB;
    color:#03bb9f
}
.header .right .header-filter:hover{
    color: #F4F8FB;
    background-color: #00E5C1;
    border-color: #00E5C1;
}
.header .right .followingbtm{
    background-color: #F4F8FB;
    color:#03bb9f
}
.header .right .followingbtm:hover{
    color: #F4F8FB;
    background-color: #00E5C1;
    border-color: #00E5C1;
}
.header .right .header-username{
    width: 130px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    margin-left: 15px;
    margin-right: 15px;
    color:#206c62;
}
.header .right .logoutbtm{
    margin-right: 15px;
    color: rgb(229, 36, 36);
}
.header .right .logoutbtm:hover{
    color: rgb(227, 222, 222);
    background-color:rgb(245, 108, 108) ;
    border-color: rgb(193, 46, 46);
}
.main{
    padding:4px;
    background-color:#F4F8FB;
    /* background-size: cover; */
    position: relative;
}
/* .main-router{
    position: absolute;
    margin: auto;
    left: 0;
    right:0;
    top: 0;
    bottom: 0;
} */
.el-input /deep/ .el-input__wrapper {
    background-color: rgb(21,184,209);
    --el-input-border-color: rgb(21,184,209);
    --el-input-focus-border-color:white;
    --el-input-placeholder-color:#dde2ea;
    --el-input-text-color:#dde2ea;
}
</style>