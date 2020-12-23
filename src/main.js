import Axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { request } from './network/request'
Vue.config.productionTip = false
// console.log(App);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,store,
  render: h => h(App)
  // render:function(h){
  //   return h(App)
  // }
})
// 1.基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })
// axios.get();
// 2.参数拼接
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   },
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })
// 3.axios发送并发请求,全局配置，get请求方式可以设置params,post请求方式传的是data
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
// axios.all([axios({url:'/home/multidata'}),
// axios({url:'/home/data',
//       params:{
//         type:'sell',
//         page:5
// }})]).then(result=>{
//       console.log(result);
// })
// 4.开发是一般是创建对应的axios实例
// const instance1=axios.create({
//   baseURL:'http://222.111.33.33:8000',
//   timeout:5000
// })
// instance1({url:'/home/multidata'}).then(res=>
//   console.log(res))
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })
// 5.封装request模块

request({
  url:'/home/multidata'
})
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);})