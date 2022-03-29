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
      <div class="message">
        <div class="head"></div>
        <div></div>
        <button>与TA私聊</button>
      </div>
    </div>
    <div class="commentWrite">
      <div class="commentWriteHead"></div>
      <input class="commentWriteContent" />
      <button>评论</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style>
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
.message {
  grid-column: 3/4;
  grid-row: 1/3;
}
img {
  width: 100%;
  height: 100%;
}
</style>