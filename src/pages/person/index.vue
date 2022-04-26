<template>
  <div class="person">
    <div class="main">
      <el-avatar shape="square" :size="200" :src="url"></el-avatar>
      <div class="form">
        <el-form
          label-position="left"
          label-width="80px"
          style="text-align: left"
        >
          <el-form-item label="用户名：">
            <el-input
              :disabled="!isEditing"
              v-model="username"
              style="width: 50%"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input
              :disabled="!isEditing"
              v-model="password"
              style="width: 50%"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group :disabled="!isEditing" v-model="gender">
              <el-radio label="0">男</el-radio>
              <el-radio label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="简介：">
            <el-input
              :disabled="!isEditing"
              v-model="profile"
              type="textarea"
              resize="none"
              rows="3"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="floating" @click="editChange">
        <i class="el-icon-edit"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "person",
  data() {
    return {
      isEditing: false,
      username: "1",
      password: "2",
      gender: "0",
      profile: "4",
    };
  },
  methods: {
    async editChange() {
      this.isEditing = !this.isEditing;
      if(this.isEditing == false){
        let req = {
          Username:this.username,
          Password:this.password,
          Gender:this.gender,
          Profile:this.profile
        }
        let res = await this.$API.person.person(req)
        this.username = res.data.Username
        this.password = res.data.Password
        this.gender = res.data.Gender
        this.profile = res.data.Profile
      }
    },
  },
  mounted() {
    this.$API.person.person();
  },
};
</script>

<style scoped>
.person {
  display: flex;
  justify-content: center;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background: white;
}
.el-avatar {
  margin: 2%;
}
.form {
  width: 80%;
  margin-top: 1%;
  margin-bottom: 3%;
}
.el-form-item {
  margin: 5% auto;
}
.floating {
  display: flex;
  cursor: pointer;
  position: fixed;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: calc((100% - 161px) / 2 + 40%);
  right: 1%;
  background-color: #fff;
}
.floating > i {
  display: flex;
  margin: auto;
  font-size: 3em;
  color: #606266;
  transition: color 0.5s ease-in;
}
.floating > i:hover {
  color: #409eff;
}
</style>