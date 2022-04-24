<template>
  <div class="all" @click="jump">
    <img v-lazy="img" />
    <div class="describe1">
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </div>
    <div class="describe2">
      <div class="author">{{ author }}</div>
      <div class="time">{{ time }}</div>
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
        path: "posts",
        query: {
          postId: this.postId,
        },
      });
    },
  },
  async mounted() {
    let req = { Iid: this.postId };
    let res = await this.$API.imageRes.imageRes(req);
    let data = res.data;
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
@font-face {
  font-family: "choice&price";
  src: url("../../../assets/choice&price.ttf");
}
div {
  display: flex;
}

img {
  width: 400px;
  height: 300px;
}

.all {
  cursor: pointer;
  width: 450px;
  height: 450px;
  margin: 1%;
  border-radius: 5%/10%;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid lemonchiffon;
}

.describe1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}

.describe1 > div {
  margin: 3% auto;
}

.describe2 {
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin-top: 5%;
}

.describe2 > div{
  width: 80px;
  height: 20px;
}

.title{
  font-weight: bold;
  font-size: 1.5em;
}

.time {
  color: gray;
  font-family: "choice&price";
}
</style>