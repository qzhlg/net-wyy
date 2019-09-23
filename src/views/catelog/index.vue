<template>
  <div class="box">
    
     <main class="main">
   this is catelog page
    </main>
    <Foot/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Foot from '@/components/foot.vue'

export default Vue.extend({
  name: "catelog",
  components: {
    Foot
  }
});
</script>