<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item @click="goHome">首页</el-menu-item>
      <el-menu-item @click="goBulletin">公告</el-menu-item>
      <el-menu-item @click="goActivity">活动</el-menu-item>
      <el-menu-item @click="aboutUs">关于我们</el-menu-item>
    </el-menu>
    <el-dialog title="标题" :visible.sync="dialogCardVisible" width="40%">
      <el-card shadow="hover">
        <div slot="header" class="insideTitle">标题</div>
        <div class="insideContent">内容</div>
      </el-card>
    </el-dialog>
    <el-dialog title="关于我们" :visible.sync="dialogVisible" width="40%"
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
        aboutContent
      }}</el-dialog
    >
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      dialogCardVisible: false,
      dialogVisible: false,
      goContent: [],
      aboutContent: "你好,我们是来自于兰州理工大学的参赛团队--再转手。",
    };
  },
  methods: {
    async goHome() {
      this.$router.push({
        path: "/",
      });
      await this.$store.dispatch("show");
    },
    async goBulletin() {
      this.title="公告"
      this.dialogCardVisible = true;
      let res = await this.$API.bulletin.bulletin();
      this.goContent = res.data;
    },
    async goActivity() {
      this.title="活动"
      this.dialogCardVisible = true;
      let res = await this.$API.activity.activity();
      this.goContent = res.data;
    },
    aboutUs() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  display: flex;
  justify-content: center;
  border-bottom: none;
}
.insideTitle{
  font-size: 24px;
}
.insideContent{
  font-size: 12px;
}
</style>