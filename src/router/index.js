import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:"initial",
            component:()=>import("../views/InitialView.vue"),
            children:[
                {
                    path:'',
                    name:'initial-login',
                    component:()=>import("../components/InitialView/Login.vue")
                },
                {
                    path:'register',
                    name:'initial-register',
                    component:()=>import("../components/InitialView/Register.vue")
                }
            ]
        },
        {
            path:'/home',
            name:'home',
            component:()=>import("../views/Home.vue")
        }
    ]
})


//拦截器
router.beforeEach((to, from, next) => {
    const user = useUserStore();
    if(to.matched.length === 0){
      next('/home')
    } else if(user.user != null && to.name.startsWith('initial-')) {
      next('/home')
    } else if(user.user == null && to.fullPath.startsWith('/home')) {
      next('/')
    } else {
      next()
    }
  })

export default router