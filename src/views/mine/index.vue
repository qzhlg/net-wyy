<template>
  <div class="box">
     <main class="main">
       <div class="userMesWrap">
         <div class="userLogo">
           
         </div>
         <div class="userMsgs">
           <div>

           </div>
           <div>
             
           </div>
         </div>
       </div>
       <div class="userPow">

       </div>
       <div class="loginOut">
         退出登录
       </div>
    </main>
    <Foot/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Foot from '@/components/foot.vue'

export default Vue.extend({
  name: "mine",
  components: {
    Foot
  },
  mounted(){
    
  },
  methods:{
    
  }
});
</script>
<style lang="scss" scoped>
@import url('./index.css');
</style>