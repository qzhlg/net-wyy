<template>
  <div class="box">
    
     <main class="main">
      <div class="noTabPageContent">
        <div class="topicDetail">
          <div class="header" 
          >
            <div class="left"  @click="getList()">＜</div>
            <div class="title">{{headerlist.title}}</div>
            <div class="right"></div>
            
          </div>
   

        <div class="topicDetailImg" v-html="headerlist.content">
          
        </div>

        <div class="commentWrap">
          <div class="titleLine">
            <div class="titleName">精选留言</div>
            <div class="titleIcon"
               @click="getCommentlist(id)"
                >精选</div>
                 
          </div>
          <div class="commentList">
            <div class="commentItem" v-for="item in getcomment"
            :key="item.id"
            >
              <div class="userInfo">
                <div>匿名用户</div>
                <div>{{item.add_time}}</div>
              </div>
              <div class="userComment">{{item.content}}</div>
              <div class="commentPicList"></div>
            </div>
             
          </div>
         <a class="moreComment" @click="getListclick(id)">查看更多评论</a>
        </div>

        <div class="relateTopic">
          <div class="relateTopicTitle" >推荐专题</div>
          <div class="relateTopicItem" v-for="item in getrelated"
          :key="item.id"
       
          >
            <img :src="item.scene_pic_url" alt="">
            <div>{{item.title}}</div>
          </div>
        </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import './style.scss'
import {getDetail,getComment,getRelated} from '@/api/index'

export default Vue.extend({
  name: "Topicdetial",
  components: {},
  data() {
    return {
      headerlist:[],
      getcomment:[],
      getrelated:[]
    }
  },
   mounted() {
    const id=this.$route.params.id
      // console.log(id)
       this. _getDetail(id);
       this. _getComment(id);
       this._getRelated(id)
  },
  methods:{
    
    async _getDetail(id:any) {
      const result = await getDetail(id);
      this.headerlist = result.data.data;
 
    },
    async _getComment(id:any) {
      const result = await getComment(id);
      this.getcomment = result.data.data.data;
    },
      async _getRelated(id:any) {
      const result = await getRelated(id);
      this.getrelated = result.data.data;
    },
    getList(){
      this.$router.go(-1)
    },
    getCommentlist(){
      const id=this.$route.params.id
      this.$router.push(`/getCommentlist/${id}`)
      
    },
    getListclick(id:any){
      this.$router.push(`/topicMore/${id}`)
      console.log(this.$router)
    }
  }
});
</script>
