<template>
  <div class="user">
    <div class="content">
      <el-avatar
        shape="square"
        :size="200"
        fit="fill"
        :src="this.$store.state.userPhoto ? this.$store.state.userPhoto : url"
      >
      </el-avatar>
      <div v-if="this.$store.state.username" class="buttonGroup">
        {{ this.$store.state.username }}
      </div>
      <div v-if="!this.$store.state.username" class="buttonGroup">
        <button class="buttonLogin" @click="goLogin">
          登&nbsp;&nbsp;&nbsp;录
        </button>
        <button class="buttonRegister" @click="goRegister">
          注&nbsp;&nbsp;&nbsp;册
        </button>
      </div>
      <div class="message">
        <div @click="goPerson">个人设置</div>
        <div>我的消息</div>
        <div @click="goLogout">退出</div>
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
    goPerson() {
      this.$router.push({
        path: "/person",
      });
    },
    goLogout() {
      window.localStorage.removeItem("token");
      location.reload();
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
  width: 285px;
  height: 471px;
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
  height: 40px;
  margin-top: 10%;
  font-size: 24px;
}
.buttonLogin {
  font-family: "homeUtils";
  font-size: 16px;
  color: white;
  width: 100px;
  height: 40px;
  background-image: linear-gradient(lightskyblue, skyblue);
  border-right: 1px solid white;
}
.buttonRegister {
  font-family: "homeUtils";
  font-size: 16px;
  color: white;
  width: 100px;
  height: 40px;
  background-image: linear-gradient(lightskyblue, skyblue);
  border-left: 1px solid white;
}
.message {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;
  width: 70%;
}
.message > div {
  cursor: pointer;
  font-size: 20px;
  font-family: "微软雅黑";
  font-weight: bold;
  color: gray;
}
.message > div + div {
  margin-top: 20%;
}
</style>