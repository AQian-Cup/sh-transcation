<template>
  <div class="all">
    <div class="show">
      <div class="title">{{ form.title }}</div>
      <div class="image">
        <img :src="img" />
      </div>
      <div class="text">
        <div class="time">{{ form.time }}</div>
        <div class="content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ form.content }}
        </div>
        <div class="price">价格：{{ form.price }}</div>
      </div>
      <div class="user">
        <el-avatar shape="square" fit="fill" :size="200" :src="url"></el-avatar>
        <div style="font-size: 1.5em">{{ form.username }}</div>
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
          @keydown.enter="goCommit"
        />
        <button @click="goCommit" class="commentWriteButton">
          评&nbsp;&nbsp;论
        </button>
      </div>
    </div>
    <comment
      v-for="item in commentAll"
      :key="item.Cid"
      :account="item.Account"
      :username="item.Username"
      :content="item.Content"
      :time="item.Time"
    ></comment>
  </div>
</template>

<script>
import comment from "./comment";

export default {
  name: "posts",
  data() {
    return {
      url: require("../../assets/user.png"),
      message: "123",
      commit: "",
      img: require("./16212551.jpg"),
      form: {
        title: "",
        content: "",
        price: "",
        time: "",
        username: "",
      },
      commentAll: [],
    };
  },
  components: {
    comment,
  },
  computed: {
    replyUser() {
      return this.$store.state.replyUser;
    },
  },
  watch: {
    replyUser() {
        this.commit = "回复" + this.replyUser + "：" + this.commit;
        this.$store.dispatch("clear");
    },
  },
  methods: {
    async goCommit() {
      let req = {
        Pid: this.$route.query.pId,
        Content: this.commit,
      };
      await this.$API.posts.comment(req);
      this.commentReq();
      this.commit = ""
    },
    async textReq() {
      let req = {
        Pid: this.$route.query.pId,
      };
      let res = await this.$API.posts.posts(req);
      this.form.title = res.data.Title;
      this.form.content = res.data.Content;
      this.form.price = res.data.Price;
      this.form.time = res.data.Time;
      this.form.username = res.data.Username;
      this.img = res.data.Photo_name;
    },
    async commentReq() {
      let req = {
        Pid: this.$route.query.pId,
      };
      let res = await this.$API.posts.commentGet(req);
      this.commentAll = res.data;
    },
  },
  mounted() {
    this.textReq();
    this.commentReq();
  },
};
</script>

<style scoped>
@font-face {
  font-family: "price";
  src: url("../../assets/number.ttf"), url("../../assets/price_CN.ttf");
}
img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}
.all {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.time {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 2/3;
  font-style: italic;
  color: gray;
}
.content {
  grid-row: 2/3;
  grid-column: 1/3;
}
.price {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-row: 3/4;
  grid-column: 2/3;
  font-family: "price";
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
  margin-top: 32px;
  height: 96px;
}
.commentWriteContent {
  width: 1000px;
  height: 100%;
  margin-right: 3%;
  border-radius: 1%/3%;
  font-family: "微软雅黑";
  padding: 0;
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