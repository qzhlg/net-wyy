<template>
   
        <div class="acount">
              <span v-for="acount in goodlist" :key="acount.id" class="goodlist" @click="goGoods(acount.id)">
            <div>
                <img v-lazy="acount.list_pic_url" alt="">
            </div>
            <div v-text="acount.name" class="goodsname"></div>
            <p>￥{{acount.retail_price}}元</p>
        </span>
   
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'allseegood',
    props:['goodlist'],
    methods:{
        goGoods(id:any){
            console.log(id)
            // this.$router.push(`/goods/${id}`)
            this.$router.back()
        }
    }
   
})
</script>
