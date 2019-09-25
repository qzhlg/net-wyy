<template>
  <div class="box">
    <main class="main">
      <div
        class="count"
        v-for="item in list"
        :key="item.id"
        @click="getDatalist(item.id)"
      >
        <img :src="item.scene_pic_url" alt="" />
        <div class="box-box">
          <div class="tium">{{ item.title }}</div>
          <div class="tium">
            <span> {{ item.subtitle }}</span>
          </div>
          <div class="tiu">{{ item.price_info }}元起</div>
        </div>
      </div>
    </main>
    <Foot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Foot from "@/components/foot.vue";
import "./style.scss";
import axios from "axios";
import { getData } from "@/api/index";
export default Vue.extend({
  name: "topic",
  components: {
    Foot
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this._getData();
  },
  methods: {
    async _getData() {
      const result = await getData();
      this.list = result.data.data.data;
    
    },
    getDatalist(id: any) {
      
      this.$router.push(`/toppicdetail/${id}`);
    }
  }
});
</script>
