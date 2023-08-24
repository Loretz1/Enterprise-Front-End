<template>
    <div>
      <div style="margin-top: 10px;">
            <el-button class="back_btn" @click="router.push('/')" plain>
                返回登陆
            </el-button>
        </div>
      <div style="text-align: center;margin: 104.4px 30px 0 30px">
          <div style="">
              <div style="font-size:25px;font-weight: bold">注册新用户</div>
              <div style="font-size:14px;color: grey;">请填写下方所有信息，完成注册</div>
          </div>
          <div style="margin-top: 50px">
              <el-form :model="form" :rules="rules" ref="formRef">
                  <el-form-item prop="username">
                      <el-input v-model="form.username"  type="text" placeholder="用户名">
                          <template #prefix>
                              <el-icon><User /></el-icon>
                          </template>
                      </el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                      <el-input v-model="form.password"  type="password" placeholder="密码">
                          <template #prefix>
                              <el-icon><Lock /></el-icon>
                          </template>
                      </el-input>
                  </el-form-item>
                  <el-form-item prop="password_repeat">
                      <el-input v-model="form.password_repeat"  type="password" placeholder="重复密码">
                          <template #prefix>
                              <el-icon><Lock /></el-icon>
                          </template>
                      </el-input>
                  </el-form-item>
              </el-form>
          </div>
          <div style="margin-top: 40px">
              <el-button style="width: 270px" type="warning" @click="register" plain>注册</el-button>
          </div>
      </div>
    </div>
    </template>
    
    <script setup>
    import router from "@/router";
    import {reactive, ref} from "vue";
    import {ElMessage} from "element-plus";
    
    
    const form = reactive({
        username: '',
        password: '',
        password_repeat: ''
    })
    
    //用户名只能包含英文、数字、下划线
    const validateUsername = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入用户名'))
        } else if(!/^[a-zA-Z0-9_]*$/.test(value)){
            callback(new Error('用户名只能由英文、数字、下划线组成'))
        } else {
            callback()
        }
    }
    
    
    const validatePassword = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'))
        } else if (value !== form.password) {
            callback(new Error("两次输入的密码不一致"))
        } else {
            callback()
        }
    }
    
    //表单验证规则
    const rules = {
        username: [
            { validator: validateUsername, trigger: ['blur', 'change'] },
            { min: 2, max: 8, message: '用户名的长度必须在2-8个字符之间', trigger: ['blur', 'change'] },
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '密码的长度必须在6-16个字符之间', trigger: ['blur', 'change'] }
        ],
        password_repeat: [
            { validator: validatePassword, trigger: ['blur', 'change'] },
        ]
    }
    
    const formRef = ref()
    
    const register = () => {
        formRef.value.validate((isValid) => {
            if(isValid) {
                //post请求，注册用户
                    ElMessage.success("注册成功")
                    router.push("/")
            } else {
                ElMessage.warning('请正确填写注册表单内容！')
            }
        })
    }
    </script>
    
    <style scoped>
    .back_btn{
        border-radius: 0 15px 15px 0;
        border-left: none;
        padding:17px 10px;
        border-color: blanchedalmond;
        color: #c4987a;
    }
    .back_btn:hover{
        color: #a2580e;
    }
    </style>