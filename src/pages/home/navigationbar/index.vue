<template>
  <div class="navigation">
    <ul class="list">
      <li>家用电器</li>
      <li>电脑数码</li>
      <li>个护化妆</li>
      <li>服饰鞋包</li>
      <li>日用百货</li>
      <li>配饰腕表</li>
      <li>图书影像</li>
      <li>玩模乐器</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navigationbar",
};
</script>

<style>
@font-face {
  font-family: "webfont1";
  font-display: swap;
  src: url("//at.alicdn.com/t/webfont_askq80dbb6i.ttf") format("truetype"); /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
}
.navigation {
  border: 2px solid lemonchiffon;
  border-radius: 5%;
  margin-right: 8px;
  width: 15%;
  height: 50%;
  overflow: auto;
}
.list {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding: 0;
}
.list > li {
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;
  font-family: "webfont1" !important;
  font-size: 1.5em;
  margin: 0;
  transition: background-color 0.3s linear;
}
.list > li:hover {
  background-color: blanchedalmond;
}
</style>