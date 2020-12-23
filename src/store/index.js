import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
const state={
    count:111,
    student:[{name:'a',age:10},{name:'b',age:11},{name:'c',age:12}],
    info:{name:'kkkk',age:100}
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a:moduleA
    }
})
export default store