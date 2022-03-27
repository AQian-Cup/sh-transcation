<template>
  <div class="bg-color">
    <top></top>
    <div style="display: flex">
      <img src="./logo.png" class="logo" @click="backHome" />
    </div>
    <router-view></router-view>
    <sidebar></sidebar>
  </div>
</template>

<script>
import top from "./top";
import sidebar from "./sidebar";

export default {
  name: "brand",
  data() {
    return {
      items: [],
    };
  },
  components: {
    top,
    sidebar,
  },
  methods: {
    backHome() {
      location.reload(true);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  width: 290px;
  height: 100px;
}
.bg-color {
  width: 100%;
  height: 100%;
}
</style>