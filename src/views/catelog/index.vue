<template>
  <div class="box">
    <div class="searchWrap">
      <header class="serachInput">
        <i></i>
        <span @click="goSearch">搜索商品，共239款好物</span>
      </header>
    </div>
    <main class="main">
      <div id="tabsWrap">
        <ul class="list">
          <li
            v-for="(item, index) in list"
            :key="item.id"
            @click="_getChildData(item.id, index)"
            :class="{ active: current === index }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="categoContet">
        <div class="categoryWrap">
          <img :src="currentitem.wap_banner_url" alt="" class="img" />
          <span>{{ currentitem.front_desc }}</span>
        </div>
        <div class="categoryTitle">
          <div></div>
          {{ currentitem.name }}分类
          <div></div>
        </div>
        <div class="subCategory">
          <a
            v-for="(slide, index) in currentlist"
            :key="slide.id"
            class="subCategoryItem"
            @click="handNext(slide.id, index)"
          >
            <img v-lazy="slide.wap_banner_url" alt="" />
            <div class="subCategoryItemName">
              {{ slide.name }}
            </div>
          </a>
        </div>
      </div>
    </main>
    <Foot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Foot from "@/components/foot.vue";
import "./index.css";
import { getHomeData, getChildData, getgoodsMessage } from "@/api/index";
export default Vue.extend({
  name: "catelog",
  components: {
    Foot
  },
  data() {
    return {
      list: [],
      currentitem: {},
      currentlist: [],
      current: 0
    };
  },
  mounted() {
    this._getHomeData();
  },
  methods: {
    // 初始化
    async _getHomeData() {
      const result = await getHomeData();
      this.list = result.data.data.categoryList;
      this.currentitem = result.data.data.currentCategory;
      this.currentlist = result.data.data.currentCategory.subCategoryList;
    },
    // 获取当前分类信息和子分类
    async _getChildData(id: any, index: any) {
      const result = await getChildData(id);
      this.currentitem = result.data.data.currentCategory;
      this.currentlist = result.data.data.currentCategory.subCategoryList;
      this.current = index;
    },
    goSearch() {
      this.$router.push("/goodSearch");
    },
    handNext(id: any, index: any) {
      //  this.$router.push(`/categorys/${id}`)

      this.$router.push({
        path: `/categorys/${id}`
      });
      getgoodsMessage(id);
    }
  }
});
</script>
