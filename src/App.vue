<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
  background-image: radial-gradient(
    circle,
    rgba(107, 247, 130, 0.1) 0,
    rgba(29, 219, 194, 0.3) 40%,
    rgba(135, 207, 235, 0.5) 70%
  );
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  border: hidden;
  overflow: auto;
}
textarea {
  resize: none;
}
button {
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0;
}
</style>
