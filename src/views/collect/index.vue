<template>
  <div class="box">
    <main class="main">
     <div class="noTabPageContent">
       <div id="collect">
         <div class="header">
           <div class="left" @click="getHui()">＜</div>
           <div class="title">easyLikeGoods</div>
           <div class="right"></div>
         </div>
       <div class="collectList">
         <div class="touchClear">
           <div class="test">
             <div class="collectItem onePx_bottom" v-for="item in getcollect"
             :key="item.id"
             >
             <!-- {{getcollect}} -->
               <img :src="item.list_pic_url" alt="" class="collectImg">
               <div class="collectMsg">
                 <div>{{item.goods_brief}}</div>
                 <div>{{item.name}}</div>
                 <div>￥{{item.retail_price}}</div>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
       
     </div>
    </main>
 
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import{getCollect} from '@/api/index'
import './style.scss'


export default Vue.extend({
  name: "collct",
  components: {
   
  },
  data(){
    return{
    getcollect:[]
    }
  },
  mounted() {
    // const id=this.$route.params.id
     this._getCollect()
     console.log(this.$router)
  },
  methods:{
    async _getCollect() {
      const result = await getCollect();
      this.getcollect = result.data.data;
      console.log(result.data.data)
    },
    getHui(){
      this.$router.go(-1)
    }
  }
});
</script>
