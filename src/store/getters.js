export default {
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
}