import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contentManagement from '@/components/components/contentManagement'
import other from '@/components/components/other'
import select from '@/components/components/select'
import calendar from '@/components/components/calendar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/contentManagement',
          name: 'contentManagement',
          component: contentManagement
        },
        {
          path: '/other',
          name: 'other',
          component: other
        },
        {
          path: '/select',
          name: 'select',
          component: select
        },
        {
          path: '/calendar',
          name: 'calendar',
          component: calendar
        }
      ]
    }
  ]
})
