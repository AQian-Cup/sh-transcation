<template>
  <div :style="conTop">
      <el-form label-position="left" :model="form" label-width="75px">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" v-model="form.username" prefix-icon="el-icon-user-solid"> </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="form.userpassword" show-password prefix-icon="el-icon-s-opportunity"> </el-input>
        </el-form-item>
        <el-button round type="primary" @click="onSubmit"> 登录 </el-button>
      </el-form>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        userpassword: "",
      },
      conTop: {
        display: "flex",
        position: "absolute",
        width: "100vw",
        height: "100vh",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("登录成功");
    },
  },
};
</script>

<style>
.el-form {
  margin: auto;
}
</style>
