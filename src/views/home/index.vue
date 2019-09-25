<template>
  <div class="box">
    
    <main class="main">
      <div class="swiper-container">
          <swiper :options="swiperOption" class="banner">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
         <img :src="slide.image_url" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    <div class="swiper-pagination"></div>
</div>
      <div class="channelWrap">
        <dl>
          <dt></dt>
          <dd>居家</dd>
        </dl>
         <dl>
          <dt></dt>
          <dd>餐具</dd>
        </dl>
         <dl>
          <dt></dt>
          <dd>配件</dd>
        </dl>
         <dl>
          <dt></dt>
          <dd>服装</dd>
        </dl>
         <dl>
          <dt></dt>
          <dd>支取</dd>
        </dl>
      </div>


      <div class="brandBox">
        <div class="brandTitle">品牌制造商直供</div>
        <div class="brandWrap">
          <div class="brandItem" v-for="item in brandlist"
          :key="item.id"
          >
            <img :src="item.pic_url" alt="" class="imgLazyload loadEnd">
            <div class="brandItemName">{{item.name}}</div>
            <div class="brandItemMinPrice">{{item.floor_price}}元起</div>
          </div>
        </div>
      </div>
      <div class="newGoodsBox">
        <div class="newGoodsTitle">新品首发</div>
        <div class="newGoodsWrap" >
          <dl class="newGoodsItem" v-for="item in newGoodslist"
        :key="item.id">
            <dt class="imgLazyload loadEnd">
              <img :src="item.list_pic_url" alt="">
            </dt>
            <dd class="newGoodsName">{{item.name}}</dd>
             <dd class="newGoodsPrice">￥{{item.retail_price}}</dd>
          </dl>
        </div>
      </div>


      <div class="hotGoodsBox">
        <div class="hotGoodsTitle">人气推荐</div>
        <div class="hotGoodsWrap">
          <dl class="hotGoodsItem" v-for="item in hotGoodslist"
          :key="item.id"
          >
            <dt class="imgLazyload loadEnd">
              <img :src="item.list_pic_url" alt="" >
            </dt>
            <dd class="hotGoodsInfos">
              <div class="hotGoodsName">{{item.name}}</div>
              <div class="hotGoodsInfo">{{item.goods_brief}}</div>
              <div class="hotGoodsPrice">￥{{item.retail_price}}</div>
            </dd>
          </dl>
        </div>
      </div>



      <div class="topGoodsBox">
        <div class="topGoodsTitle">专题精选</div>
        <div class="topGoodsWrap">

        </div>
      </div>



      <div class="cateGoryBox" v-for="item in categorylist"
      :key="item.id"
      >
        <div class="cateGoryName">{{item.name}}</div>
         <div class="cateGoryGoodsWrap">
           <a tag="div"  v-for="item in goodslist"
           :key="item.id"
           >
             <div class="goodsItemImg">
               <img :src="item.list_pic_url" alt="" class="imgLazyload loadEnd">
             </div>
             <div class="goodsItemName">{{item.name}}</div>
             <div class="goodsItemPrice">￥{{item.retail_price}}</div>
           </a>
         </div>
         
      </div>
    </main>
    <Foot/>
  </div>
</template>

<script lang="">

import Vue from "vue";
import Foot from '@/components/foot.vue'
import './style.scss'
import { swiper, swiperSlide } from "vue-awesome-swiper";

import 'swiper/css/swiper.min.css'
import {getList} from '@/api/index'
import BScroll from 'better-scroll'


export default Vue.extend({
  name: "home",
  components: {
    Foot,
    swiper,
     swiperSlide 
  },
  data () {
    return {
      swiperSlides:[],
      brandlist:[],
      newGoodslist:[],
      hotGoodslist:[],
      categorylist:[],
      goodslist:[],
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
  mounted(){
    this._getList();
  },
    methods:{
      async _getList() {
      const result = await getList();
      this.swiperSlides = result.data.data.banner;
      this.brandlist=result.data.data.brandList;
      this.newGoodslist=result.data.data.newGoodsList;
      this.hotGoodslist=result.data.data.hotGoodsList;
      this.categorylist=result.data.data.categoryList;
      this.goodslist=result.data.data.categoryList[0].goodsList;
      // console.log(result.data.data.categoryList[0].goodsList)
      
    },

  }
});
</script>
