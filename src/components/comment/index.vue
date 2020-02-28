<template>
    <div class="box">
          <header class="head">
    <div class="headLeft" @click="goBack">&lt;</div>
    <div class="headCenter">查看更多评论</div>
    <div class="headRight"></div>
 
  </header>
    <main class="main">
            <div class="common">
            <div class="commonItem" v-for="its in commentList" :key="its.id">
                <div class="Info">
                    <div class="user">{{its.user_info.username}}</div>
                    <div class="date">{{its.add_time}}</div>
                </div>
                <div class="con">
                    {{its.content}}
                </div>
            </div>
        </div>
    </main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import './index.scss'
export default Vue.extend({
    name:'comment',
    props:['commentList'],
    methods:{
        goBack(){
            this.$router.back()
        }
    }
})
</script>