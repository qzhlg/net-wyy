<template>
  <div class="box">
    <main class="main">
      <div class="header" v-for="item in headerlist" :key="item.id">
        <span>←</span>
        <span>关爱他成长的每一个足迹</span>
        <span></span>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./style.scss";
import { getDetail } from "@/api/index";

export default Vue.extend({
  name: "Topicdetial",
  components: {},
  data() {
    return {
      headerlist: []
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(this.$route);
    this._getDetail(id);
  },
  methods: {
    async _getDetail(id: any) {
      const result = await getDetail(id);
      this.headerlist = result.data.data;
      console.log(result.data.data);
    }
  }
});
</script>
