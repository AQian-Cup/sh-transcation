<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item @click="goHome">首页</el-menu-item>
      <el-menu-item @click="goBulletin">公告</el-menu-item>
      <el-menu-item @click="goActivity">活动</el-menu-item>
      <el-menu-item @click="aboutUs">关于我们</el-menu-item>
    </el-menu>
    <el-dialog
    :title="title"
    :visible.sync="dialogCardVisible"
    width="40%"
    >

    </el-dialog>
    <el-dialog
    title="关于我们"
    :visible.sync="dialogVisible"
    width="40%"
    ></el-dialog>
  </div>
</template>

<script>
export default {
  name: "top",
  data(){
    return{
      title:"",
      dialogCardVisible:false,
      dialogVisible:false,
      goContent:[],
      aboutContent:""
    }
  },
  methods:{
    async goHome(){
      this.$router.push({
        path:"/"
      })
      await this.$store.dispatch("show")
    },
    async goBulletin(){
      this.dialogCardVisible = true
      let res = await this.$API.bulletin.bulletin()
      this.goContent = res.data
    },
    async goActivity(){
      this.dialogCardVisible = true
      let res = await this.$API.activity.activity()
      this.goContent = res.data
    },
    aboutUs(){
      this.dialogVisible = true
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