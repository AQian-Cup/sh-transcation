<template>
  <div class="chooseAll">
    <div class="logo"><img  @click="backHome" src="../../brand/logo.png" /></div>
    <el-radio-group
      v-model="radio"
      size="medium"
      @change="changeTo"
      class="chooseReal"
      style="
        border: 2px solid rgba(135, 206, 203, 0.5);
        border-radius: 20px;
        padding: 3%;
      "
    >
      <el-radio-button
        label="登录"
        style="margin-bottom: 80px"
      ></el-radio-button>
      <el-radio-button
        label="注册"
        style="margin-bottom: 80px"
      ></el-radio-button>
      <router-view></router-view>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "choose",
  data() {
    return {
      radio: "登录",
    };
  },
  methods: {
    changeTo(e) {
      if (e == "登录") {
        this.$router.push({
          path: "/choose/login",
        });
      } else {
        this.$router.push({
          path: "/choose/register",
        });
      }
    },
    backHome(){
      this.$router.push({
        path:"/"
      })
    }
  },
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