<template>
    <div class="box">
       
        <vBrand :brandlist="brandlist" :brandData="brandData"/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import vBrand from '@/components/brandDetail/index.vue'
import {getbrandDetail,getbrandList} from '@/api/index'
export default Vue.extend({
    name:'brandDetail',
    data(){
        return {
            brandlist:{},
            brandData:[]
        }
    },
    components:{
        vBrand
    },
    mounted(){
        const id=this.$route.params.bid
        this._getbrandDetail(id)
        this._getbrandList(id)
    },
    methods:{
        async _getbrandDetail(id:any){
            const result=await getbrandDetail(id)
            const {brand}=result.data.data
            this.brandlist=brand
        },
        async _getbrandList(id:any){
            const result=await getbrandList(id)
            const {data}=result.data.data
            this.brandData=data
        }
    }
})
</script>