<template>
    <div class="box">
    <div class="head">
    <div class="headLeft" @click="goBack">&lt;</div>
    <div class="headCenter">{{brandlist.name}}</div>
    <div class="headRight"></div>
        </div>
      <main class="main">
            <div class="brand">
                <div class="image">
                    <img :src="brandlist.app_list_pic_url" alt="">
                </div>
                <div class="mesg" v-text="brandlist.simple_desc"> </div>
            </div>
               <div class="item">
                    <span v-for="item in brandData" :key="item.id" @click="goGoods(item.id)"> 
                    <div class="goodImg">
                        <img v-lazy="item.list_pic_url" alt="">
                    </div>
                    <div v-text="item.name" class="name"></div>
                    <div class="price">￥{{item.retail_price}}</div>
                </span>
            </div>
      </main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import './index.css'
export default Vue.extend({
    name:'brandDetail',
    props:['brandlist',"brandData"],
    methods:{
        goBack(){
            this.$router.back()
        },
        goGoods(id:any){
            this.$router.push(`/goods/${id}`)
        }
    }
})
</script>