import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import detail from '@/components/page/detail'
import list from '@/components/page/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail
    },
      {
          path: '/list',
          name: 'list',
          component: list
      },
  ]
})
