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
  word-break: break-all;
}
textarea {
  resize: none;
}
button {
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0;
  position: relative;
}
button::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: -1;
  margin: -2px;
  border-radius: inherit;
  background-image: linear-gradient(
    135deg,
    rgb(95, 253, 240),
    rgb(220, 255, 24)
  );
}
button:hover::before {
  opacity: 1;
}
input {
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #dcdfe6;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
input:hover {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
input:focus {
  border: 1px solid rgba(0, 0, 0, 0.5);
}
textarea {
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #dcdfe6;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
textarea:hover {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
textarea:focus {
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.el-dialog__body {
  text-align: left;
}
.el-avatar > img {
  width: 100%;
}
</style>
