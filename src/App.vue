<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import login from "./pages/login";

export default {
  name: "App",
  components: {
    login,
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
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
