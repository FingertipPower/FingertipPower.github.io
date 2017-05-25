import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Keywords from '@/components/keywords'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/keywords',
      name: 'keywords',
      component: Keywords
    }
  ]
})
