<template>
    <div class="dialog">
        <div class="cart">
            <div class="cargoods">
                <div class="cart_top">
                    <ul>
                        <li class="imgAuth">
                            <img :src="titleMes.list_pic_url" alt="">
                        </li>
                        <li class="guige">
                            <p>
                                单价：<span>￥{{titleMes.retail_price}}</span>
                            </p>
                            <p>库存：<span>￥{{titleMes.goods_number}}{{titleMes.goods_unit}}</span></p>
                            <p>已选择：</p>
                        </li>
                        <li class="cleared" @click="close"><span>X</span></li>
                    </ul>
                </div>
                <div class="cart_bottom">
                    <h3>数量</h3>
                    <ul>
                        <li @click="reduce">-</li>
                        <!-- <li>{{titleMes.is_limited}}</li> -->
                        <li>{{count}}</li>
                        <li @click="add">+</li>
                    </ul>
                </div>
            </div>
            <div class="carbtn">
                <ul>
                    <li class="addcar" @click="_addCart( titleMes.goods_sn,count, titleMes.primary_product_id)">加入购物车</li>
                    <li class="immidiate">立即下单</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import './index.css'
import {addCart} from '@/api/index'
export default Vue.extend({
    name:'carDialog',
    props:['titleMes'],
    data(){
        return {
            count:0
        }
    },
    mounted(){
    // this.count=titleMes.is_limited
    },
    methods:{
        close(){
            this.$emit('flagMethod')
        },
        reduce(){
        if(this.count<=0){
            return
        }else{
            this.count=this.titleMes.is_limited-=1
        }
        },
        add(){
          this.count=this.titleMes.is_limited+=1
        },
        async _addCart(id:any,count:any,product_id:any){
            
            const result=await addCart(id,count,product_id)
            
        }
    }
    
})
</script>