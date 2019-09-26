<template>
  <div class="box">
    <main class="main">
     
          <ul class="listItem">
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
        <div id="dev" v-for="item in shopList" :key="item.id">
          <ul>
            <li>
              
            </li>
            <li>
              <img :src="item.list_pic_url" alt="">
            </li>
            <li>
              <h3>{{item.goods_name}}</h3>
              <h4>￥{{item.retail_price}}</h4>
            </li>
            <li>X<span>{{item.number}}</span> </li>
          </ul>
        </div>
      <div class="bottom">
       
          <li></li>
          <li>
            
          </li>
          <li>
            编辑
          </li>
          <li>
            下单
          </li>
    
      
      </div>
           
    </main>
    <Foot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Foot from "@/components/foot.vue";
import {getCartData} from '@/api/index'
import './index.css'
export default Vue.extend({
  name: "cart",
  components: {
    Foot
  },
  data(){
    return{
      shopList:[]
    }
  },
  mounted(){
    this._getCartData()
  },
  methods:{
    async _getCartData(){
      const result=await getCartData()
      this.shopList=result.data.data.cartList
      console.log(result.data.data.cartList)
    }
  }
});
</script>
