import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/target',
      name: 'target',
      component: require('@/components/target/index').default,
      meta: {
        keep: true,
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/set',
      name: 'set',
      component: require('@/components/set/index').default,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/operation',
      name: 'operation',
      component: require('@/components/operation/index').default
    },
    {
      path: '/money',
      name: 'money',
      component: require('@/components/money/index').default
    },
    {
      path: '/earnings',
      name: 'earnings',
      component: require('@/components/earnings/index').default
    },
    {
      path: '/my',
      name: 'my',
      component: require('@/components/my/index').default
    },
    {
      path: '*',
      redirect: '/target'
    }
  ]
})
