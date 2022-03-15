<template>
  <div id="app">
    <home></home>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import home from "./components/home";

export default {
  name: "App",
  components: {
    home,
  },
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  border: hidden;
}
</style>
