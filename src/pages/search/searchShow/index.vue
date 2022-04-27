<template>
  <div class="searchShow" @click="jump">
    <div class="image"><img :src="img" /></div>
    <div>{{ title }}</div>
    <div>{{ content }}</div>
    <div>{{ author }}</div>
    <div>{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: "searchShow",
  props: ["title", "content", "time", "author", "pId"],
  data() {
    return {
      img: require("./imagetest.png"),
    };
  },
  methods: {
    jump() {
      this.$router.push({
        path: "posts",
        query: {
          pId: this.pId,
        },
      });
    },
  },
};
</script>

<style scoped>
img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}
.searchShow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background: white;
}
.image {
  position: relative;
}
</style>