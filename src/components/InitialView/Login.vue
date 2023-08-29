<template>
    <div style="text-align: center;margin: 150px 30px 0 30px">
        <div>
            <div style="font-size:25px;font-weight: bold">登录</div>
            <div style="font-size:14px;color: grey;">企业大数据征信系统</div>
        </div>
        <div style="margin-top: 50px">
            <el-input type="text"
                      v-model="logAccount.account"
                      placeholder="用户名"
                      prefix-icon="User"
                      :class="{'applyShake': isShakeTextName.isShake_1}"
                      clearable>
            </el-input>
            <el-input type="password"
                      v-model="logAccount.password"
                      placeholder="密码"
                      prefix-icon="Lock"
                      :class="{'applyShake': isShakeTextName.isShake_2}"
                      style="margin-top: 10px"
                      clearable>
            </el-input>
        </div>
        <div style="margin-top: 40px">
            <el-button @click="Login" style="width: 270px" type="success" plain>登录</el-button>
        </div>
        <el-divider></el-divider>
        <div>
            <el-button @click="router.push('/register')" style="width: 270px" type="warning" plain>立即注册</el-button>
        </div>
    </div>
</template>

<script>
import router from "@/router";
import {ElMessage} from "element-plus";
import { useUserStore } from '../../stores/user'

export default{
    data(){
        return{
            router:router,
            user:useUserStore(),
            logAccount:{
                account:"",
                password:""
            },
            //缺少信息时输入框抖动提醒
            isShakeTextName:{ 
                isShake_1:false,
                isShake_2:false
            }
        }
    },
    methods:{
        Login(){
            //缺少信息抖动
            if(!this.logAccount.account){
                this.isShakeTextName.isShake_1=true;
                setTimeout(()=>{this.isShakeTextName.isShake_1=false},800)
            }
            if(!this.logAccount.password){
                this.isShakeTextName.isShake_2=true;
                setTimeout(()=>{this.isShakeTextName.isShake_2=false},800)
            }
            if(this.logAccount.account&&this.logAccount.password){
                //axios请求
                // this.$axios({
                //     url: "/api/user/login",
                //     method: "post",
                //     data: {
                //         userName:this.logAccount.account,
                //         password:this.logAccount.password,
                //     },
                // })
                // .then((res) => {
                //     if(res.status===200){
                //         ElMessage.success(res.msg)
                //         this.user.login(this.logAccount.account);
                //         router.push('/home');                        
                //     }
                //     else if(res.status===400){
                //         ElMessage.warning(res.msg)
                //         this.logAccount.password=""
                //         if(res.data===-1)
                //         this.logAccount.userName=""
                //     }
                //     else{
                //         ElMessage.warning(res.msg)
                //     }
                // })
                // .catch((err) => {
                //     ElMessage.error(res.msg);
                // });
                this.user.login(this.logAccount.account);
                ElMessage.success("登录成功")
                router.push('/home');
            }
        }
    }
}
</script>

<style scoped>
/* 输入框动画 */
.applyShake{
    animation: shake 0.82s cubic-bezier(0.36,0.07,0.19,0.97) both;
}
@keyframes shake {
    10%,90%{
        transform: translate3d(-1px,0,0);
    }
    20%,80%{
        transform: translate3d(2px,0,0);
    }
    30%,50%,70%{
        transform: translate3d(-4px,0,0);
    }
    40%,60%{
        transform: translate3d(4px,0,0);
    }
}
</style>