export default {
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