<template>
  <div class="user">
    <div class="message">
      <el-avatar shape="square" :size="200" :src="url"></el-avatar>
      <el-button-group>
        <el-button type="primary" @click="goLogin">登录</el-button>
        <el-button type="primary" @click="goRegister">注册</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      url: require("./user.png"),
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/choose/login"
      });
    },
    goRegister() {
      this.$router.push({
        path: "/choose/register"
      });
    },
  },
};
</script>

<style>
.user {
  border-radius: 5%;
  margin-left: 3%;
  width: 20%;
  height: 50%;
  background-color: burlywood;
}
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>