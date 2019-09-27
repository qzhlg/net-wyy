<template>
  <div class="box">
    <main class="main">
      <div class="swiper-container">
        <swiper :options="swiperOption" class="banner">
          <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
            <img v-lazy="slide.image_url" alt="" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <div class="swiper-pagination"></div>
      </div>
      <div class="channelWrap">
        <dl v-for="item in channel" :key="item.id" @click="goDetail(item.id)">
          <dt>
            <img :src="item.icon_url" alt="">
          </dt>
          <dd v-text="item.name"></dd>
        </dl>
      
      </div>

      <div class="brandBox">
        <div class="brandTitle">品牌制造商直供</div>
          <div class="brandWrap">
            <div class="brandItem" v-for="item in brandlist" :key="item.id" @click="gobrandDetail(item.id)">
              <img v-lazy="item.pic_url" alt="" class="imgLazyload loadEnd" />
              <div class="brandItemName">{{ item.name }}</div>
              <div class="brandItemMinPrice">{{ item.floor_price }}元起</div>
            </div>
          </div>
      </div>
      <div class="newGoodsBox">
        <div class="newGoodsTitle">新品首发</div>
        <div class="newGoodsWrap">
          <dl class="newGoodsItem" v-for="item in newGoodslist" :key="item.id" @click="goGoods(item.id)">
            <dt class="imgLazyload loadEnd">
              <img v-lazy="item.list_pic_url" alt="" />
            </dt>
            <dd class="newGoodsName">{{ item.name }}</dd>
            <dd class="newGoodsPrice">￥{{ item.retail_price }}</dd>
          </dl>
        </div>
      </div>

      <div class="hotGoodsBox">
        <div class="hotGoodsTitle">人气推荐</div>
        <div class="hotGoodsWrap">
          <dl class="hotGoodsItem" v-for="item in hotGoodslist" :key="item.id" @click="goGoods(item.id)">
            <dt class="imgLazyload loadEnd">
              <img v-lazy="item.list_pic_url" alt="" />
            </dt>
            <dd class="hotGoodsInfos">
              <div class="hotGoodsName">{{ item.name }}</div>
              <div class="hotGoodsInfo">{{ item.goods_brief }}</div>
              <div class="hotGoodsPrice">￥{{ item.retail_price }}</div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="topGoodsBox">
        <div class="topGoodsTitle">专题精选</div>
        <div class="topGoodsWrap">
      <swiper :options="swiperOption" class="banner">
          <swiper-slide v-for="slide in toplist" :key="slide.id" @click="goGoods(item.id)">
          <img :src="slide.item_pic_url" alt=""/>
             <h3>{{slide.title}}</h3>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
      </div>

      <div class="cateGoryBox" v-for="(item,index) in categorylist" :key="index">
        <div class="cateGoryName">{{ item.name }}</div>
        <div class="cateGoryGoodsWrap">
          <a tag="div" v-for="item in goodslist[index].goodsList" :key="item.id" @click="goGoods(item.id)">
            <div class="goodsItemImg">
              <img
                v-lazy="item.list_pic_url"
                alt=""
                class="imgLazyload loadEnd"
              />
            </div>
            <div class="goodsItemName">{{ item.name }}</div>
            <div class="goodsItemPrice">￥{{ item.retail_price }}</div>
          </a>
        </div>
      </div>
    </main>
    <Foot />
  </div>
</template>

<script lang="">
import Vue from "vue";
import Foot from "@/components/foot.vue";
import "./style.scss";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import "swiper/css/swiper.min.css";
import { getList } from "@/api/index";
import BScroll from "better-scroll";

export default Vue.extend({
  name: "home",
  components: {
    Foot,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperSlides: [],
      brandlist: [],
      newGoodslist: [],
     
      hotGoodslist: [],
      categorylist: [],
      goodslist: [],
      channel:[],
      toplist:[],
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
    this._getList();
  },
  methods: {
    async _getList() {
      const result = await getList();
      const {banner,brandList,newGoodsList,hotGoodsList,categoryList,channel,topicList}=result.data.data
      this.swiperSlides = banner;
      this.brandlist = brandList;
      this.newGoodslist = newGoodsList;
      this.hotGoodslist = hotGoodsList;
      this.categorylist = categoryList;
      this.goodslist = categoryList
      // [0].goodsList;
      this.channel=channel
      this.toplist=topicList
      console.log(categoryList)
    
    },
     gobrandDetail(bid){
      console.log(bid)
      this.$router.push(`/brandDetail/${bid}`)
    },
    goDetail(id){
      this.$router.push(`/categorys/${id}`)
    },
    goGoods(id){
       this.$router.push(`/goods/${id}`)
    }
  }
});
</script>
