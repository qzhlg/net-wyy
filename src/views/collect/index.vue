<template>
  <div class="box">
    <main>
      <div class="noTabPageContent">
        <div id="collect">
          <div class="header">
            <div class="left" @click="getHui()">＜</div>
            <div class="title">easyLikeGoods</div>
            <div class="right"></div>
          </div>
          <div class="collectList">
            <div class="touchClear" v-for="item in getcollect" :key="item.id">
              <div
                class="test left"
                @touchstart="(e)=>_touchStart(e,item.id)"
                @touchmove="_touchMove"
                @touchend="_touchEnd"
                :style="ind===item.id?txtStyle:''"
              >
                <div class="collectItem onePx_bottom">
                  <!-- {{getcollect}} -->
                  <img :src="item.list_pic_url" alt class="collectImg" />
                  <div class="collectMsg">
                    <div>{{item.goods_brief}}</div>
                    <div>{{item.name}}</div>
                    <div>￥{{item.retail_price}}</div>
                  </div>
                </div>
              </div>
              <div class="colse" @click.prevent="deleteItem(index)">删除</div>
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
  props:{
 index: Number
  },
  data(){
    return{
    getcollect:[],
    startX: 0,    //触摸位置
         moveX: 0,    //滑动时的位置
         disX: 0,    //移动距离
         txtStyle: '',
          delWidth: 200,
          top: '',
          ind:0,
        zIndex: 'z-index:-1',
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
      // console.log(result.data.data)
    },
    getHui(){
      this.$router.go(-1)
    },
    _touchStart: function(ev:any,id:any) {
      this.ind=id;
        ev = ev || event;
        if(ev.touches.length == 1){
          this.startX = ev.touches[0].clientX;
          // console.log(this.startX)
        }
      },
      _touchMove: function(ev:any) {
        ev = ev || event;
        if(ev.touches.length == 1) {   
          this.moveX = ev.touches[0].clientX    
          this.disX = this.startX - this.moveX;          
          if(this.disX < 0 || this.disX == 0) {          
            this.txtStyle = "transform:translateX(0rem)";
          }else if (this.disX > 0) {
            this.txtStyle = "transform:translateX(-" + this.disX/100 + "rem)";
            if (this.disX >= this.delWidth/100) {
              this.txtStyle = "transform:translateX(-" + this.delWidth/100 + "rem)";
              this.zIndex = "z-index:" + 10 + "rem";
            }
          }
        }
      },
      _touchEnd: function(ev:any) {
        if (ev.changedTouches.length == 1) {
          this.startX = 0;
          this.zIndex = "z-index:" + -1 + "rem";
          let endX = ev.changedTouches[0].clientX;
          this.disX = this.startX - endX;
        }
      },
      deleteItem: function(index:any) {
        this.$emit('deleteItem', index);
      }
    } 
});
</script>
