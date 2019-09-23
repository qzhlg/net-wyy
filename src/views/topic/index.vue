<template>
  <div class="box">
 
     <main class="main">
      this is topic page
    </main>
    <Foot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Foot from '@/components/foot.vue'

export default Vue.extend({
  name: "topic",
  components: {
    Foot
  }
});
</script>