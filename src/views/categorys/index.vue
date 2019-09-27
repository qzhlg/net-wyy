<template>
  <div class="box">
    <div class="header">
      <div class="left" @click="back">&lt;</div>
      <div class="title">奇趣分类</div>
      <div class="right"></div>
    </div>
    <div class="nav">
      <ul class="navtitle">
        <li>
          <span
            v-for="(list, index) in navTitle"
            :key="list.id"
            @click="clickItem(list.id, index)"
            :class="{ active: current === index }"
            >{{ list.name }}</span
          >
        </li>
      </ul>
    </div>

    <main class="main">
      <div class="categoryDetail">
        <div class="top">{{ currents.name }}</div>
        <div class="bot">{{ currents.front_name }}</div>
      </div>
      <div class="goodsList">
        <dl
          v-for="list in goods"
          :key="list.id"
          class="list"
          @click="godetail(list.id)"
        >
          <dt>
            <img v-lazy="list.list_pic_url" alt />
          </dt>
          <dd>
            <p class="size" v-html="list.name"></p>
            <p class="price">￥{{ list.retail_price }}</p>
          </dd>
        </dl>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "./index.css";
import { getCategory, getgoodsMessage } from "@/api/index";
export default Vue.extend({
  name: "categorys",
  components: {},
  data() {
    return {
      navTitle: [],
      currents: {},
      goods: [],
      current: 0
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this._getCategory(id);
  },
  methods: {
    async _getCategory(id: any) {
      const result = await getCategory(id);
      const resultlist = await getgoodsMessage(id);
      const {brotherCategory,currentCategory}=result.data.data
      const {data}=resultlist.data.data
      this.navTitle = brotherCategory;
      this.currents = currentCategory;
      this.goods = data;
    },
    async clickItem(id: any, index: any) {
      const result = await getCategory(id);
      const resultlist = await getgoodsMessage(id);
      const {currentCategory}=result.data.data
      const {data}=resultlist.data.data
      this.currents = currentCategory;
      this.goods = data;
      this.current = index;
    },
    godetail(id: any) {
      this.$router.push(`/goods/${id}`);
    },
    back() {
      this.$router.back();
    }
  }
});
</script>
