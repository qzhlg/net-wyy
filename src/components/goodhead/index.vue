<template>
  <header class="head">
    <div class="headLeft" @click="goBack">&lt;</div>
    <div class="headCenter">{{ titleMes.name }}</div>
    <div class="headRight"></div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "goodhead",
  components: {},
  props: ["titleMes"],
  mounted() {
  
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
});
</script>
