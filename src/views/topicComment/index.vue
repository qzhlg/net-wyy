<template>
  <div class="box">
     <main class="main">
          this is topicComment page
    </main>

  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "topicComment",
  components: {
 
  },
  mounted() {
      console.log(this.$route)
  },
});
</script>