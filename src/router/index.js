import Vue from 'vue'
import Router from 'vue-router'
const layout = r => require.ensure([], () => r(require('@/pages/layout')), 'layout')
const Recom = r => require.ensure([], () => r(require('@/pages/recom/main')), 'Recom')
const Toplist = r => require.ensure([], () => r(require('@/pages/toplist/main')), 'Toplist')
const Toplistinfo = r => require.ensure([], () => r(require('@/pages/toplist/toplist')), 'Toplistinfo')
const Search = r => require.ensure([], () => r(require('@/pages/search/main')), 'Search')
Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/recom',
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
        },
        {
          path: '/search',
          name: 'search',
          component: Search
        },
        {
          path: '/toplistinfo',
          name: 'toplistinfo',
          component: Toplistinfo
        }
      ]
    }
  ]
})
