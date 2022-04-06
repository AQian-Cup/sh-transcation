<template>
  <div class="all">
    <div class="show">
      <div class="title">这是标题</div>
      <div class="image">
        <img src="./16212551.jpg" />
      </div>
      <div class="text">
        <div class="describe">这是描述</div>
        <div class="price">这是价格</div>
      </div>
      <div class="user">
        <el-avatar shape="square" :size="200" :src="url"></el-avatar>
        <div class="message">{{ message }}</div>
        <button class="chat">与TA私聊</button>
      </div>
    </div>
    <div class="commentWrite">
      <div class="commentWriteHead">
        <textarea placeholder="在此输入你的评论" class="commentWriteContent" />
        <button class="commentWriteButton">评论</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      url: require("../../assets/user.png"),
      message: "123",
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.show {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-template-rows: 1fr 5fr;
  gap: 10px;
  margin: 0 15%;
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
  grid-column: 1/2;
  grid-row: 2/3;
}
.text {
  display: flex;
  justify-content: center;
  grid-column: 2/3;
  grid-row: 2/3;
}
.user {
  grid-column: 3/4;
  grid-row: 1/3;
  background-color: white;
  border-radius: 5%;
  border: 2px solid lemonchiffon;
}
.message {
  text-align: left;
  margin: 5%;
  height: 30%;
  border-radius: 5%;
  font-size: 20px;
}
.chat {
  border-radius: 5%/10%;
  width: 60%;
  height: 15%;
  font-size: 20px;
  color: white;
  background-color: aquamarine;
}
.commentWriteHead{
  display: flex;
  justify-content: center;
  margin-top: 64px;
  height: 96px;
}
.commentWriteContent {
  width: 800px;
  margin-right: 3%;
  border-radius: 1%/3%;
  font-family: "微软雅黑";
}
.commentWriteButton{
  width: 128px;
  border-radius: 3%/6%;
  margin-left: 3%;
  font-size:32px;
  font-family: "微软雅黑";
}
</style>