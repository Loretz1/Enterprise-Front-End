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
            redirect:'/home/region',
            component:()=>import("../views/HomeView.vue"),
            children:[
              {
                path:'region',
                name:'home-region',
                component:()=>import("../components/HomeView/Region.vue")
              },
              {
                path:'search',
                name:'home-search',
                component:()=>import("../components/HomeView/Search.vue")
              },
              {
                path:'index',
                name:'home-index',
                component:()=>import("../components/HomeView/Index.vue")
              },
              {
                path:'enterprise',
                name:'home-enterprise',
                component:()=>import("../components/HomeView/Enterprise.vue")
              },
              {
                path:'follow',
                name:'home-follow',
                component:()=>import("../components/HomeView/Follow.vue")
              }
            ]
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