import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:{name:'HomePage'},
    },
    {
      path: '',
      name: 'HomePage',
      component: () => import('@/views/HomePage'),
      meta: {
        breadcrumbTitle: '首页',
        requiresPermission: 'homepage',
      },
    },
    {
      path:'/brand',
      name:'BrandIntroduction',
      component: () => import('@/views/brandIntroduction/Index'),
      meta: {
        breadcrumbTitle: '品牌介绍',
        requiresPermission: 'brandIntroduction',
      },
    },
    {
      path:'/contact',
      name:'ContactUs',
      component: () => import('@/views/contact/Index.vue'),
      meta: {
        breadcrumbTitle: '联系我们',
        requiresPermission: 'contact',
      },
    }

  ]
})
