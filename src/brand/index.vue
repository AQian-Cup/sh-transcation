<template>
  <div class="bg-color">
    <top></top>
    <div class="other">
      <img src="./logo.png" class="logo" @click="backHome" />
      <input placeholder="在此处输入搜索内容" class="input" />
      <button class="search">搜  索</button>
    </div>
    <router-view></router-view>
    <sidebar></sidebar>
  </div>
</template>

<script>
import top from "./top";
import sidebar from "./sidebar";

export default {
  name: "brand",
  data() {
    return {
      items: [],
    };
  },
  components: {
    top,
    sidebar,
  },
  methods: {
    backHome() {
      location.reload(true);
    },
  },
  mounted() {
    this.$API.show
      .show()
      .then((b) => {
        console.log(b);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  width: 280px;
  height: 100px;
}
.bg-color {
  background-image: radial-gradient(
    circle,
    rgba(107, 247, 130, 0.1) 0,
    rgba(29, 219, 194, 0.3) 40%,
    rgba(135, 207, 235, 0.5) 70%
  );
  width: 100%;
  height: 100%;
}
.other {
  display: flex;
  align-items: center;
}
.input {
  border: 1px solid rgba(128, 128, 128, 0.5);
  -webkit-appearance:none;
  outline: none;
  margin-left: 269px;
  padding-left: 18px;
  width: 650px;
  height: 40px;
  border-radius: 25px;
  font-size: 25px;
}
.search{
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 25px;
  margin-left: 35px;
  width: 100px;
  height: 40px;
  background-color: rgba(255, 217, 0);
  font-size: 25px;
  color:white;
}
</style>