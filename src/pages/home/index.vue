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
        <el-carousel-item><img src="./ad3.jpg" /></el-carousel-item>
        <el-carousel-item><img src="./ad4.jpg" /></el-carousel-item>
      </el-carousel>
      <div>
        <show></show>
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
      tips:[
      ]
    };
  },
  components: {
    navigationbar,
    show,
    user,
  },
  // async mounted() {
  //   await this.$API.show.show()
  // },
};
</script>

<style>
.main {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>