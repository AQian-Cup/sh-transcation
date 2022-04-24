<template>
  <div class="all">
    <div class="show">
      <div class="title">{{ form.title }}</div>
      <div class="image">
        <img :src="img" />
      </div>
      <div class="text">
        <div class="name">{{ form.name }}</div>
        <div class="time">{{ form.time }}</div>
        <div class="content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ form.content }}
        </div>
        <div class="choice">{{ form.choice }}</div>
        <div class="price">{{ form.price }}</div>
      </div>
      <div class="user">
        <el-avatar shape="square" :size="200" :src="url"></el-avatar>
        <div style="font-size:1.5em">{{ form.username }}</div>
        <div class="message"></div>
        <button class="chat">与TA私聊</button>
      </div>
    </div>
    <div class="commentWrite">
      <div class="commentWriteHead">
        <textarea
          placeholder="在此输入你的评论"
          class="commentWriteContent"
          v-model="commit"
        />
        <button @click="goCommit" class="commentWriteButton">
          评&nbsp;&nbsp;论
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts",
  data() {
    return {
      url: require("../../assets/user.png"),
      message: "123",
      commit: "",
      img: require("./16212551.jpg"),
      form: {
        title: "标题",
        name: "商品名",
        content: "内容",
        price: "999",
        time: "2022-4-21",
        choice: "卖",
        username: "Cupkiller",
      },
    };
  },
  methods: {
    async goCommit() {
      let req = {
        Commit: this.commit,
      };
      await this.$API.commit.commit(req);
    },
    async imgReq() {
      let req = { Iid: this.$route.query.postId };
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
    async textReq() {
      let req = {
        Iid: this.$route.query.postId,
      };
      let res = await this.$API.posts.posts(req);
      this.form.title = res.data.Title;
      this.form.name = res.data.Name;
      this.form.content = res.data.Content;
      this.form.price = res.data.Price;
      this.form.time = res.data.Time;
      this.form.choice = res.data.Choice;
      this.form.username = res.data.Username;
    },
  },
  async mounted() {
    // this.textReq();
    // this.imgReq();
  },
};
</script>

<style scoped>
@font-face {
  font-family: "choice&price";
  src: url("../../assets/choice&price.ttf");
}
img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}
.show {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-template-rows: 1fr 5fr;
  gap: 10px;
  margin: 0 15%;
  background-color: #fff;
  border: 2px solid lemonchiffon;
}
.title {
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 2.5em;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
.image {
  position: relative;
  grid-column: 1/2;
  grid-row: 2/3;
}
.text {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-column: 2/3;
  grid-row: 2/3;
  text-align: left;
  font-size: 1.2em;
}
.name {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
}
.time {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-style: italic;
  color: gray;
}
.content {
  grid-row: 2/3;
  grid-column: 1/3;
}
.choice {
  display: flex;
  align-items: center;
  font-family: "choice&price";
  font-size: 1.5em;
}
.price {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "choice&price";
  font-size: 1.5em;
}
.user {
  grid-column: 3/4;
  grid-row: 1/3;
  border-radius: 5%;
}
.message {
  text-align: left;
  margin: 5%;
  height: 16%;
  border-radius: 5%;
  font-size: 20px;
}
.chat {
  border-radius: 5%/10%;
  width: 60%;
  height: 10%;
  font-size: 20px;
  color: white;
  background-color: aquamarine;
}
.commentWriteHead {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  height: 96px;
}
.commentWriteContent {
  width: 800px;
  height: 100%;
  margin-right: 3%;
  border-radius: 1%/3%;
  font-family: "微软雅黑";
}
.commentWriteButton {
  width: 128px;
  height: 94px;
  border-radius: 3%/6%;
  margin-left: 3%;
  font-size: 32px;
  font-family: "微软雅黑";
  background-color: rgba(255, 217, 0);
  color: white;
}
</style>