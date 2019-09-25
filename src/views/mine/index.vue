<template>
  <div class="box">
    <main class="main">
      <div class="userMesWrap">
        <div class="userLogo"></div>
        <div class="userMsgs">
          <div>15323807318</div>
          <div>普通用户</div>
        </div>
      </div>
      <div class="userPower">
        <div class="userP" v-for="item in userlist" 
        :key="item.id"
        @click="collctList()"
        >
          <i>icon</i>
          <div>{{item.name}}</div>
        </div>
      </div>
      <div class="loginOut">退出登录</div>
    </main>
    <Foot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Foot from "@/components/foot.vue";
import './index.scss'

export default Vue.extend({
  name: "mine",
  components: {
    Foot
  },
  data(){
    return {
       userlist: [
      {
        icon: 'icon-shoucang',
        name: '我的收藏',
        id:0,
        link: '/collct'
      },
      {
        icon: 'icon-iconfontdizhi',
        name: '地址管理',
        id:1,
        // link: ''
      },
      {
        icon: '.icon-wodedingdan',
        name: '我的订单',
        id:2
      },
      {
        icon: 'icon-rili',
        name: '周末拼单',
        id:3
      },
      {
        icon: 'icon-youhuiquan',
        name: '优惠券',
        id:4
      },
      {
        icon: 'icon-youxuan',
        name: '优选购',
        id:5
      },
      {
        icon: 'icon-hongbao',
        name: '我的红包',
        id:6
      },
      {
        icon: 'icon-huiyuan',
        name: '会员plus',
        id:7
      },
      {
        icon: 'icon-yaoqing',
        name: '邀请返利',
        id:8
      },
      {
        icon: 'icon-yijianfankui',
        name: '意见反馈',
        id:9
      },
      {
        icon: 'icon-kefu',
        name: '客服咨询',
        id:10
      },
      {
        icon: 'icon-baohu',
        name: '账户安全',
        id:12
      }
    ]
    }
  },
  mounted() {},
  methods: {
collctList(){
  console.log('collctList')
}
  }
});
</script>