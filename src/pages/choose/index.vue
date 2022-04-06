<template>
  <div class="chooseAll">
    <div class="logo"><img @click="backHome" src="../../brand/logo.png" /></div>
    <el-radio-group
      size="medium"
      v-model="radio"
      @change="changeTo"
      class="chooseReal"
      style="
        border: 2px solid rgba(135, 206, 203, 0.5);
        border-radius: 20px;
        padding: 3%;
      "
    >
      <el-radio-button label="/choose/login" style="margin-bottom: 80px"
        >登录</el-radio-button
      >
      <el-radio-button label="/choose/register" style="margin-bottom: 80px"
        >注册</el-radio-button
      >
      <router-view></router-view>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "choose",
  data() {
    return {
      radio:"/choose/login"
    }
  },
  methods: {
    changeTo(e) {
      if (e == "/choose/login") {
        this.$router.push({
          path: "/choose/login",
        });
      } 
      if(e == "/choose/register"){
        this.$router.push({
          path:"/choose/register"
        })
      }
    },
    backHome(){
      this.$router.push({
        path:"/"
      })
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  position: absolute;
  top: 61px;
  left: 0;
}
.logo img {
  width: 280px;
  height: 100px;
}
.chooseAll {
  display: flex;
  background-image: url("./Desert.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
.chooseReal {
  margin: auto;
}
</style>