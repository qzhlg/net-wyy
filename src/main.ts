import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 2,
  loading: './assets/timg.gif',
  attempt: 1,
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
