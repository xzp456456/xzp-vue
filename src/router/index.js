import Vue from 'vue'
import Router from 'vue-router'
import addEquipment from '@/pages/addEquipment'
import distributor from '@/pages/distributor'
import Element from '@/pages/Element'
import equipment from '@/pages/equipment'
import feedback from '@/pages/feedback'
import index from '@/pages/index'
import myInfo from '@/pages/myInfo'
import order from '@/pages/order'
import recharge from '@/pages/recharge'
import record from '@/pages/record'
import repair from '@/pages/repair'
import roll from '@/pages/roll'
import self from '@/pages/self'
import shareGift from '@/pages/shareGift'
import suggestion from '@/pages/suggestion'
import Waterrecords from '@/pages/Waterrecords'
import wd from '@/pages/wd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/addEquipment',
      name: 'addEquipment',
      component: addEquipment
    },
    {
      path: '/distributor',
      name: 'distributor',
      component: distributor
    },
    {
      path: '/element',
      name: 'element',
      component: Element
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: equipment
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/repair',
      name: 'repair',
      component: repair
    },
    {
      path: '/roll',
      name: 'roll',
      component: roll
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/shareGift',
      name: 'shareGift',
      component: shareGift
    },
    {
      path: '/suggestion',
      name: 'suggestion',
      component: suggestion
    },
    {
      path: '/Waterrecords',
      name: 'Waterrecords',
      component: Waterrecords
    },
    {
      path: '/wd',
      name: 'wd',
      component: wd
    }
  ]
})
