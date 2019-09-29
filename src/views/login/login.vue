<template>
  <div class="box">
    <main class="main">
      <div class="logo">
        <img
          src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
          alt=""
        />
      </div>
      <div class="loginMain">
        <div class="inputWrap">
          <input
            type="text"
            placeholder="请输入手机号"
            Value="15323807318"
            v-model="mobile"
            ref="mobile"
          />
        </div>
        <div class="inputWrap">
          <input
            type="password"
            placeholder="请输入登录密码"
            value="123456"
            v-model="password"
            ref="password"
          />
        </div>
        <div class="loginBtn">
          <button @click="_loginMethod()">登录</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { loginMethod } from "@/api/index";
import { setStorage } from "@/utils/index";
console.log(loginMethod);
export default Vue.extend({
  name: "login",

  components: {},
  data() {
    return {
      mobile: "15323807318",
      password: "123456"
    };
  },
  mounted() {},
  methods: {
    async _loginMethod() {
      await loginMethod({
        mobile: this.mobile,
        password: this.password
      })
        .then(res => {
          if (res.status == 200) {
            const token = res.data.data.sessionKey;
            setStorage("nideShopUser", this.mobile);
            setStorage("token", token);
            this.$router.push("/home");
          }
        })
        .catch(error => {
          console.log(new error());
        });
    }
  }
});
</script>
<style lang="scss" scoped>
@import url("./login.scss");
</style>
