<template>
  <div class="box">
     <main class="main">
          <vcomment :commentList="commentList"/>
    </main>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {getComment} from '@/api/index'
import vcomment from '@/components/comment/index.vue'
export default Vue.extend({
  name: "topicMore",
  data(){
    return{
      commentList:[]
    }
  },
  components: {
    vcomment
  },
  mounted(){
    console.log(this.$route.params)
    const typeId=this.$route.params.typeId
    const id=this.$route.params.id
    const num=100
    this._getMessage(id,num)
  },
  methods:{
    async _getMessage(id:any,num:any){
      const result=await getComment(id,num)
      this.commentList=result.data.data.data
      console.log(result.data.data.data)
    }
  }
});
</script>