export default{
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
}