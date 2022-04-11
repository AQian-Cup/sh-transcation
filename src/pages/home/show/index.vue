<template>
  <div class="all" @click="jump">
    <img :src="this.img" />
    <div class="describe1">
      <div>{{ title }}</div>
      <div>{{ content }}</div>
    </div>
    <div class="describe2">
      <div>{{ time }}</div>
      <div>{{ author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show",
  props: ["title", "content", "time", "author", "postId"],
  data() {
    return {
      img: require("./imagetest.png"),
    };
  },
  methods: {
    jump() {
      this.$router.push({
        path: "/posts",
        query: {
          postId: this.postId,
        },
      });
    },
  },
  async mounted() {
    let req = { Iid: this.postId };
    let res = await this.$API.imageRes.imageRes(req);
    let data = res.data
    this.img =
      "data:image/png;base64," +
      btoa(
        new Uint8Array(data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
  },
};
</script>

<style scoped>
div {
  display: flex;
}

img{
  width: 200px;
  height: 200px;
}

.all {
  cursor: pointer;
  width: 800px;
  height: 300px;
  margin-top: 20px;
  border-radius: 5%/10%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 2px solid lemonchiffon;
}

.describe1 {
  width: 400px;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
}

.describe2 {
  width: 200px;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>