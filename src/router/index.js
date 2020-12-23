import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        title:'首页'
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta:{
        title:'关于'
      },
      //组件独享守卫
      beforeEnter: (to, from, next) => {
        // console.log("组件独享守卫");
       next();
      }
    },
    {
      path: '/user/:abc',
      component: User,
      meta:{
        title:'用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        title:'档案'
      }
    }
  ]
})
//前置守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   document.title=to.matched[0].meta.title;
//   next()
// })
//后置钩子
router.afterEach((to,from)=>{

})
export default router