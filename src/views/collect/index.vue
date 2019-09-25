<template>
  <div class="box">
    <main class="main">
      this is collct page
    </main>
    <Foot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Foot from "@/components/foot.vue";

export default Vue.extend({
  name: "collct",
  components: {
    Foot
  }
});
</script>
