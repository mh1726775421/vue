<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="add5()">+5</button>
    <button @click="addstu()">增加学生</button>
    <button @click="delmutation()">响应式更新mutation</button>
    <button @click='delActions()'>响应式更新actions</button>
    <h1>{{$store.state.info}}</h1>
    <div>{{ $store.getters.more20 }}</div>
    <div>{{ $store.getters.more20Length }}</div>
    <div>{{ $store.getters.morex(9) }}</div>
    <h1>模块A:{{$store.state.a.name}}</h1>
    <button @click='updateName()'>通过模块修改名字</button>
    <h1>模块A:{{$store.getters.fullName}}</h1>
    <button @click='asyUpdate()'>模块actions</button>

  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    },
    add5() {
      let count5=5;
      this.$store.commit("increment5", count5);
    },
    addstu() {
      const stu = { name: "dd", age: 15 };
      this.$store.commit("incrementStu", stu);
    },
    delmutation(){
      this.$store.commit('update');
    },
    delActions(){
      // this.$store.dispatch("Aupdate",{
      //   message:'我是携带的信息',
      //   success:()=>{
      //     console.log('里面的完成了');
      //   }
      // })
      this.$store.dispatch('Aupdate','wowowo').then(res=>{
        console.log(res);
        console.log('里面完成了提交');
      })
    },
    updateName(){
      this.$store.commit('updateName',"lisi")
    },
    asyUpdate(){
      this.$store.dispatch('moduleUpdate')
    }
  },
};
</script>

<style>
</style>