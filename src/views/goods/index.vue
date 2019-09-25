<template>
    <div class="box">
    <Veader :titleMes="titleMes"/>
    <main class="main">
        <div class="swiper">
             <swiper :options="swiperOption" class="banner">
            <swiper-slide v-for="slide in banner" :key="slide.id">
            <img :src="slide.img_url" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
            <h1 class="title">{{titleMes.name}}</h1>
           <h2 v-for="it in product" :key="it.goods_id" class="price">￥{{it.retail_price}}</h2>
        </div>
        <div class="goodsSize">
           <div class="null"></div>
           <div class="xs">X0</div>
           <div class="check">选择规格&gt;</div>
        </div>
        <div class="goodsAttribute">
            <div class="shopMes">商品参数</div>
             <ul>
                <li v-for="(item,index) in sizeInfo" :key="index">
                    <span v-text="item.name" class="size"></span>
                    <span v-text="item.value" class="val"></span>
                </li>
            </ul>
        </div>
        <div class="topicDetailImg">
              
            <p  v-html='titleMes.goods_desc'>
              {{titleMes.goods_desc}}
            </p>
        </div>
        <div class="goodsAttribute">
            <div class="shopMes">常见问题</div>
            <div class="problemItem" v-for="is in issueMes" :key="is.id">
                <div class="problem">
                    <span>√</span>
                    {{is.question}}
                </div>
              
                <p class="answer">{{is.answer}}</p>
            </div>
        </div>
        <div class="goodsAttribute">
            <div class="shopMes">大家都在看</div>

        </div>
    </main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {getgoosDetail} from '@/api/index'   
import './index.css'
import Veader from '@/components/goodhead/index.vue'
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
            product:[],
            swiperOption: {
            loop: true,
            autoplay: {
            disableOnInteraction: false
            },
            pagination: {
            el: ".swiper-pagination"
            }
        }
        }
    },
    components:{
        Veader,
         swiper,
          swiperSlide
    },
    mounted(){
        const id=this.$route.params.id
        this._getdetailList(id)
    },
    methods:{
        async _getdetailList(id:any){
            const result=await getgoosDetail(id)
            console.log(result.data.data)
            this.sizeInfo=result.data.data.attribute
            this.banner=result.data.data.gallery
            this.titleMes=result.data.data.info
            this.issueMes=result.data.data.issue
            this.product=result.data.data.productList
        }
    }
})
</script>
