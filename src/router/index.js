import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/components/detail'
import ajouter from '@/components/ajouter'



Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/ajouter',
            name: 'ajouter',
            component: ajouter
        }
    ]
})