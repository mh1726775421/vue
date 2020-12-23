<template>
  <div>
    <h1>这里是user界面</h1>
    <!-- <h2>{{ userId }}</h2> -->
  </div>
</template>

<script>
export default {
  computed:{
    userId(){
     return this.$route.params.abc;
    }
  }
};
</script>

<style>
</style>