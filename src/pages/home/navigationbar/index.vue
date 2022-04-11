<template>
  <div class="navigation">
    <div class="list" @click="navGoSearch">
      <div class="listItem">家用电器</div>
      <div class="listItem">电脑数码</div>
      <div class="listItem">个护化妆</div>
      <div class="listItem">服饰鞋包</div>
      <div class="listItem">日用百货</div>
      <div class="listItem">配饰腕表</div>
      <div class="listItem">图书影像</div>
      <div class="listItem">玩模乐器</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigationbar",
  methods:{
    async navGoSearch(e){
      let req = {
        Content:e.target.innerHTML
      }
      this.$router.push({
        path:"/",
        query:{
          search:req.Content
        }
      })
      this.$parent.$parent.searchRes = await this.$API.search.search(req)
    }
  }
};
</script>

<style>
@font-face {
  font-family: "navigationbar";
  src: url("../../../assets/navigationbar.ttf");
}
.navigation {
  border: 2px solid lemonchiffon;
  border-radius: 5%;
  margin-right: 8px;
  width: 285px;
  height: 475px;
  overflow: auto;
  background-color: white;
}
.list {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
.listItem {
  display: flex;
  position: relative;
  align-items: center;
  flex: 1;
  cursor: pointer;
  font-family: "navigationbar";
  font-size: 1.4em;
  transition: font-size 0.2s linear;
  margin: 0;
  z-index: 0;
}
.listItem:hover {
  font-size: 1.5em;
}
.listItem::before {
  display: block;
  position: absolute;
  content: "";
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: -1;
  background: lemonchiffon;
  height: 100%;
  width: 100%;
}
.listItem:hover::before {
  transform: translateX(0);
}
</style>