export default {
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
}