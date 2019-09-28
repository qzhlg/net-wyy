
import {getData} from '@/api/index'

export default {
    namespace: true,
    state:{
        list:[]
    },
    mutations:{
        setTopic(state:any,payload:any){
            state.list=payload.data
            console.log(state.list)
        }
    },
    actions:{
        async getTopic({commit}:any){
            const result=await getData()
            commit('setTopic',result.data.data)
        }
    }
}   