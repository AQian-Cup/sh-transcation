<template>
  <div class="main">
    <navigationbar></navigationbar>
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img :src="url1" /></div>
          <div class="swiper-slide"><img :src="url2" /></div>
          <div class="swiper-slide"><img :src="url3" /></div>
          <div class="swiper-slide"><img :src="url4" /></div>
        </div>
      </div>
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
import Swiper from "swiper";

import "swiper/dist/css/swiper.css";

export default {
  name: "home",
  data() {
    return {
      url1: require("./ad1.jpg"),
      url2: require("./ad2.jpg"),
      url3: require("./ad3.jpg"),
      url4: require("./ad4.jpg"),
    };
  },
  components: {
    navigationbar,
    show,
    user,
  },
  mounted() {
    new Swiper(".swiper-container", {
      observer: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 2000,
    });
  },
};
</script>

<style>
.main {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #fff;
}
.swiper-container {
  width: 640px;
  height: 360px;
  margin: 0;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>