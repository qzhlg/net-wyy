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
          <textarea class="inputArea" maxlength="80" v-model="val" @input="descInput"></textarea>
         
         
          <span>{{textVal}}/80</span>
        </div>
        <div class="buttons">
          <div  v-show="isShow" class="clear" @click="clearVal">
            <a
              class="am-button am-button-primary am-button-small"
              role="button"
              aria-disabled="false"
            >
              
              <span @click="clearVal">清空</span>
            </a>
          </div>
          <div class="leave">
            <a
              class="am-button am-button-primary am-button-small"
              role="button"
              aria-disabled="false"
            >
              
              <span @click="leaveMes(uid,val)">留 言</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./index.scss";
import { goMessage } from "@/api/index";
import { getStorage } from "@/utils/index";
export default Vue.extend({
  name: "topicComment",
  data() {
    return {
      val: "",
      textVal:0,
      isShow:false
    };
  },
  components: {},
  mounted() {
    const id = this.$route.params.id;
  },
  methods: {
    getlistto() {
      this.$router.go(-1);
    },
    leaveMes(id: any, val: any) {
      const uid = this.$route.params.id;
      goMessage(uid, val);
      // this.$router.push(`/Toppicdetail/${id}`)
       this.$router.back()
    },
    // 监听input长度
    descInput(){
      this.textVal=this.val.length
      this.isShow=true
    },
    clearVal(){
      this.val=''
      this.isShow=false
       this.textVal=this.val.length
    }
  }
});
</script>