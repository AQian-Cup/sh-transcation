<template>
  <div>
    <el-form label-position="left" :model="form" label-width="75px">
      <el-form-item label="用户名">
        <el-input
          placeholder="请输入用户名"
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
      <el-form-item label="确认密码">
        <el-input
          placeholder="请再次输入密码"
          v-model="form.againpassword"
          show-password
          prefix-icon="el-icon-s-opportunity"
        >
        </el-input>
      </el-form-item>
      <el-button round type="primary" @click="onSubmit" style="margin-top: 10%">
        注册
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        againpassword: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      if (this.form.password !== this.form.againpassword) {
        return console.log("密码不一致");
      }
      let data = {
        Username: this.form.username,
        Password: this.form.password,
      };
      await this.$API.register.register(data)
    },
  },
};
</script>

<style>
.el-form {
  margin: auto;
}
</style>
