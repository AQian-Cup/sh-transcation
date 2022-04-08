<template>
  <div class="main">
    <navigationbar></navigationbar>
    <div>
      <el-carousel height="450px">
        <el-carousel-item>
          <img src="./ad1.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./ad2.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./ad3.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="./ad4.jpg" />
        </el-carousel-item>
      </el-carousel>
      <div>
        <show
          v-for="item in res.data"
          :key="item.Iid"
          :title="item.Title"
          :content="item.Content"
          :time="item.Time"
          :author="item.Username"
        ></show>
      </div>
    </div>
    <user></user>
  </div>
</template>

<script>
import navigationbar from "./navigationbar";
import show from "./show";
import user from "./user";

export default {
  name: "home",
  data() {
    return {
      url1: require("./ad1.jpg"),
      url2: require("./ad2.jpg"),
      url3: require("./ad3.jpg"),
      url4: require("./ad4.jpg"),
      res: {},
    };
  },
  props: ["searchRes"],
  components: {
    navigationbar,
    show,
    user,
  },
  async mounted() {
    this.res = await this.$API.show.show();
    console.log(this.res.data);
  },
};
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>