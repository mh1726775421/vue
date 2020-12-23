import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const moduleA={
    state:{
        name:'zhangsan'
    },
    mutations:{
        updateName(state,payload){
            state.name=payload;
        }
    },
    actions:{
        moduleUpdate(context){
            setTimeout(()=>{
                context.commit('updateName','wangwu')
            },1000)
        }
    },
    getters:{
        fullName(state){
            return state.name+'111'
        },
        fullName2(state,getters){
            return state.getters.fullName+'111';
        },
        fullName2(state,getters,rootState){
            return state.getters.fullName2+rootState.count;//拿到最外面的state中的count
        }
    }
}
const store = new Vuex.Store({
    state:{
        count:111,
        student:[{name:'a',age:10},{name:'b',age:11},{name:'c',age:12}],
        info:{name:'kkkk',age:100}
    },
    mutations:{
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        increment5(state,count5){
            state.count+=count5;
        },
        incrementStu(state,stu){
            state.student.push(stu)
        },
        update(state){
            Vue.set(state.info,'age','111');
            // Vue.delete(state.info,'name');
        }
    },
    actions:{
        // Aupdate(context,payload){
        //     setTimeout(()=>{
        //         context.commit('update');
        //         console.log(payload.message);
        //         payload.success();
        //     },1000)
        // }
        Aupdate(context,payload){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('update');
                    console.log(payload);
                    resolve('111111')
                },1000)
            })
        }
    },
    getters:{
        more20(state){
            return state.student.filter(s=>s.age>10)
        },
        more20Length(state,getters){
            return getters.more20.length;
        },
        morex(state){
            return age=>{
                return state.student.filter(s=>s.age>age)
            }

        }
    },
    modules:{
        a:moduleA
    }
})
export default store