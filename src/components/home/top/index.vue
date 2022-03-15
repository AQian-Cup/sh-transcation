<template>
  <div>
    <hr />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="border-bottom: none !important"
    >
      <el-menu-item>首页</el-menu-item>
      <el-menu-item>公告</el-menu-item>
      <el-menu-item>活动</el-menu-item>
      <el-menu-item>关于我们</el-menu-item>
    </el-menu>
    <hr />
  </div>
</template>

<script>
export default {
  name: "top",
};
</script>

<style>
.el-menu-demo {
  display: flex;
  justify-content: center;
  border-bottom: none;
}
</style>