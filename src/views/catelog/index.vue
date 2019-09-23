<template>
  <div class="box">
    <div class="searchWrap">
<header class="serachInput">
      <i></i>
      <span>搜索商品，共239款好物</span>
    </header>
    </div>
    
     <main class="main">
        <div id="tabsWrap">
          <ul class="list">
            <li v-for="item in list" :key="item.id" @click="_getChildData(item.id)">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div class="categoContet">
            <div class="categoryWrap">
              <!-- <img :src="itemlist.banner_url" alt=""> -->
            </div>
            <div class="categoryTitle">
              {{itemList.name}}
            </div>
            <div class="subCategory">
              <dl v-for="slide in botlist" :key="slide.id">
                <dt>
                  <img :src="slide.wap_banner_url" alt="">
                </dt>
                <dd>
                  {{slide.name}}
                </dd>
              </dl>
            </div>
        </div>
    </main>
    <Foot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Foot from '@/components/foot.vue'
import {getHomeData,getChildData} from '@/api/index'
export default Vue.extend({
  name: "catelog",
  components: {
    Foot
  },
  data(){
    return {
      list:[],
      itemList:{},
      botlist:[],
      currntIndex:0
    }
  },
 mounted(){
    this._getHomeData()
 },
 methods:{
   // 初始化
   async _getHomeData(){
     const result=await getHomeData()
     console.log(result.data.data.categoryList)
     this.list=result.data.data.categoryList
   },
   // 获取当前分类信息和子分类
   async _getChildData(id:any){
     const result=await getChildData(id)
     this.itemList=result.data.data.currentCategory
     this.botlist=result.data.data.currentCategory.subCategoryList
     
     console.log(this.itemList)
   }
 }
});
</script>
<<style lang="scss" scoped>
@import url('./index.css');
</style>