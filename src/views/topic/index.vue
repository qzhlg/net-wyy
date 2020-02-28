<template>
  <div class="box">
    <main class="main">
      <div class="count" v-for="item in list" :key="item.id" @click="getDatalist(item.id)">
        <img :src="item.scene_pic_url" alt />
        <div class="box-box">
          <div class="tium">{{ item.title }}</div>
          <div class="tium">
            <span>{{ item.subtitle }}</span>
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
import { mapState } from "vuex";
import Foot from "@/components/foot.vue";
import "./style.scss";
import axios from "axios";
export default Vue.extend({
  name: "topic",
  components: {
    Foot
  },
  computed:{
    //   ...mapState({
    //   list:state=>state['Topic'].list
    // })
        ...mapState({
      list:state=>state.Topic.list
    })
  },
  mounted() {
    this._getData();
    console.log(this.$store.state.Topic.list)
  },
  methods: {
    _getData() {
      this.$store.dispatch("getTopic");
    },
    getDatalist(id: any) {
      this.$router.push(`/toppicdetail/${id}`);
    }
  },
  
});
</script>
