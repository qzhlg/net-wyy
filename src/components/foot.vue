<template>
  <footer class="footer">
      <ul>
          <li>
              <router-link to="/home">首页</router-link>
          </li>
          <li>
               <router-link to="/topic">专题</router-link>
          </li>
          <li>
               <router-link to="/catelog">分类</router-link>
          </li>
          <li>
              <router-link to="/cart">购物车</router-link>
          </li>
          <li>
              <router-link to="/mine">我的</router-link>
          </li>
      </ul>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "home",
  components: {
    
  }
});
</script>