<template>
  <div>
    <el-form label-position="left" :model="form" label-width="75px">
      <el-form-item label="账号">
        <el-input
          placeholder="请输入账号"
          v-model="form.username"
          prefix-icon="el-icon-user-solid"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          placeholder="请输入密码"
          v-model="form.password"
          show-password
          prefix-icon="el-icon-s-opportunity"
        >
        </el-input>
      </el-form-item>
      <el-button round type="primary" @click="onSubmit" style="margin-top: 30%">
        登录
      </el-button>
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
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      let req = {
        Account: this.form.username,
        Password: this.form.password,
      };
      await this.$store.dispatch("userlogin", req);
      if (this.$store.state.error == "") {
        this.$router.push({
          path: "/",
        });
        location.reload()
        this.$message({
          message: "登录成功",
          type: "success",
        });
      } else {
        this.$message.error(this.$store.state.error);
        this.$store.dispatch("clear")
      }
    },
  },
};
</script>

<style>
.el-form {
  margin: auto;
}
</style>
