<template>
  <div class="item">
    <div class="newGoodsWrap">
      <dl class="newGoodsItem" v-for="item in homeData" :key="item.id" @click="goGoods(item.id)">
        <dt class="imgLazyload loadEnd">
          <img v-lazy="item.list_pic_url" alt />
        </dt>
        <dd class="newGoodsName">{{ item.name }}</dd>
        <dd class="newGoodsPrice">￥{{ item.retail_price }}</dd>
      </dl>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "./index.scss";
export default Vue.extend({
  name: "homeItem",
  props: ["homeData"],
  components: {},
  mounted() {},
  methods: {
    goGoods(id: any) {
      this.$router.push(`/goods/${id}`);
    }
  }
});
</script>