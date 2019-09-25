import Vue from "vue";
import Router from "vue-router";
import routes from "./index";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
/**
 * 导航的前置守卫用路由来拦截
 * to 新的路由
 * from 当前路由
 *
 */
router.beforeEach((to, from, next) => {
  // 获取用户信息
  const token = window.localStorage.getItem("token");
  if (token) {
    // 如果用户信息存在则继续向后执行
    next();
  } else {
    // 如果不存在登陆页
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
