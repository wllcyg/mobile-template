import { defineStore } from 'pinia'

export const useTitleStore = defineStore('title', {
    state: () => { return  {title:'首页',showTab:true,showNav:false,activePath:'/home'}},
    actions:{
        setPage(title,tab,nav,activePath){
            this.title = title
            this.showTab = tab
            this.showNav = nav
            this.activePath = activePath
        }
    }
})