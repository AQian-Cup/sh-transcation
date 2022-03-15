<template>
  <div class="bg-color">
    <div style="display: flex;">
    <img src="./logo.png" class="logo">
    </div>
    <top></top>
    <div class="main">
      <navigationbar></navigationbar>
      <slideshow></slideshow>
      <user></user>
    </div>
    <sidebar></sidebar>
  </div>
</template>

<script>
import top from "./top";
import navigationbar from "./navigationbar";
import slideshow from "./slideshow";
import user from "./user";
import sidebar from "./sidebar";

export default {
  name: "home",
  components: {
    top,
    navigationbar,
    slideshow,
    user,
    sidebar,
  },
};
</script>

<style>
.logo{
  width: 580px;
  height: 200px;
}
.bg-color {
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #fff;
}
</style>