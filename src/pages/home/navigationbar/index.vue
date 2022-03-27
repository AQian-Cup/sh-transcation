<template>
  <div class="navigation">
    <ul class="list">
      <li>家用电器</li>
      <br />
      <li>电脑数码</li>
      <br />
      <li>个护化妆</li>
      <br />
      <li>服饰鞋包</li>
      <br />
      <li>日用百货</li>
      <br />
      <li>配饰腕表</li>
      <br />
      <li>图书影像</li>
      <br />
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
.navigation {
  border: 2px solid skyblue;
  border-radius: 5%;
  margin-right: 8px;
  width: 15%;
  height: 50%;
}
.list {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.list li {
  cursor: pointer;
  font-size: 1.5em;
  margin: auto 20px;
  background-color: #fff;
  transition: background-color 0.1s linear 0s;
}
.list li:hover {
  background-color: blanchedalmond;
}
</style>