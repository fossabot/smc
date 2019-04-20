import Vue from 'vue'
import Router from 'vue-router'
import Home from './vue/Home.vue'
import NotFound from './vue/NotFound.vue'
import lotties from './vue/tools/Lotties.vue'
import Upload from './vue/Upload.vue'
import Login from './vue/Login.vue'
import SignUp from './vue/SignUp.vue'

Vue.use(Router);

import AV from 'leancloud-storage'

import current_app_id from '!raw-loader!../.leancloud/current_app_id';
import current_app_key from '!raw-loader!../.leancloud/current_app_key';

AV.init({
  appId: current_app_id,
  appKey: current_app_key,
})

Vue.prototype.$AV = AV;


const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: {
        title: '登录',
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页入口',
        requiresAuth: true,
      }
    },
    {
      path: '/u',
      name: 'upload',
      component: Upload,
      meta: {
        title: '七牛上传',
        requiresAuth: true,
      }
    },
    {
      path: '/mescroll',
      name: 'Mescroll',
      meta: {
        title: 'mescroll测试页'
      },
      component: () => {
        import('./vue/Mescroll.vue');

      }
    },
    {
      path: '/lotties',
      name: 'lotties',
      meta: {
        title: 'lotties'
      },
      component: lotties
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      //路线级别代码分隔
      // this generates a separate chunk (about.[hash].js) for this route
      //这将为该路由生成一个单独的块(大约.[hash].js)
      // which is lazy-loaded when the route is visited.
      //当访问路由时，它会进行懒加载加载。
      component: () => import(/* webpackChunkName: "about" */ './vue/About.vue')
    },
    {
      /* Not Found 路由，必须是最后一个路由 */
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '404 Not Found'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {//to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
  document.title = to.meta.title;//给出指定的标题名称



  if (to.path === '/login') { next() }  // 如果即将进入登录路由，则直接放行

  else {     //进入的不是登录路由

    if (to.meta.requiresAuth && !AV.User.current()) {
      console.log('还没登录');
      next({
        name: 'login',
        query: {
          redirect: to.fullPath//留下原来要到达的路径信息，等用户登录好之后，再进行跳转
        }
      })

    }

    //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由

    else { next() }
  }  //如果不需要登录验证，或者已经登录成功，则直接放行

})


export default router