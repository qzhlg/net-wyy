<template>
  <footer class="footer">
    <dl class="dldl"> 
      <dt> <i class="iconfont icon-iconhuidaoshouye
angle-left
"></i></dt>
      <dd><router-link to="/home">首页</router-link></dd>
    </dl>

    <dl class="dldl">
      <dt> <i class="iconfont icon-fuzhi"></i></dt>
      <dd> <router-link to="/topic">专题</router-link></dd>
    </dl>

    <dl class="dldl">
      <dt><i class="iconfont icon-gongzuo"></i></dt>
      <dd> <router-link to="/catelog">分类</router-link></dd>
    </dl>

    <dl class="dldl">
      <dt> <i class="iconfont icon-gouwuche"></i></dt>
      <dd><router-link to="/cart">购物车</router-link></dd>
    </dl>

    <dl class="dldl">
      <dt><i class="iconfont icon-wode"></i></dt>
      <dd><router-link to="/mine">我的</router-link></dd>
    </dl>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home",
  components: {}
});
</script>
