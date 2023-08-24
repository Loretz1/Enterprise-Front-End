import { defineStore } from 'pinia'
import { ssrContextKey } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => {
    return { user:null }
  },
  actions: {
    login(u){
        this.user=u;
    },
    logout(){
        this.user=null;
    }
  },
  persist:{
    storage:localStorage,
    paths:['user']
  }
})