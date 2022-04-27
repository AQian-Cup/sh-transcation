<template>
  <div>
    <top></top>
    <div class="other">
      <img src="./logo.png" class="logo" />
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
    async goSearch() {
      if (this.input == "") {
        this.$message("请输入搜索内容");
        return;
      }
      await this.$store.dispatch("search", this.input);
      this.input = "";
      this.$router.push({
        path: "/search",
        query: {
          search: this.input,
        },
      });
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
.other {
  display: flex;
  align-items: center;
}
.input {
  margin-left: calc((100% - 1382px) / 2 + 10px);
  margin-right: 60px;
  padding-left: 18px;
  width: 600px;
  height: 40px;
  border-radius: 25px;
  font-size: 25px;
}
.buttonSearch {
  border-radius: 26px;
  width: 120px;
  height: 40px;
  background-color: rgba(255, 217, 0);
  font-size: 25px;
  color: white;
}
</style>