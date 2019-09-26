
<template>
  <div class="wrappers">
    <!-- 下拉刷新 -->
    <div v-if="pulldown" class="loading">
      <span class="iconfont"></span>
      <i>{{pulldownTips}}</i>
    </div>
    <!-- 上滑加载更多 -->
    <div v-if="pullup" class="loading-up">
      <div class="content">
        <span class="iconfont"></span>
        <i>{{pullupTips}}</i>
      </div>
    </div>
    <div class="loading-txt" v-show="showLoadingTxt">{{loadingTxt}}</div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import BScroll from "better-scroll";
export default Vue.extend({
  name: "BScroll",
  data() {
    return {
      pulldownTips: "下拉刷新",
      pullupTips: "上滑加载更多",
      loadingTxt: "正在加载...",
      pulldownTimer: null,
      showLoadingTxt: false
    };
  },
  mounted() {},
  methods: {}
});
</script>