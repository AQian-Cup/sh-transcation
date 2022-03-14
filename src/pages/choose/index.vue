<template>
  <div class="chooseAll">
    <el-radio-group
      v-model="radio"
      size="medium"
      @change="changeTo"
      class="chooseReal"
      style="border:2px solid rgba(135, 206, 203, 0.5); border-radius: 20px; padding:3%;"
    >
      <el-radio-button
        label="登录"
        style="margin-bottom: 100px"
      ></el-radio-button>
      <el-radio-button
        label="注册"
        style="margin-bottom: 100px"
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
          path: "/login",
        });
      } else {
        this.$router.push({
          path: "/register",
        });
      }
    },
  },
};
</script>

<style>
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