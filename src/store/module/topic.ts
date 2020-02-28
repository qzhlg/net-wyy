
import {getData,userAddress} from '@/api/index'

export default {
    namespace: true,
    state:{
        list:[],
        defaultlist:[]
    },
    mutations:{
        setTopic(state:any,payload:any){
            state.list=payload.data
        },
        setAddress(state:any,payload:any){
            state.defaultlist=payload.data
            console.log(state)
        }
    },
    actions:{
        async getTopic({commit}:any){
            const result=await getData()
            commit('setTopic',result.data.data)
        },
        async getAddress({commit}:any){
            const result= await userAddress()
            console.log(result)
            commit('setAddress',result.data)
         }
    }
}   