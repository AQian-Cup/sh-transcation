<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item @click="goHome">首页</el-menu-item>
      <el-menu-item>公告</el-menu-item>
      <el-menu-item>活动</el-menu-item>
      <el-menu-item>关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "top",
  methods:{
    async goHome(){
      this.$router.push({
        path:"/"
      })
      this.$parent.searchRes = await this.$API.show.show() 
    }
  }
};
</script>

<style>
.el-menu-demo {
  display: flex;
  justify-content: center;
  border-bottom: none;
}
</style>