import Vue from 'vue'
import Router from 'vue-router'
/* import layout from '@/pages/layout'
import Recom from '@/pages/recom/main'
import Toplist from '@/pages/toplist/main' */
const layout = r => require.ensure([], () => r(require('@/pages/layout')), 'layout')
const Recom = r => require.ensure([], () => r(require('@/pages/recom/main')), 'Recom')
const Toplist = r => require.ensure([], () => r(require('@/pages/toplist/main')), 'Toplist')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/recom',
          name: 'recom',
          component: Recom
        },
        {
          path: '/toplist',
          name: 'toplist',
          component: Toplist
        }
      ]
    }
  ]
})
