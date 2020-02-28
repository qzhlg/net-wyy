<template>
  <div class="box">
    <div class="tops">
      <div class="input">
        <div class="searchFix">
          <div class="inputleft" @click="goback">&lt;</div>
          <div class="inputcenter">
            <input type="text" placeholder="520元礼包强先领" />
          </div>
          <div class="inputright">取消</div>
        </div>
      </div>
    </div>
    <div class="searchMsg">
      <div class="searchItemWrap">
        <div class="title">历史记录</div>
        <div class="listWrap"></div>
      </div>
      <div class="searchItemWrap">
        <div class="title">热门搜索</div>
        <div class="listwrap">
          <button
            v-for="(item, index) in searchList"
            :key="index"
            class="listitem"
            @click="search(item.keyword)"
          >
            {{ item.keyword }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "./index.scss";
import { getgoodSearch,lazySearch } from "@/api/index";
export default Vue.extend({
  name: "goodSearch",
  data() {
    return {
      searchList: [],
      replaceStatic:false
    };
  },
  mounted() {
    this._getSearchdata();
  },
  methods: {
    async _getSearchdata() {
      const result = await getgoodSearch();
      const {hotKeywordList}=result.data.data
      this.searchList =hotKeywordList;
    },
    goback() {
      this.$router.push("/catelog");
    },
    // 模糊搜索
    search(keyword:any){
      console.log(keyword)
      lazySearch(keyword)
    }
  }
});
</script>
