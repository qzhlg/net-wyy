import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: "http://hbimg.b0.upaiyun.com/98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658",
  attempt: 1
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
