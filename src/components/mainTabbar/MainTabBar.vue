<template>
  <TabBar>
    <TabBarItem path="/home">
      <div slot="item-text">首页</div>
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
    </TabBarItem>
    <TabBarItem path="/about">
      <div slot="item-text">分类</div>
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
    </TabBarItem>
    <TabBarItem path="/user/userId">
      <div slot="item-text">购物车</div>
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
    </TabBarItem>
    <TabBarItem path="/profile">
      <div slot="item-text">我的</div>
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
