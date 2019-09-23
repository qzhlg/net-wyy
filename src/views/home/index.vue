<template>
  <div class="box">
    
    <main class="main">
      <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="item in list" :key="item.id">
          <img :src="item.image_url" alt="">
        </div>
    </div>
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
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import {getList} from '@/api/index'

export default Vue.extend({
  name: "home",
  components: {
    Foot
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  mounted(){
    this._getList();
 
         this.getSwiper()
    
    
  },
    methods:{
      async _getList() {
      const result = await getList();
      this.list = result.data.data.banner;
      console.log(result.data.data.banner);
    },
    getSwiper(){
     new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    }); 
    }
  }
});
</script>
<style lang="">

</style>