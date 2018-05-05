import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Top10 from '@/pages/list'
import Loading from '@/pages/loading'
import Form from '@/pages/form'
import Chat from '@/pages/chat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/top10',
      name: 'Top10',
      component: Top10
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/chat/:id',
      name: 'Chat',
      component: Chat
    }
  ]
})
