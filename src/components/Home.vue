<template>
  <div>
    <h1>我是首页</h1>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return {
      path:'/home/news'
    }
  },
  created() {
    // console.log("created");
  },
  activated() {
    this.$router.push(this.path);
  },
  // deactivated() {},
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.path=this.$route.path;
    next();
  },
};
</script>

<style>
</style>