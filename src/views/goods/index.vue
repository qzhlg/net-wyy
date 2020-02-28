<template>
  <div class="box">
    <Veader :titleMes="titleMes" />
    <main class="main">
      <div class="swiper">
        <swiper :options="swiperOption" class="banner">
          <swiper-slide v-for="slide in banner" :key="slide.id">
            <img :src="slide.img_url" alt />
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
        <h1 class="title">{{ titleMes.name }}</h1>
        <h2 v-for="it in product" :key="it.goods_id" class="price">￥{{ it.retail_price }}</h2>
      </div>
      <div class="goodsSize">
        <div class="null"></div>
        <div class="xs">X0</div>
        <div class="check" @click="checkSize">选择规格&gt;</div>
      </div>
      <div class="goodsAttribute">
        <div class="shopMes">商品参数</div>
        <ul>
          <li v-for="(item, index) in sizeInfo" :key="index">
            <span v-text="item.name" class="size"></span>
            <span v-text="item.value" class="val"></span>
          </li>
        </ul>
      </div>
      <div class="topicDetailImg">
        <p v-html="titleMes.goods_desc">{{ titleMes.goods_desc }}</p>
      </div>
      <div class="goodsAttribute">
        <div class="shopMes">常见问题</div>
        <div class="problemItem" v-for="is in issueMes" :key="is.id">
          <div class="problem">
            <span>√</span>
            {{ is.question }}
          </div>
          <p class="answer">{{ is.answer }}</p>
        </div>
      </div>
      <div class="goodsAttribute">
        <div class="shopMes">大家都在看</div>
        <Vcontent :goodlist="goodlist" />
      </div>
      <Vcart v-show="flag" :titleMes="titleMes" @flagMethod="flagMethod" />
    </main>
    <div class="foot">
      <ul>
        <li class="like">★</li>
        <li class="cartNum">
          <i class="iconfont icon-gouwuche" @click="goCart">
            <span>{{count}}</span>
          </i>
        </li>
        <li
          class="addCar"
          @click="addshopcar(titleMes.goods_sn,count,titleMes.primary_product_id)"
        >加入购物车</li>
        <li class="buy">立即购买</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getgoosDetail, getAcount, getgoodsCount, addCart } from "@/api/index";
import "./index.scss";
import Veader from "@/components/goodhead/index.vue";
import "swiper/css/swiper.min.css";
import Vcontent from "@/components/allseegood/index.vue";
import Vcart from "@/components/carDialog/index.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default Vue.extend({
  name: "goods",
  data() {
    return {
      sizeInfo: [],
      banner: [],
      titleMes: {},
      issueMes: [],
      product: [],
      goodlist: [],
      flag: false,
      count: "",
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
  components: {
    Veader,
    swiper,
    swiperSlide,
    Vcontent,
    Vcart
  },
  mounted() {
    const id = this.$route.params.id;
    this._getdetailList(id);
    this._getAcount(id);
    this._getgoodsCount();
  },
  methods: {
    async _getdetailList(id: any) {
      const result = await getgoosDetail(id);
      const {attribute,gallery,info,issue,productList}=result.data.data
      this.sizeInfo =attribute;
      this.banner =gallery;
      this.titleMes =info;
      this.issueMes =issue;
      this.product =productList;
    },
    async _getAcount(id: any) {
      const result = await getAcount(id);
      const {goodsList}=result.data.data
      this.goodlist = goodsList;
    },
    // 获取购物车商品数量
    async _getgoodsCount() {
      const result = await getgoodsCount();
      const {goodsCount}=result.data.data.cartTotal
      this.count = goodsCount;
    },
    checkSize() {
      this.flag = true;
    },
    flagMethod() {
      this.flag = false;
    },
    // 加入购物车
    async addshopcar(id: any, count: any, product_id: any) {
      const result = await addCart(id, count, product_id);
    },
    goCart(){
      this.$router.push('/cart')
    }
  }
});
</script>
