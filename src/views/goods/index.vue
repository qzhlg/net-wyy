<template>
    <div class="box">
    <Veader :titleMes="titleMes"/>
    <main class="main">
            <!-- <div class="swiper-container">
            <swiper :options="swiperOption" class="banner">
            <swiper-slide v-for="slide in banner" :key="slide.id">
            <img :src="slide.image_url" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    
        <div class="swiper-pagination"></div> -->
        <div class="swiper">

        </div>
        <div class="serviceList">
            <ul class="list">
                <li>
                    <span class="star">★</span>
                    <span>30天无忧退换</span>
                </li>
                <li>
                     <span class="star">★</span>
                    <span>48小时快速退款</span>
                </li>
                <li>
                     <span class="star">★</span>
                    <span>满88元免邮费</span>
                </li>
            </ul>
        </div>
        <div class="goodsMsgWrap">
            <h1>{{titleMes.name}}</h1>
        </div>
        <div class="goodsSize"></div>
        <div class="goodsAttribute"></div>
    </main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {getgoosDetail} from '@/api/index'   
import './index.css'
import Veader from '@/components/goodhead/index.vue'
// import '@/awesome-swiper'

import 'swiper/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default Vue.extend({
    name:'goods',
    data(){
        return {
            sizeInfo:[],
            banner:[],
            titleMes:{},
            issueMes:[],
            product:[]
        }
    },
    components:{
        Veader,
        //  swiper,
        //   swiperSlide
    },
    mounted(){
        const id=this.$route.params.id
        this._getdetailList(id)
    },
    methods:{
        async _getdetailList(id:any){
            const result=await getgoosDetail(id)
            console.log(result.data.data.info)
            this.sizeInfo=result.data.data.attribute
            this.banner=result.data.data.gallery
            this.titleMes=result.data.data.info
            this.issueMes=result.data.data.issue
            this.product=result.data.data.productList
        }
    }
})
</script>
