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
        <div class="userP" v-for="item in userlist" :key="item.id" @click="collctList ">
          <i :class="item.icon"></i>
          <div>{{item.name}}</div>
        </div>
      </div>
      <div class="loginOut" @click="getloginOut()">退出登录</div>
    </main>
    <Foot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Foot from "@/components/foot.vue";
import "./index.scss";

export default Vue.extend({
  name: "mine",
  components: {
    Foot
  },
  data() {
    return {
      userlist: [
        {
          icon: "iconfont icon-gongzuojilu",
          name: "我的收藏",
          id: 0
        },
        {
          icon: "iconfont icon-address",
          name: "地址管理",
          id: 1
        },
        {
          icon: "iconfont icon-wodedingdan",
          name: "我的订单",
          id: 2
        },
        {
          icon: "iconfont icon-riqixuanze",
          name: "周末拼单",
          id: 3
        },
        {
          icon: "iconfont icon-youhuiquan-01",
          name: "优惠券",
          id: 4
        },
        {
          icon: "iconfont icon-zhifu-01",
          name: "优选购",
          id: 5
        },
        {
          icon: "iconfont icon-31",
          name: "我的红包",
          id: 6
        },
        {
          icon: "iconfont icon-xiala",
          name: "会员plus",
          id: 7
        },
        {
          icon: "iconfont icon-faxiandingdan",
          name: "邀请返利",
          id: 8
        },
        {
          icon: "iconfont icon-quanbudingdan-01",
          name: "意见反馈",
          id: 9
        },
        {
          icon: "iconfont icon-erji",
          name: "客服咨询",
          id: 10
        },
        {
          icon: "iconfont icon-50",
          name: "账户安全",
          id: 12
        }
      ]
    };
  },
  mounted() {},
  methods: {
    collctList() {
      // console.log(id)
      console.log()
      this.$router.push('/collect')
      
    },
    getloginOut() {
      console.log("ddddd");
    }
  }
});
</script>