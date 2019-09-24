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
    <!-- 如果需要分页器 -->
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
          <div class="brandItem">
            <img src="" alt="" class="imgLazyload loadEnd">
            <div class="brandItemName">CK制造商</div>
            <div class="brandItemMinPrice">39元起</div>
          </div>
          <div class="brandItem"></div>
          <div class="brandItem"></div>
          <div class="brandItem"></div>
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
    }
  }
});
</script>
<style lang="">

</style>