<template>
  <div>
    <top></top>
    <div class="other">
      <img src="./logo.png" class="logo" @click="reload" />
      <input
        v-model="input"
        placeholder="在此处输入搜索内容"
        @keydown.enter="goSearch"
        class="input"
      />
      <button @click="goSearch" class="buttonSearch">搜&nbsp;&nbsp;索</button>
    </div>
    <router-view></router-view>
    <el-dialog title="你好" :visible.sync="dialogFormVisible">
      <el-form :label-position="left" label-width="100px">
        <el-form-item label="帖子标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            action=""
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >提 交</el-button
        >
      </div></el-dialog
    >
  </div>
</template>

<script>
import top from "./top";

export default {
  name: "brand",
  data() {
    return {
      input: "",
      dialogFormVisible: false,
      form: {
        title: "",
      },
    };
  },
  components: {
    top,
  },
  methods: {
    reload() {
      this.dialogFormVisible = true;
    },
    async goSearch() {
      if (this.input == "") {
        this.$message("请输入搜索内容");
        return;
      }
      let req = {
        Content: this.input,
      };
      await this.$API.search.search(req);
    },
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  width: 280px;
  height: 100px;
}
.other {
  display: flex;
  align-items: center;
}
.input {
  border: 1px solid rgba(128, 128, 128, 0.5);
  -webkit-appearance: none;
  outline: none;
  margin-left: 278px;
  padding-left: 18px;
  width: 600px;
  height: 40px;
  border-radius: 25px;
  font-size: 25px;
}
.buttonSearch {
  border-radius: 26px;
  margin-left: 56px;
  width: 120px;
  height: 40px;
  background-color: rgba(255, 217, 0);
  font-size: 25px;
  color: white;
}
</style>