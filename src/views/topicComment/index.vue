<template>
  <div class="box">
     <main class="main">
        <div class="noTabPageContent">
            <div class="header">
              <div class="left" @click="getlistto()">＜</div>
              <div class="title">填写留言</div>
              <div class="right"></div>
            </div>

            <div class="textAreaContent">
              <textarea class="inputArea" maxlength="80"></textarea>
              <span>0/80</span>
            </div>

            <div class="buttons">
              <div></div>
              <div>
                <a class="am-button am-button-primary am-button-small" role="button"
                aria-disabled="false"
                >
                  <span>留 言</span>
                </a>
              </div>
            </div>
        </div>
    </main>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import './index.scss'

export default Vue.extend({
  name: "topicComment",
  components: {
 
  },
  mounted() {
      console.log(this.$route)
  },
   methods:{
     getlistto(){
       this.$router.go(-1)
     }
   }
});
</script>