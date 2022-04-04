<template>
  <div class="user">
    <div class="content">
      <el-avatar shape="square" :size="200" :src="url"></el-avatar>
      <div class="buttonGroup">
        <button class="buttonLogin" @click="goLogin">登&nbsp;&nbsp;&nbsp;录</button>
        <button class="buttonRegister" @click="goRegister">注&nbsp;&nbsp;&nbsp;册</button>
      </div>
      <div class="message">
        <div>个人信息</div>
        <div>我的消息</div>
        <div>退出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      url: require("../../../assets/user.png"),
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/choose/login",
      });
    },
    goRegister() {
      this.$router.push({
        path: "/choose/register",
      });
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "homeUtils";
  src: url("../../../assets/homeUtils.ttf");
}
.user {
  border: 2px solid lemonchiffon;
  border-radius: 5%;
  margin-left: 8px;
  width: 15%;
  height: 50%;
  background-color: white;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonGroup {
  display: flex;
  justify-content: center;
  width: 70%;
  margin-top: 10%;
}
.buttonLogin {
  border: 0;
  outline: none;
  cursor: pointer;
  font-family: "homeUtils";
  font-size: 16px;
  color: white;
  width: 100px;
  height: 40px;
  background-image: linear-gradient(lightskyblue, skyblue);
  border-right: 1px solid white;
  transition: font-size 0.1s ease-in;
}
.buttonRegister {
  border: 0;
  outline: none;
  cursor: pointer;
  font-family: "homeUtils";
  font-size: 16px;
  color: white;
  width: 100px;
  height: 40px;
  background-image: linear-gradient(lightskyblue, skyblue);
  border-collapse: collapse;
  border-left: 1px solid white;
  transition: font-size 0.1s ease-in;
}
.buttonLogin:active {
  font-size: 18px;
}
.buttonRegister:active {
  font-size: 18px;
}
.message {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;
  width: 70%;
}
.message > div + div {
  margin-top: 25%;
}
</style>