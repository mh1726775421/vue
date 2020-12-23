<template>
  <div id="app">
    <!-- <router-link to='/home' tag='button'>首页</router-link>
    <router-link to='/about'>关于</router-link> -->
    <!-- <button @click='homeClick'>首页</button>
    <button @click='aboutClick'>关于</button> -->
    <!-- <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile',query:{
      name:'hhh',age:18
    }}">我的</router-link> -->
    <!-- <button @click='userClick()'>用户</button>
    <button @click='profileClick()'>档案</button>
    <keep-alive exclude="Profile"><router-view/></keep-alive> -->
    <MainTabBar></MainTabBar>
    <Vuex></Vuex>
    <div>{{result}}</div>
    <!-- <button>{{$store.state.count}}</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/mainTabbar/MainTabBar'
import Vuex from 'components/Vuex'
export default {
  name: 'App',
  data(){
    return {
      userId:"zhangsan",
      result:''
      // count:1
    }
  },
  components:{
    MainTabBar,Vuex
  },
  // created(){
  //   axios({url:"http://123.207.32.32:8000/home/data?type=sell&page=2"}).then
  //   (res=>{
  //     console.log(res);
  //   })
  // },
  methods:{
    homeClick(){
      this.$router.push('/home');
    },
    aboutClick(){
      this.$router.push('/about');
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',query:{
          name:'hhh',age:22
        }
      })
    }
  }
}
</script>

<style>
@import './assets/css/base.css';
/* .router-link-active{
  color:crimson;
} */

</style>
