<template>
  <div class="bg-color">
    <top></top>
    <div class="other">
      <img src="./logo.png" class="logo" @click="backHome" />
      <input
        v-model="input"
        placeholder="在此处输入搜索内容"
        @keydown.enter="goSearch"
        class="input"
      />
      <button @click="goSearch" class="buttonSearch">搜&nbsp;&nbsp;索</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import top from "./top";

export default {
  name: "brand",
  data() {
    return {
      input: "",
    };
  },
  components: {
    top,
  },
  methods: {
    backHome() {
      location.reload(true);
    },
    async goSearch() {
      if (this.input == "") {
        this.$message("请输入搜索内容");
        return;
      }
      let req = {
        Content: this.input,
      };
      await this.$API.search.search(req);
    },
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
  -webkit-appearance: none;
  outline: none;
  margin-left: 280px;
  padding-left: 18px;
  width: 600px;
  height: 40px;
  border-radius: 25px;
  font-size: 25px;
}
.buttonSearch {
  border-radius: 25px;
  margin-left: 60px;
  width: 120px;
  height: 40px;
  background-color: rgba(255, 217, 0);
  font-size: 25px;
  color: white;
}
</style>